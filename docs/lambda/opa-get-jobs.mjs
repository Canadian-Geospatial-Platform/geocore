import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = new S3Client();
const stage = "Prod";

const dynamo = DynamoDBDocument.from(new DynamoDB());
const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Link',
  'Access-Control-Expose-Headers': 'Content-Type, Authorization, X-Requested-With, Link',
  'Access-Control-Allow-Credentials': true
};
const jobTable = process.env.JOBS_TABLE;
const bucketName = process.env.S3_BUCKET_NAME;
const resultUrl = process.env.RESULT_URL;

/**
 * Hander for the jobs endpoint ie /jobs/${job_id} and /jobs/${job_id}/results
 * 
 * @param {*} event     A JSON object containing the request information.
 * @returns             A JSON object containing the response information.
 */
export const handler = async (event) => {
  console.log('->Received event:', event);

  if (event.httpMethod.toLowerCase() === "options") {
    return {
      statusCode: 200,
      body: "",
      headers: defaultHeaders,
    }
  }

  const host = event.headers.Host
  const path = event.path;
  var lang = "en";
  if (event.queryStringParameters && event.queryStringParameters.lang && event.queryStringParameters.lang.toLowerCase().startsWith("fr")) {
      lang = "fr";
  } else {
      for (const [key, value] of Object.entries(event.headers)) {
          if(key.toLowerCase().startsWith("accept-language") && value.toLowerCase().startsWith("fr")){
              lang = "fr";
          }
      }
  }
  if (!path) {
    console.log('->no path');
    const statusCode = '400';
    const errMessage = 'No path';
    return {
      statusCode,
      errMessage,
      headers: defaultHeaders,
    };
  }

  const pathParts = path.split("/");
  if (pathParts.length === 3) {
    return getStatus(pathParts[2], host, lang);
  }
  if (pathParts.length === 4 && pathParts[3] === "results") {
    return getResult(pathParts[2], host, event);
  }
};

/**
 * Get the status of the job that is requested.
 * 
 * @param {*} jobId   The id of the job to get the status for.
 * @param {*} host    The host of the request.
 * @param {*} lang    The language of the request.
 * @returns           The response object containing the status of the job.
 */
const getStatus = async (jobId, host, lang) => {
  console.log('->getStatus', jobId);
  let statusCode = '200';
  try {
    const job = await getJob(jobId);
    const body = JSON.stringify(getResponse(job, host, lang));

    return {
      statusCode,
      body,
      headers: defaultHeaders,
    };

  } catch (err) {
    statusCode = '400';
    console.error('error get job status -> ', jobId, err);
    return {
      statusCode,
      body: err.message,
      headers: defaultHeaders,
    }
  }

};

/**
 * Get the results of the job that is requested.
 * 
 * @param {*} jobId   The id of the job to get the results for.
 * @param {*} host    The host of the request.
 * @returns           The response object containing the results of the job.
 */
const getResult = async (jobId, host) => {
  let statusCode = '200';
  console.log('->getResult');

  try {
    const job = await getJob(jobId);

    if (job.JobStatus === "failed") {
      statusCode = '400';
      const errMessage = 'Job failed';
      return {
        statusCode,
        body: errMessage,
        headers: defaultHeaders,
      };
    }

    if (job.Progress !== 100 || job.JobStatus !== "successful") {
      statusCode = '400';
      const errMessage = 'Job not completed';
      return {
        statusCode,
        body: errMessage,
        headers: defaultHeaders,
      };
    }

    if (!job.FileName) {
      statusCode = '400';
      const errMessage = 'File missing';
      return {
        statusCode,
        body: errMessage,
        headers: defaultHeaders,
      };
    }

    const signedResultUrl = await getSignedUrlFunc(jobId, job.ContentType, job.FileName);

    return {
      headers: {
        'Link': `<${signedResultUrl}>; rel="result"; media="${job.ContentType}"`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Link',
        'Access-Control-Expose-Headers': 'Content-Type, Authorization, X-Requested-With, Link',
        'Access-Control-Allow-Credentials': true
      },
      statusCode: 204,
      body: JSON.stringify({
        jobId: jobId,
        links: [createLink("results", signedResultUrl, "", "result", "")]
      }),

    }


  } catch (err) {
    statusCode = '400';
    console.error('error get job status -> ', jobId, err);
    return {
      statusCode,
      body: err.message,
      headers: defaultHeaders,
    }
  }
};

/**
 * Get the response object for the job.
 * 
 * @param {*} job   The job information returned from the database.
 * @param {*} host  The host of the request.
 * @param {*} lang  The language of the request.
 * @returns         The response object containing the job information.
 */
const getResponse = (job, host, lang) => {

  let en_rel;
  let fr_rel;
  if (lang === "fr") {
    en_rel = "alternate";
    fr_rel = "self";
  } else {
    en_rel = "self";
    fr_rel = "alternate";
  }

  const response = {
    jobID: job.JobId,
    type: "process",
    status: job.JobStatus,
    processId: job.ProcessId,
    message: job.Message,
    progress: job.Progress,
    links: [
      createLink(en_rel, `https://${host}/${stage}/jobs/${job.JobId}?lang=en`, "application/json", "This document", "en"),
      createLink(fr_rel, `https://${host}/${stage}/jobs/${job.JobId}?lang=fr`, "application/json", "Ce document", "fr")

    ],
  };

  if (job?.Created) {
    response.created = new Date(job.Created).toISOString();
  }
  if (job?.Started) {
    response.started = new Date(job.Started).toISOString();
  }
  if (job?.Updated) {
    response.updated = new Date(job.Updated).toISOString();
  }
  if (job?.Finished) {
    response.finished = new Date(job.Finished).toISOString();
  }

  if (job.JobStatus === "successful") {
    response.links.push(createLink("http://www.opengis.net/def/rel/ogc/1.0/results", `https://${host}/${stage}/jobs/${job.JobId}/results?lang=en`, "application/json", "Job result", "en"));
    response.links.push(createLink("http://www.opengis.net/def/rel/ogc/1.0/results", `https://${host}/${stage}/jobs/${job.JobId}/results?lang=fr`, "application/json", "Résultat du travail", "fr"));
  } else if (job.JobStatus === "failed") {
    response.links.push(createLink("http://www.opengis.net/def/rel/ogc/1.0/exceptions", `https://${host}/${stage}/jobs/${job.JobId}/results?lang=en`, "application/json", "Job exception", "en"));
    response.links.push(createLink("http://www.opengis.net/def/rel/ogc/1.0/exceptions", `https://${host}/${stage}/jobs/${job.JobId}/results?lang=fr`, "application/json", "Exception d'emploi", "fr"));
  }
  return response;
}

/**
 * Create a link object for the process to return.
 *
 * @param {*} rel       The relation of the link.
 * @param {*} href      The url of the link.
 * @param {*} type      The type of the link.
 * @param {*} title     The title of the link.
 * @param {*} hreflang  The language of the link.
 * @returns             The link JSON object for the process to return.
 */
const createLink = (rel, href, type, title, hreflang) => {
  return {
    "rel": rel,
    "href": href,
    "type": type,
    "title": title,
    "hreflang": hreflang
  }
}

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
  console.log('db get');
  return job.Item;

}

/**
 * Get the signed url for the job to return the file from the S3 bucket.
 * 
 * @param {*} jobId     The id of the job to get the signed url for.
 * @returns             The signed url for the job to return the file from the S3 bucket.
 */
const getSignedUrlFunc = async (jobId, fileFormat, fileName) => {
  const client = new S3Client({});
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: jobId,
    ResponseContentDisposition: `attachment; filename="${fileName}"`,
    ResponseContentType: fileFormat
  });

  const signedResultUrl = await getSignedUrl(client, command,
    {
      expiresIn: 3600
    });
  console.log('Signed Result Url ->' + signedResultUrl);
  return signedResultUrl;
}