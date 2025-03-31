import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { ApiGatewayManagementApiClient, PostToConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi";
 
const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);
const socketsTable = process.env.SOCKETS_TABLE;
const messagesTable = process.env.MESSAGES_TABLE;
const api = process.env.API_URI;
const stage = process.env.STAGE;
const apiGateway = new ApiGatewayManagementApiClient({
    endpoint: api + "/" + stage
});
 
 
const defaultHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Expose-Headers":
      "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Allow-Credentials": true,
  };
 
 
export const handler = async (event) => {
    try {
        if (event.requestContext.http && event.requestContext.http.method) {
            if (event.requestContext.http.method.toLowerCase() === "options") {
              return {
                statusCode: 200,
                body: "",
                headers: defaultHeaders,
              };
            }
          }
        const sessionID = event.queryStringParameters?.sessionID;
        if (!sessionID) {
            return { statusCode: 400, body: "Missing sessionID in query parameters." };
        }
        console.log(event);
        const message = JSON.parse(event.body);
        if (!message) {
            return { statusCode: 400, body: "Missing message in request body." };
        }
        const response = await ddb.send(new GetCommand({
            TableName: socketsTable,
            Key: { session: sessionID }
        }));
        if (!response.Item) {
            await ddb.send(new PutCommand({
                TableName: messagesTable,
                Item: {
                    sessionID: sessionID,
                    timestamp: Date.now().toString(),
                    message: message
                }
            }));
            return {
                statusCode: 200,
                body: JSON.stringify({clientOpened: false}),
                headers: defaultHeaders
            };
        }
        const connectionId = response.Item.connection;
        await apiGateway.send(new PostToConnectionCommand({
            ConnectionId: connectionId,
            Data: JSON.stringify({ message })
        }));
        return { statusCode: 200, body: JSON.stringify({clientOpened:true}) };
    } catch (error) {
        console.error("Error during sending/queing of message:", error);
        return { statusCode: 500, body: "Internal Server Error" };
    }
};