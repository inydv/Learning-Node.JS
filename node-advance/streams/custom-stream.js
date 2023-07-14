const { Readable, Writable } = require("stream");

// CREATE CUSTOM READABLE STREAM
const readableStream = new Readable({
  // ALLOW PUSHING OBJECT
  objectMode: true,
  // THRESHOLD (IN BYTES) (OPTIONAL) - RETURN TRUE/FALSE, IF PUSHED DATA BUFFER SIZE IS OVER THRESHOLD OR NOT
  highWaterMark: 2,
  read() {},
});

readableStream.on("data", (chunk) => {
  console.log(chunk);
});

readableStream.push("Hello, world!");

// CREATE CUSTOM WRITEABLE STREAM
const writeableStream = new Writable({
  write(param) {
    console.log(param);
  },
});

writeableStream.write("Hello");
