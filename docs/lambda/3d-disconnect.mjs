import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, DeleteCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);
const socketsTable = process.env.SOCKETS_TABLE;

export const handler = async (event) => {
    const connectionId = event.requestContext.connectionId;

    try {
        // Find the sessionID linked to this connectionID
        const scanResponse = await ddb.send(new ScanCommand({
            TableName: socketsTable,
            FilterExpression: "#conn = :conn",
            ExpressionAttributeNames: {
              "#conn": "connection"
            },
            ExpressionAttributeValues: {
              ":conn": connectionId
            }
        }));

        if (scanResponse.Items.length === 0) {
            console.warn(`No session found for connection: ${connectionId}`);
            return { statusCode: 200, body: "No matching session found." };
        }

        // Extract sessionID and delete entry
        const sessionID = scanResponse.Items[0].session;
        await ddb.send(new DeleteCommand({
            TableName: socketsTable,
            Key: { session: sessionID }
        }));

        console.log(`Removed session ${sessionID} for connection ${connectionId}`);
        return { statusCode: 200, body: "Disconnected and removed session." };
    } catch (error) {
        console.error("Error disconnecting WebSocket:", error);
        return { statusCode: 500, body: "Failed to disconnect WebSocket." };
    }
};