global.contenttype;
global.key_type;
global.type;

const aws = require("aws-sdk");
const s3 = new aws.S3();
const axios = require('axios');

exports.handler = (event, context, callback) => {
      console.log(event);
  
      let id = event.id;
      let url = event.url;
      global.type = event.type;
      
      let bucketoutput;
      let keyName;
      let content;
      let paramsoutput;
      

      if (global.type == "pdf") {
        global.contenttype = "application/pdf";
        global.key_type = ".pdf";
      }

      if (global.type == "docx") {
        global.contenttype = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        global.key_type = ".docx";
      }

      if (global.type == "jpg") {
        global.contenttype = "image/jpeg";
        global.key_type = ".jpg";
      }

      async function putResource() {
            
                  try {  
                  paramsoutput = {
                      Bucket: bucketoutput,
                      Key: keyName,
                      ContentType: global.contenttype,
                      Body: content
                  };
                  
                  console.log(paramsoutput);
                      
                          
                  //const put = await s3.putObject(paramsoutput).promise();
                  const put = await s3.upload(paramsoutput).promise();
                  
                  } catch (error) {
                      error = "Error when parsin UUID: " + id + " with message: " + error;
                      console.log(error);
                      return;
                  }  
        
          }
          
      async function getResource() {
                  //console.log("getPDF");
            
                  return new Promise(async resolve => {
                    
                  const resp = await axios.get(encodeURI(url), {
                    responseType: 'arraybuffer',
                    }).then((response) => {
                    
                      let date = Date.now();
                    
                      let keys = id + "_" + date + global.key_type;
                    
                    // output configuration
                    bucketoutput = "s3-documentparser-documents-dev";
                    //bucketoutput = "documents-parser-dev";
                    keyName = keys; 
                    //keyName = "test.pdf";
                    content = response.data; //, null, 4);
                    //console.log(content)
                    
                      putResource();
                      
                      
                    }).catch(function (error) {
                      if (error.response) {
                        // Request made and server responded
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                      } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                      } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                      }
                  
                    });
                    
                  resolve();
          });
        
          }
          
          getResource();
        
      
          };