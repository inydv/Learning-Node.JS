const fs = require("fs");
const http = require("http");

const server = http.createServer();

// STANDARD APPROACH IN WHICH PROGRAM READ THE WHOLE CONTENT OF THE FILE THEN START EXECUTION
server.on("request", (req, res) => {
  fs.readFile("filename.txt", (err, data) => {
    if (err) {
      res.end("sth went wrong");
      return;
    }

    res.end(data);
  });
});

// STREAM APPROACH IN WHICH PROGRAM READ THE CONTENT OF THE FILE IN CHUNKS THEN START EXECUTION
server.on("request", (req, res) => {
  // READING IN CHUNKS
  const rs = fs.createReadStream("filename.txt");

  rs.on("data", (chunk) => {
    // WRITING IN CHUNKS
    res.write(chunk);
  });

  rs.on("end", () => {
    // WHEN WE DON'T HAVE ANY DATA REMAINING TO READ
    res.end();
  });

  rs.on("error", (error) => {
    // HANDLE ERROR
    res.end("sth went wrong");
  });
});

// IF READING SPEED IS 4MBPS AND WRITING SPEED IS 1MBPS, THIS WILL OVERWELM THE WRITE STREAM WHICH CAN'T HANDLE ALL THESE INCOMING DATA SO FAST. THIS PROBLEM IS KNOWN AS BACK PRESSURE.
// TO SOLVE THIS WE HAVE TO USE PIPE MENTHOD
server.on("request", (req, res) => {
  const rs = fs.createReadStream("filename.txt");
  rs.pipe(res); // readableSource.pipe(writableDestination)
});

server.listen(3000, "localhost", () => {
  console.log("Server is Listening On Port 3000");
});
