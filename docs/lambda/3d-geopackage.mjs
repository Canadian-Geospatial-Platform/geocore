import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import { ApiGatewayManagementApiClient, PostToConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi";
 
const region = process.env.REGION;  // Change to your AWS region
const client = new DynamoDBClient({ region });
const ddb = DynamoDBDocumentClient.from(client);
const socketsTable = process.env.SOCKETS_TABLE;
const api = process.env.API_URI;
const stage = process.env.STAGE;
 
const apiGateway = new ApiGatewayManagementApiClient({
    endpoint: api + "/" + stage
});
 
export const handler = async (event) => {
    // TODO
};