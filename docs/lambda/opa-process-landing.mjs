
const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Expose-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Allow-Credentials': true
};

/**
 * Hander for the root landingPage endpoint for the process service
 * 
 * @param {*} event     A JSON object containing the request information.
 * @returns             A JSON object containing the response information.
 */
export const handler = async (event) => {
  const host = event.headers.Host;

  if( event.httpMethod.toLowerCase() === "options"){
    return {
        statusCode:200,
        body:"",
        headers: defaultHeaders,
    }
  }
  let title;
  let description;
  let en_rel;
  let fr_rel;

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
  if (lang === "fr") {
    title = "Services de traitement des données Canada";
    description = "Services de traitement des données Canada";
    en_rel = "alternate";
    fr_rel = "self";
  } else {
    title = "Canadian Processing Services";
    description = "Canadian Processing Services";
    en_rel = "self";
    fr_rel = "alternate";
  }

  let body = {
    "title": title,
    "description": description,
    "extent": {
      "spatial": {
        "crs": "http://www.opengis.net/def/crs/OGC/1.3/CRS84",
        "bbox": [
          [
            -180,
            -90,
            180,
            90
          ]
        ]
      }
    },
    "keywords": [
      "Global Warming",
      "Ocean",
      "Sea Level Rise",
      "Tide"
    ],
    "links": []
  };
  body.links = [
    addLink(en_rel, host, "", "application/json", "OGC API", "en"),
    addLink("conformance", host, "conformance", "application/json", "Conformance", "en"),
    addLink("processes", host, "processes", "application/json", "Processes", "en"),
    addLink(fr_rel, host, "", "application/json", "OGC API", "fr"),
    addLink("conformance", host, "conformance", "application/json", "Conformité", "fr"),
    addLink("processes", host, "processes", "application/json", "Processus", "fr")
  ];
  const response = {
    statusCode: 200,
    body: JSON.stringify(body),
    headers: defaultHeaders
  };
  return response;
};

/**
 * Helper function to add a link to the response body.
 *
 * @param {*} rel       The relation of the link.
 * @param {*} host      The host of the link.
 * @param {*} location  The location of the link.
 * @param {*} type      The type of the link.
 * @param {*} title     The title of the link.
 * @param {*} hreflang  The language of the link.
 * @returns             A JSON object containing the link information.
 */
const addLink = (rel, host, location, type, title, hreflang) => {
  return {
    "rel": rel,
    "href": `https://${host}/Prod/${location}?lang=${hreflang}`,
    "type": type,
    "title": title,
    "hreflang": hreflang
  }
}