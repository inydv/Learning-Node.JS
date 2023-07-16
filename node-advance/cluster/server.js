// EXPRESS MODULE
const express = require("express");

// OS MODULE - WORK WITH THE OPERATING SYSTEM
const os = require("os");

// CLUSTER MODULE
const cluster = require("cluster");

// GET NUMBER OF CPU CORES
const cpuNums = os.cpus().length; // 12 cores

// PRIMARY PROCESS
if (cluster.isPrimary) {
  // CREATE 12 PROCESS SIMILAR TO 12 CORES
  for (let i = 0; i < cpuNums; i++) {
    // CREATE PROCESS
    cluster.fork();
  }

  // IF ANY PROCESS CRASHED OR ANY ERROR OCCURED
  cluster.on("exit", () => {
    // CREATE PROCESS
    cluster.fork();
  });
} else if (cluster.isWorker) {
  // WORKER PROCESS THAT MAKE BY CLUSTER FORKING

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
}
