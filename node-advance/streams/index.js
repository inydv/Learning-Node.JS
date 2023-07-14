// HTTP MODULE
const http = require("http");

// FILE SYSTEM MODULE
const fs = require("fs");
const { Transform, pipeline } = require("stream");

// CREATE HTTP SERVER
const server = http.createServer((req, res) => {
  // req - READABLE STREAM
  // res - WRITEABLE STREAM

  // DOWNLOADING BIG FILE (BAD WAY)
  const file = fs.readFileSync("WEBHOOKS.MP4");
  res.writeHead(200, { "Content-Type": "video/mp4" });
  return res.end(file);

  // DOWNLOADING BIG FILE (GOOD WAY)
  const readableStream = fs.createReadStream("sample.txt");
  // READABLE STREAM -> WRITEABLE STREAM (USE PIPE)
  readableStream.pipe(res);

  // COPY BIG FILE (BAD WAY)
  const file2 = fs.readFileSync("sample.txt");
  fs.writeFileSync("output.txt", file2);
  res.end();

  // COPY BIG FILE (GOOD WAY)
  const readStream = fs.createReadStream("sample.txt");
  const writeStream = fs.createWriteStream("output.txt");
  readStream.on("data", (chunk) => {
    // CHUNK IN THE FORM OF HEXADECIMAL
    writeStream.write(chunk);
  });
  res.end();

  // STRING PROCESSING (BAD WAY)
  const sampleFileStream = fs.createReadStream("sample.txt");
  const outputWriteableStream = fs.createWriteStream("output.txt");
  sampleFileStream.on("data", (chunk) => {
    const finalString = chunk.toString().toUpperCase();
    outputWriteableStream.write(finalString);
  });
  res.end();

  // STRING PROCESSING (GOOD WAY)
  const sampleFileStream2 = fs.createReadStream("sample.txt");
  const outputWriteableStream2 = fs.createWriteStream("output.txt");
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const finalString = chunk.toString().toUpperCase();
      callback(null, finalString); // ERROR, RESPONSE
    },
  });
  // sampleFileStream2.pipe(transformStream).pipe(outputWriteableStream2);
  pipeline(
    sampleFileStream2,
    transformStream,
    outputWriteableStream2,
    (err) => {
      console.log(err);
    }
  );
  res.end();
});

// PORT
const PORT = 5700;

// LISTEN HTTP SERVER
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
