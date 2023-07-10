// IMPORT MODULES
const fs = require("fs");
const chalk = require("chalk");

// HELPER FUNCTIONS START

// SAVE NOTE
const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);

  // CREATE NEW FILE OR OVERWRITE THE CONTENT IN THE FILE
  fs.writeFileSync("notes.json", dataJSON);

  // CREATE NEW FILE OR APPEND THE CONTENT IN THE FILE
  // fs.appendFileSync("notes.txt", "This was appended message");
};

// LOAD ALL NOTES
const loadNotes = () => {
  try {
    // GIVES ERROR IF FILE NOT FOUND
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = JSON.parse(dataBuffer.toString());
    return dataJSON;
  } catch (error) {
    // RETURN EMPTY ARRAY IF FILE NOT FOUND
    return [];
  }
};

// HELPER FUNCTIONS END

// LIST ALL NOTES
const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.green.inverse("ALL Notes!!!"));

  notes.forEach((note) => console.log(note.title));
};

// REMOVE NOTE
const removeNotes = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    // IF NOTE FOUND WITH THE TITLE
    saveNote(notesToKeep);
    console.log(chalk.green.inverse("Note Removed!!!"));
  } else {
    // IF NOTE NOT FOUND WITH THE TITLE
    console.log(chalk.red.inverse("Note Not Found!!!"));
  }
};

// READ NOTE USING TITLE
const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    // IF NOTE FOUND WITH THE TITLE
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  } else {
    // IF NOTE NOT FOUND WITH THE TITLE
    console.log(chalk.red.inverse("Note Not Found!!!"));
  }
};

// ADD NEW NOTE
const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    // IF NOTE TITLE IS NOT PRESENT IN THE FILE
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log(chalk.green.inverse("New Note Added!!!"));
  } else {
    // IF NOTE TITLE IS PRESENT IN THE FILE
    console.log(chalk.red.inverse("Note Title Already Used!!!"));
  }
};

// EXPORT FUNCTION
module.exports = { addNotes, listNotes, readNote, removeNotes };
