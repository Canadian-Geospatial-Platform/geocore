import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const dynamo = DynamoDBDocument.from(new DynamoDB());

const config = {
  jobTable: process.env.JOBS_TABLE
}

export const handler = async (event) => {
  try {
    const job = await getJob(event.requestContext.connectionId);
    if ("running" == job.JobStatus) {
      //Error
      await failJob(job.JobId)
    }
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e.message)
    };
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify('Disconnected'),
  };
  return response;
};

const getJob = async (connectionId) => {

  const params = {
    TableName: config.jobTable,
    IndexName: "ConnectionId-index",
    "KeyConditionExpression": "ConnectionId = :v_ConnectionId",
    "ExpressionAttributeValues": {
      ":v_ConnectionId": connectionId
    },
    //ProjectionExpression: "UserId, TopScore",
    "ScanIndexForward": false
  };

  const job = await dynamo.query(params);
  console.log(job);
  if (!job.Items || job.Items.length !== 1) {
    throw new Error("Job not found");
  }

  return job.Items[0];

}

const failJob = async (jobId) => {
  const params = {
    TableName: config.jobTable,
    Key: { JobId: jobId },
    UpdateExpression: "set JobStatus = :val1, Updated = :val2, Finished = :val3, Message = :val4",
    ExpressionAttributeValues: {
      ":val1": "failed",
      ":val2": new Date().getTime(),
      ":val3": new Date().getTime(),
      ":val4": "Failed for unknown reason",
    },
  };
  await dynamo.update(params);
}
