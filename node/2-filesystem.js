// FILE SYSTEM MODULE
const fs = require("fs");

// READ FILE SYNCHRONOUSLY
// PROGRAM READ THIS FILE AND THEN EXECUTE AHEAD PROGRAM
fs.readFileSync("filename.txt", "utf-8");

// READ FILE ASYNCHRONOUSLY
fs.readFile("filename.txt", "utf-8", (error, data) => {
  console.log(data);
});

// CREATE NEW FILE OR OVERWRITE THE CONTENT IN THE FILE
fs.writeFileSync("filename.txt", "DATA");

// CREATE NEW FILE OR APPEND THE CONTENT IN THE FILE
fs.appendFileSync("filename.txt", "DATA");
