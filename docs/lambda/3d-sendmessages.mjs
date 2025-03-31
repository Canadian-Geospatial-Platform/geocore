import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { ApiGatewayManagementApiClient, PostToConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi";

const ddbClient = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(ddbClient);

const api = process.env.API_URI;
const stage = process.env.STAGE;
const messagesTable = process.env.MESSAGES_TABLE
const apiGateway = new ApiGatewayManagementApiClient({
    endpoint: api + "/" + stage
});

export const handler = async (event) => {
  console.log("SendQueuedMessages event input:", event);
  const { sessionID, connectionId } = event;
  if (!sessionID || !connectionId) {
    console.error("Missing sessionID or connectionId in state machine input.");
    return { statusCode: 400, body: "Missing required parameters" };
  }

  try {
    const messagesResult = await ddb.send(new QueryCommand({
      TableName: messagesTable,
      KeyConditionExpression: "#sessionID = :sessionID",
      ExpressionAttributeNames: { "#sessionID": "sessionID" },
      ExpressionAttributeValues: { ":sessionID": sessionID }
    }));

    const messages = messagesResult.Items || [];
    console.log(`Found ${messages.length} queued messages for session ${sessionID}`);

    for (const item of messages) {
      let dataToSend = item.message;
      if (typeof dataToSend !== 'string') {
        dataToSend = JSON.stringify(dataToSend);
      }
      try {
        await apiGateway.send(new PostToConnectionCommand({
          ConnectionId: connectionId,
          Data: dataToSend
        }));
        console.log(`Message sent to connection ${connectionId}`);

        await ddb.send(new DeleteCommand({
          TableName: messagesTable,
          Key: {
            sessionID: item.sessionID,
            timestamp: item.timestamp
          }
        }));

      } catch (err) {
        console.error(`Error sending message to connection ${connectionId}:`, err);
        }
    }

    return { statusCode: 200, body: "Queued messages processed." };
  } catch (error) {
    console.error("Error processing queued messages:", error);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};