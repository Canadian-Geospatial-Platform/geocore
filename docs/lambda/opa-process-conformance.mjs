

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Expose-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Allow-Credentials': true
};

/**
 * Hander for the conformance endpoint ie /conformance
 * 
 * @param {*} event     A JSON object containing the request information.
 * @returns             A JSON object containing the response information.
 */
export const handler = async (event) => {

  if( event.httpMethod.toLowerCase() === "options"){
    return {
        statusCode:200,
        body:"",
        headers: defaultHeaders,
    }
  }

  const host = event.headers.Host;
  let body = {
    "conformsTo": [
      "http://www.opengis.net/spec/ogcapi-common-1/1.0/conf/core",
      "http://www.opengis.net/spec/ogcapi-common-2/1.0/conf/json",
      "http://www.opengis.net/spec/ogcapi-common-1/1.0/conf/json",
      "http://www.opengis.net/spec/ogcapi-common-1/1.0/conf/oas30",
      "http://www.opengis.net/spec/ogcapi-processes-1/1.0/conf/core",
      "http://www.opengis.net/spec/ogcapi-processes-1/1.0/conf/json",
      "http://www.opengis.net/spec/ogcapi-processes-1/1.0/conf/ogc-process-description"
    ]
  };
  const response = {
    statusCode: 200,
    body: JSON.stringify(body),
    headers: defaultHeaders
  };
  return response;
};