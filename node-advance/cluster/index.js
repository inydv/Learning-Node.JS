// EXPRESS MODULE
const express = require("express");

// CREATE EXPRESS APP
const app = express();

// PORT NUMBER
const PORT = 5500;

// ROUTES
app.get("/", async (req, res) => {
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }

  return res.json({
    processId: process.pid,
    result,
  });
});

// LISTEN SERVER
app.listen(PORT, () => {
  console.log("listening on port : " + PORT + "and PID : " + process.pid);
});
