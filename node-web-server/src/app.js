// CREATES AN HTTP SERVER THAT LISTENS TO SERVER PORTS AND ALLOW NODE.JS TO TRANSFER DATA OVER THE HTTP
const http = require("http");

// FILE SYSTEM MODULE
const fs = require("fs");

// PROVIDES A WAY OF WORKING WITH DIRECTORIES AND FILE PATHS
const path = require("path");

// PROVIDES UTILITIES FOR URL RESOLUTION AND PARSING
const url = require("url");

// MANIPLUATING THE PATH
const templateDirectoryPath = path.join(__dirname, "../template/index.html");

// READ HTML FILE
const html = fs.readFileSync(templateDirectoryPath, "utf-8");

// CREATE SERVER
const server = http.createServer((request, response) => {
  // const pathname = request.url;

  // DESTRUCTING URL
  const { query, pathname } = url.parse(request.url, true);

  // SERVER ROUTES
  switch (pathname) {
    // SERVE PLAIN TEXT
    case "/":
      // SETTING HEADERS
      response.writeHead(200, {
        "Content-Type": "text/plain",
        "My-Custom-Header": "Hello, world",
      });
      // SENDING RESPONSE
      response.end("Hello!!!");
      break;

    // SERVE HTML
    case "/html":
      // response.end("<h1>{{%colors}}</h1>".replace("{{%colors}}", "blue"));
      response.end(html);
      break;

    // SERVE ARRAY OF AN OBJECT
    case "/array-of-an-object":
      response.end([
        {
          name: "Andrew",
        },
        {
          name: "Sarah",
        },
      ]);
      break;

    // SERVE JSON
    case "/json":
      response.end({
        forecast: "It is raining",
        location: "Delhi",
      });
      break;

    // NOT DEFINED REQUESTS - 404 REQUEST
    default:
      response.writeHead(400, {
        "Content-Type": "text/plain",
      });
      response.end("404 request");
      break;
  }
});

// LISTEN SERVER
server.listen(3000, "localhost", () => {
  console.log("Server is Listening On Port 3000");
});
