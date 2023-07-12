// IMPORT MODULES
const requestModule = require("request");
const https = require("https");

// WEATHERSTACK API
const url = "http://api.weatherstack.com/current?access_key=&query=India";

// USING REQUEST MODULE
requestModule({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect with weather service!!!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(response.body.current);
  }
});

// USING NODE JS HTTPS MODULE
const HttpsRequest = https.request(url, (response) => {
  let data = "";

  // RUNS WHEN GET DATA
  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  // RUN WHEN HTTPS REQUEST DONE
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

// HTTPS MODULE ERROR HANDLING
HttpsRequest.on("error", (error) => {
  console.log("An error", error);
});

// TELLS THAT WE HAVE DONE WITH THE HTTPS MODULE, NOW YOU CAN RUN
HttpsRequest.end();
