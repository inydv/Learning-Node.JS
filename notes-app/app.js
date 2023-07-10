// IMPORT MODULES
const yargs = require("yargs");
const figlet = require("figlet");
const chalk = require("chalk");
const { addNotes, listNotes, readNote, removeNotes } = require("./notes");

// RUNNING THE APP - CALL AT THE END BECAUSE FIGLET EXECUTES ASYNC INTERNALLY
figlet("NOTES APP", function (err, data) {
  if (err) {
    chalk.red.inverse("Something went wrong!!!");
    console.dir(err);
    return;
  }
  console.log(data);
});

// ADD NOTE
// COMMAND - node app.js add --title="Buy" --body="These are what I need to buy."
yargs.command({
  command: "add", // CREATE COMMAND NAME "add"
  describe: "Add a new note", // DESCRIPTION OF THE COMMAND
  builder: {
    // SPECIFY ABOUT THE GETTING ARGUMENT
    title: {
      // ARGUMENT NAME
      describe: "Note Title", // DESCRIPTION OF THE ARGUMENT
      demandOption: true, // IS ARGUMENT REQUIRED
      type: "string", // TYPE OF ARGUMENT
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // FUNCTION THAT RUN WHEN COMMAND WILL BE EXECUTED
    addNotes(argv.title, argv.body);
  },
});

// REMOVE NOTE
// COMMAND - node app.js remove --title="Buy"
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNotes(argv.title);
  },
});

// LIST ALL NOTES
// COMMAND - node app.js list
yargs.command({
  command: "list",
  describe: "List all notes",
  handler(argv) {
    listNotes();
  },
});

// READ NOTE USING TITLE
// COMMAND - node app.js read --title="Buy"
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    readNote(argv.title);
  },
});

// PARSE THE YARGS
yargs.parse();
