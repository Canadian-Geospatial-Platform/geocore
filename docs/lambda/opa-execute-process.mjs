import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { randomUUID } from "crypto";
import * as AWS from "@aws-sdk/client-ecs";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const ecs = new AWS.ECSClient();

const dynamo = DynamoDBDocument.from(new DynamoDB());
const defaultHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Location',
    'Access-Control-Expose-Headers': 'Content-Type, Authorization, X-Requested-With, Location',
    'Access-Control-Allow-Credentials': true
};


//Environment Variables
const processTable = process.env.PROCESSES_TABLE;
const jobTable = process.env.JOBS_TABLE;
const clusterName = process.env.CLUSTER_NAME;
const subnets = process.env.SUBNETS.split(',');
const securityGroups = [process.env.SECURITY_GROUP];
const wsStatusUrl = process.env.WS_STATUS_URL;
const bucketName = process.env.S3_BUCKET_NAME;
const stage = process.env.STAGE;

/**
 * Hander for the processes endpoint ie /processes, /processes/${process_is} and /processes/${process_is}/execution
 * 
 * @param {*} event     A JSON object containing the request information.
 * @returns             A JSON object containing the response information.
 */
export const handler = async (event) => {
    console.log('->Received event:', event);
    const host = event.headers.Host;
    const path = event.path ? event.path : null;
    console.log('Host->', host);
    console.log('path->', path);

    if( event.httpMethod.toLowerCase() === "options"){
        return {
            statusCode:200,
            body:"",
            headers: defaultHeaders,
        }
    }
    
    var lang = "en";
    if (event.queryStringParameters && event.queryStringParameters.lang) {
        lang = event.queryStringParameters.lang;
    } else if (event.headers["Accept-Language"]) {
        lang = event.headers["Accept-Language"];
    } else if (event.headers["accept-language"]) {
        lang = event.headers["accept-language"];
    }
    const pathParts = path.split("/");
    if (pathParts.length === 2) {
        return returnProcessList(host, lang);

    }
    if (pathParts.length === 3) {
        return describeProcess(pathParts[2], host, lang);
    }
    if (pathParts.length === 4 && pathParts[3] === "execution") {
        console.log('->start');
        return executeProcess(pathParts[2], host, event, lang);
    }
};

/**
 * Hander for the processes endpoint /processes 
 * 
 * @param {*} host      The host URL of the API Gateway.
 * @returns             The JSON object containing the response information for the process list.
 */
const returnProcessList = async (host, lang) => {
    let statusCode = '200';

    let en_rel;
    let fr_rel;
    if (lang === "fr") {
        en_rel = "alternate";
        fr_rel = "self";
    } else {
        en_rel = "self";
        fr_rel = "alternate";
    }

    let body = {
        processes: [],
        "links": [
            createLink(en_rel, `https://${host}/${stage}/processes/?`, "application/json", "Processes", "en"),
            createLink(fr_rel, `https://${host}/${stage}/processes/?`, "application/json", "FR_Processes", "fr")
        ]
    };

    const params = {
        TableName: processTable,
        AttributesToGet: ['ServiceDefinition', 'i18nStrings']
    };
    
    try {
        const process = await dynamo.scan(params);
        
        body.processes = [JSON.parse(process.Items.map(item => aliasProcess(item, host, lang)))];
        

    } catch (err) {
        console.log(err);
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }
    return {
        statusCode,
        body,
        headers: defaultHeaders,
    };
}

/**
 * Hander for the processes endpoint /processes/${process_is}
 * 
 * @param {*} processId     The ID to the process that is to be returned.
 * @param {*} host          The JSON object containing the response information for the process list.
 * @returns                 The JSON object containing the response information for the process selected.
 */
const describeProcess = async (processId, host, lang) => {
    let body = "";
    let statusCode = '200';

    const params = {
        TableName: processTable,
        Key: { Id: processId }
    };

    try {
        const process = await dynamo.get(params);
        var item = process.Item.ServiceDefinition.replace(/{HOST}/g, host);
        item = localize(item, process.Item.i18nStrings, lang);
        body = JSON.parse(item);
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers: defaultHeaders,
    }
}

/**
 * Hander for the processes endpoint /processes/${process_is}/execution
 * 
 * @param {*} processId     The ID to the process that is to be returned.
 * @param {*} host          The JSON object containing the response information for the process list.
 * @param {*} event         A JSON object containing the request information.
 * @returns                 The JSON object containing the response information for the process selected.
 */
const executeProcess = async (processId, host, event, lang) => {
    const jobId = randomUUID();
    console.log('->run process ' + jobId);
    let statusCode = '201';

    let taskDefName;
    let task = {
        JobId: jobId,
        ProcessId: processId,
        Created: new Date().getTime(),
        Started: "",
        Finished: "",
        Updated: new Date().getTime(),
        JobParameters: event.body,
        Message: "Starting Soon",
        Progress: 0,
        JobStatus: "accepted",
        FileName: "",
        ContentType: "",
    }
    console.log('->run process2 ' + jobId);
    let taskContainerName;
    var i18nStrings = null;

    try {
        const params = {
            TableName: processTable,
            Key: { Id: processId }
        };
        const process = await dynamo.get(params);
        taskDefName = process.Item.TaskDefName;
        task.JobConfig = process.Item.Config;
        taskContainerName = process.Item.TaskContainerName;
        i18nStrings = JSON.parse(process.Item.i18nStrings);
        task.Message = i18nStrings.START_MESSAGE[lang];
    } catch (err) {
        statusCode = '400';
        const errMessage = err.message;
        console.error('error getting Process -> ' + jobId, err);
        return {
            statusCode,
            errMessage,
            headers: defaultHeaders,
        }
    }

    let startedTask = false;
    try {
        console.log('run ecsTask ->' + jobId)
        const data = await startEcsTask(task, taskContainerName, taskDefName);
        console.log("RunTask succeeded:", JSON.stringify(data, null, 2));
        if(startedTask = data && data.failures.length === 0) {
            startedTask = true;
        } else {
            statusCode = '400';
            task.JobStatus = "ERROR";
            task.Message = "Error starting task";
            if(i18nStrings != null)
                task.Message = i18nStrings.TASK_ERROR[lang];
            console.error('error running ecs task -> ', jobId, data.failures);
    
        }
        
    } catch (err) {
        statusCode = '400';
        task.Message = JSON.stringify(err.message);
        task.JobStatus = "ERROR";
        console.error('error running ecs task -> ', jobId, err);
    }

    console.log('add task ->' + jobId);

    try {
        const params2 = {
            TableName: jobTable,
            Item: task
        };
        console.log('task -> ', params2);
        await dynamo.put(params2);
    } catch (err) {
        statusCode = '400';
        const errMessage = JSON.stringify(err);
        console.error('error adding task -> ', jobId, err.message);
        startedTask
    }
    console.log('task added->' + jobId);

    const body = JSON.stringify({
        jobID: jobId,
        processId: processId,
        type: "process",
        status: task.JobStatus,
        message: task.Message,
        created: new Date(task.Created).toISOString(),
        updated: new Date(task.Updated).toISOString(),
        progress: task.Progress,
        "links": [
            createLink("status", `https://${host}/${stage}/jobs/${jobId}?lang=en`, "application/json", "Job Status", "en"),
            createLink("status", `https://${host}/${stage}/jobs/${jobId}?lang=fr`, "application/json", "Statut du travail", "fr")
        ],


    });

    const respHeaders = {
        'Content-Type': 'application/json',
        'Location': `https://${host}/${stage}/jobs/${jobId}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Location',
        'Access-Control-Expose-Headers': 'Content-Type, Authorization, X-Requested-With, Location',
        'Access-Control-Allow-Credentials': true
    };
    statusCode = '201';
    return {
        statusCode,
        body,
        headers: respHeaders,
    }
}

/**
 * Generate the json to use to start up the ECS task.
 * 
 * @param {*} job               An object from the database containing the job information.
 * @param {*} taskDefName       The ECS task definition name.
 * @param {*} host              The JSON object containing the response information for the process list.
 * @param {*} signedResultUrl   The signed result url for the process to upload the file to the S3 bucket.
 * @returns                     the ECS task JSON object to run.
 */
const ecsTaskDefinition = (job, taskContainerName, taskDefName, signedResultUrl) => {

    console.log("taskDefName -> " + taskDefName);
    const ecsTask = {
        cluster: clusterName,
        taskDefinition: taskDefName,
        count: 1,
        launchType: "FARGATE",
        networkConfiguration: {
            awsvpcConfiguration: {
                subnets: subnets,
                assignPublicIp: "DISABLED",
                securityGroups: securityGroups
            }
        },
        "overrides": {
            "containerOverrides": [
                {
                    name: taskContainerName,
                    environment: [
                        {
                            name: "JOB_ID",
                            value: job.JobId
                        },
                        {
                            name: "JOB_CONFIG",
                            value: job.JobConfig
                        },
                        {
                            name: "JOB_PARAMETERS",
                            value: job.JobParameters
                        },
                        {
                            name: "STATUS_SOCKET",
                            value: wsStatusUrl
                        },
                        {
                            name: "RESULT_URL",
                            value: signedResultUrl
                        }
                    ]
                }
            ]
        }
    }
    return ecsTask;
}

/**
 * Get the signed url for the process to upload the file to the S3 bucket.
 * 
 * @param {*} jobId     The id of the job to get the signed url for.
 * @returns             The signed url for the process to upload the file to the S3 bucket.
 */
const getSignedUrlFunc = async (jobId) => {
    const client = new S3Client({});
    const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: jobId,
    });

    const signedResultUrl = await getSignedUrl(client, command, { expiresIn: 3600 });
    console.log('Signed Result Url ->' + signedResultUrl);
    return signedResultUrl;
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
 * Start the ECS task to run the process.
 *
 * @param {*} task          The task object to run.
 * @param {*} taskDefName   The ECS task definition name.
 * @returns                 The ECS task run response.
 */
const startEcsTask = async (task, taskContainerName, taskDefName) => {
    const signedResultUrl = await getSignedUrlFunc(task.JobId);
    console.log('Signed Result Url ->' + signedResultUrl);
    const ecsTask = ecsTaskDefinition(task, taskContainerName, taskDefName, signedResultUrl);
    console.log(ecsTask);
    return await ecs.send(new AWS.RunTaskCommand(ecsTask));
}

/**
 * Alias the process to replace the host and add the links.
 *
 * @param {*} process   The process to alias.
 * @param {*} host      The host to replace the host with.
 * @returns             The aliased process.
 */
const aliasProcess = (process, host, lang) => {
    var json = process.ServiceDefinition.replace(/{HOST}/g, host);
    json = localize(json, process.i18nStrings, lang);
    return json;
}

const localize = (json, i18n, lang) => {
    var i18nJSON = JSON.parse(i18n);
    Object.entries(i18nJSON).map(([key, value]) => {
     	json = json.replace("{" + key + "}", value[lang]);
    });
    
    return json;
}