// using an eventEmitter class ||>

const EventEmitter = require("events");
const celebrity = new EventEmitter();

// subscribe to channel for observer 1
celebrity.on("race", results => {
  results === "win"
    ? console.log("congratulations! you are awesome")
    : console.log("congratulations! boooo");
});
// subscribe to channel for observer 2
celebrity.on("race", results =>
  results === "win"
    ? console.log("i could have done that better")
    : console.log("boo")
);

celebrity.emit("race", "win");

celebrity.emit("race", "loss");

process.on("exit", code => {
  console.log("Process exit event with code: ", code);
});
