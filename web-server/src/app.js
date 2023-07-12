// IMPORT MODULES
const express = require("express");
const path = require("path");

// CREATE AN EXPRESS SERVER
const app = express();

// MANIPLUATING THE PATH
const publicDirectoryPath = path.join(__dirname, "../public");

// APP ALSO USE STATC FILE
// (IF APP USE STATC FILE THEN THIS GET API WITH EMPTY ROUTE WILL NOT WORK AND **ALSO CHECK LINE WISE**)
// SERVE INDEX.HTML
app.use(express.static(publicDirectoryPath));

// GET REUEST
app.get("", (req, res) => {
  // SERVE PLAIN TEXT
  res.send("Hello Express!!!");

  // SERVE HTML
  // res.send("<h1>Weather</h1>");

  // SERVE ARRAY OF AN OBJECT
  // res.send([
  //   {
  //     name: "Andrew",
  //   },
  //   {
  //     name: "Sarah",
  //   },
  // ]);

  // SERVE JSON
  // res.send({
  //   forecast: "It is raining",
  //   location: "Delhi",
  // });
});

// NOT DEFINED REQUESTS - 404 REQUEST
app.get("/help/*", (req, res) => {
  res.send("404 request");
});

app.get("*", (req, res) => {
  res.send("404 request");
});

// START A EXPRESS SERVER ON THE PORT 3000
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
