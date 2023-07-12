// IMPORT MODULE
const http = require("http");

// SERVER ROUTES
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      break;
    case "/about":
      break;
    case "/login":
      break;
  }
});

// LISTEN SERVER
server.listen(3000, "localhost", () => {
  console.log("Server is Listening On Port 3000");
});
