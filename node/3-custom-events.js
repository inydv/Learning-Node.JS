// MODULE TO CREATE CUSTOM EVENTS
const events = require("events");

// CREATE EVENT EMITTER
const myEmitter = new events.EventEmitter();

// CREATE NEW CUSTOM EVENT
myEmitter.on("useCreated", (id, name) => {
  console.log(`New user ${name} with id ${id} is created`);
});

// RAISED AN EVENT (EMIT AN EVENT)
myEmitter.emit("useCreated", 1, "nitin");
