const AWS = require('aws-sdk');
const request = require('request');
const { AWS4Auth } = require('aws4auth');

const region = ''; // e.g. us-west-1
const service = 'es';
const credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
const awsauth = new AWS4Auth({
  accessKeyId: credentials.accessKeyId,
  secretAccessKey: credentials.secretAccessKey,
  sessionToken: credentials.sessionToken,
  region: region,
  service: service
});

const host = ''; // the OpenSearch Service domain, e.g. https://search-mydomain.us-west-1.es.amazonaws.com
const index = 'lambda-s3-index';
const datatype = '_doc';
const url = `${host}/${index}/${datatype}`;

const headers = { 'Content-Type': 'application/json' };

const s3 = new AWS.S3();

// Regular expressions used to parse some simple log lines
const ipPattern = /(\d+\.\d+\.\d+\.\d+)/;
const timePattern = /\[(\d+\/\w\w\w\/\d\d\d\d:\d\d:\d\d:\d\d\s-\d\d\d\d)\]/;
const messagePattern = /\"(.+)\"/;

// Lambda execution starts here
exports.handler = async (event, context) => {
  for (const record of event.Records) {
    // Get the bucket name and key for the new file
    const bucket = record.s3.bucket.name;
    const key = record.s3.object.key;

    // Get, read, and split the file into lines
    const obj = await s3.getObject({ Bucket: bucket, Key: key }).promise();
    const body = obj.Body.toString();
    const lines = body.split('\n');

    // Match the regular expressions to each line and index the JSON
    for (const line of lines) {
      const ipMatch = line.match(ipPattern);
      const timestampMatch = line.match(timePattern);
      const messageMatch = line.match(messagePattern);

      if (ipMatch && timestampMatch && messageMatch) {
        const ip = ipMatch[1];
        const timestamp = timestampMatch[1];
        const message = messageMatch[1];

        const document = { ip: ip, timestamp: timestamp, message: message };
        const requestOptions = {
          url: url,
          auth: awsauth,
          json: document,
          headers: headers
        };

        request.post(requestOptions, (error, response, body) => {
          if (error) {
            console.error('Error:', error);
          } else {
            console.log('Response:', body);
          }
        });
      }
    }
  }
};