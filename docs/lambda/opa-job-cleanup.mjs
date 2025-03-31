import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3"

const client = new S3Client();
const dynamo = DynamoDBDocument.from(new DynamoDB());
const maxStartedAge = 60 * 60 * 1000;
const maxFailedAge = 2 * 60 * 60 * 1000;
const maxSuccessAge = 2 * 60 * 60 * 1000;

const config = {
  jobTable: process.env.JOBS_TABLE,
  bucketName: process.env.S3_BUCKET_NAME
}

/**
 * Handler for deleting old jobs and their files from S3 and DynamoDB
 * 
 * @param {*} event input event
 * @param {*} context information about the invocation, function, and execution environment
 * @param {*} callback A callback function to return information to the caller
 */
export const handler = async (event, context, callback) => {

  const startedJobs = await getJobs("accepted", maxStartedAge);
  console.log("startedJobs", startedJobs);
  if (startedJobs && startedJobs.length > 0) {
    await deleteJobs(startedJobs, maxStartedAge);
  };

  const erroredJobs = await getJobs("failed", maxFailedAge);
  console.log("erroredJobs", erroredJobs);
  if (erroredJobs && erroredJobs.length > 0) {
    await deleteJobs(erroredJobs, maxFailedAge);
  };

  const completedJobs = await getJobs("successful", maxSuccessAge);
  console.log("completedJobs", completedJobs);
  if (completedJobs && completedJobs.length > 0) {
    await deleteJobs(completedJobs, maxSuccessAge);
  };
  callback(null, 'Finished');
};

/**
 * Returns all jobs with the given status
 * 
 * @param {*} status status of the job to be returned 
 * @returns jobs with the given status 
 */
const getJobs = async (status, maxJobAge) => {

  const params = {
    TableName: config.jobTable,
    IndexName: "JobStatus-index",
    "KeyConditionExpression": "JobStatus = :v_JobStatus",
    "ExpressionAttributeValues": {
      ":v_JobStatus": status,
      ":maxAge": new Date().getTime() - maxJobAge
    },
    "ScanIndexForward": false
  };
  if (maxJobAge){
    params.FilterExpression = "Updated < :maxAge";
  }
  console.log("Jobs", params);
  try {
    const jobs = await dynamo.query(params);
    console.log("Jobs", jobs);
    return jobs.Items;
  } catch (error) {
    console.error("Failed to get job ", status, error);
    return [];
  }
}

/**
 * Deletes all jobs older than the given maxAge
 * 
 * @param {*} jobs Jobs to be deleted from S3 and DynamoDB if there maxAge is exceeded
 * @param {*} maxJobAge The maximum age of a job in milliseconds
 */
const deleteJobs = async (jobs, maxJobAge) => {
  jobs.forEach(async (job) => {
    console.log("Delete Job", job);
    await deleteJob(job.JobId);
  });
}

/**
 * Deletes a job from S3 and DynamoDB
 * 
 * @param {*} jobId ID of the job to be deleted from S3 and DynamoDB
 */
const deleteJob = async (jobId) => {
  try {
    await deleteJobFiles(jobId);
    await deleteJobDB(jobId);
  } catch (error) {
    console.error("Failed to delete job ", jobId, error);
  }
}

/**
 * Deletes a job from DynamoDB
 * 
 * @param {*} jobId ID of the job to be deleted from S3 and DynamoDB
 */
const deleteJobDB = async (jobId) => {
  const params = {
    TableName: config.jobTable,
    Key: { JobId: jobId },
  };
  await dynamo.delete(params);

  console.log("Delete Job DB ", jobId, params);
}

/**
 * Deletes a job from S3
 * 
 * @param {*} jobId ID of the job to be deleted from S3 and DynamoDB
 */
const deleteJobFiles = async (jobId) => {
  const client = new S3Client({});
  const input = {
    "Bucket": config.bucketName,
    "Key": jobId,
  }
  const command = new DeleteObjectCommand(input)
  const response = await client.send(command);
  console.log("Delete Job Files ", jobId, input);
}
