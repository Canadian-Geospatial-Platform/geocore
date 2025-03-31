import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const dynamo = DynamoDBDocument.from(new DynamoDB());
const defaultHeaders = {
  'Content-Type': 'application/json',
};
const jobTable = process.env.JOBS_TABLE;

/**
 * Handler for the websocket recieving message to update the 
 * 
 * @param {*} event     A JSON object containing the request information.
 * @returns             A JSON object containing the response information.
 */
export const handler = async (event) => {
  console.log('->Received event:', JSON.stringify(event, null, 2));

  let statusCode = '200';
  const body = JSON.parse(event.body);
  console.log('->Body:', JSON.stringify(body, null, 2));
  let job = undefined;
  try {
    job = await getJob(body.jobId)
  } catch (err) {
    console.error('error getting task -> ', body.jobId, err);
    return {
      statusCode: "400",
    }
  }
  if (!job) {
    console.error('error getting task -> ', body.jobId);
    return {
      statusCode: "400",
    }
  }
  try {
    const startTime = !job.Started ? new Date().getTime() : job.Started;
    console.log("startTime", startTime);
    const params = {
      TableName: jobTable,
      Key: { JobId: body.jobId },
      UpdateExpression: "set Message = :val1, Progress = :val2, JobStatus = :val3, Started = :val4, Updated = :val5, ConnectionId = :val6, Finished = :val7, FileName = :val8, ContentType = :val9 ",
      ExpressionAttributeValues: {
        ":val1": body.message,
        ":val2": body.progress,
        ":val3": body.status,
        ":val4": !job?.Started ? new Date().getTime() : job.Started,
        ":val5": new Date().getTime(),
        ":val6": event.requestContext.connectionId,
        ":val7": !job.Finished && (body.status == "successful" || body.status == "failed") ? new Date().getTime() : job.Finished,
        ":val8": body.filename ? body.filename : job.FileName,
        ":val9": body.contentType ? body.contentType : (job.ContentType ? job.ContentType : ""),
      },
    };
    console.log('task -> ', JSON.stringify(params, null, 2));
    await dynamo.update(params);
  } catch (err) {
    statusCode = '400';
    const errMessage = JSON.stringify(err);
    console.log('error adding task -> ', body.jobId, err.message);
    return {
      statusCode,
      errMessage,
      defaultHeaders,
    }
  }

  const message = JSON.stringify('Updated');
  return {
    statusCode,
  }
};

/**
 * Get the job information from the database.
 *
 * @param {*} jobId   The id of the job to get the information for.
 * @returns           The job information from the database.
 */
const getJob = async (jobId) => {

  const params = {
    TableName: jobTable,
    Key: { JobId: jobId }
  };

  const job = await dynamo.get(params);
  return job.Item;

}
