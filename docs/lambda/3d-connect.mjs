import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn";
 
const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);
const socketsTable = process.env.SOCKETS_TABLE;
const sfnClient = new SFNClient({});
const stateMachineArn = process.env.SM_ARN; //"arn:aws:states:ca-central-1:597807258673:stateMachine:test-v3d-redotheworkmachine";
 
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
    console.log("-> Received event:", event);
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
      return {
        statusCode: 400,
        body: "Missing sessionID in query parameters.",
        headers: defaultHeaders,
      };
    }
 
    const connectionId = event.requestContext.connectionId;
    console.log(
      `Storing connection for session: ${sessionID}, connectionId: ${connectionId}`,
    );
 
    // Save connection info to DynamoDB
    await ddb.send(
      new PutCommand({
        TableName: socketsTable,
        Item: { session: sessionID, connection: connectionId },
      }),
    );
 
    // Start the Step Functions state machine asynchronously.
    const executionInput = {
      sessionID,
      connectionId,
    };
    await sfnClient.send(
      new StartExecutionCommand({
        stateMachineArn,
        input: JSON.stringify(executionInput),
      }),
    );
    return { statusCode: 200, body: "Connected", headers: defaultHeaders };
  } catch (error) {
    console.error("Error in connect lambda:", error);
    return {
      statusCode: 500,
      body: "Internal Server Error",
      headers: defaultHeaders,
    };
  }
};