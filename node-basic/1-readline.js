// PROVIDES AN INTERFACE PROVIDES AN INTERFACE FOR READING DATA FROM READABLE STREAM, ONE LINE AT A TIME
const readline = require("readline");

// CREATE READLINE INTERFACE
const rl = readline.createInterface({
  // INPUT PROCESS
  input: process.stdin,

  // OUTPUT PROCESS
  // STDOUT IS USED FOR PRINTING TO THE SCREEN IN NODEJS AND PROCESS
  output: process.stdout,

  // OUTPUT ERROR
  // STDERR IS USED FOR PRINTING ERROR MESSAGES TO THE SCREEN
  // output: process.stderr,
});

// CREATE QUESTION THAT SHOWS ON THE TERMINAL AND WAIT FOR ENTERING INPUT
rl.question("Please Enter Your Name : ", (name) => {
  console.log("You Entered : " + name);

  // CLOSE READLINE INTERFACE
  rl.close();
});

// RUN AFTER CLOSE READLINE INTERFACE
rl.on("close", () => {
  console.log("Interface Closed");

  // ENDS THE PROCESS
  // 0 MEANS END THE PROCESS WITHOUT ANY KIND OF FAILURE
  // 1 MEANS END THE PROCESS WITH SOME FAILURE
  process.exit(0);
});

// RUN AFTER THE PROCESS EXITING
process.on("exit", () => {
  console.log("Exiting...");
});
