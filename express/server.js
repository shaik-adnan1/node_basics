const express = require("express");

// import { getMessages, postMessages } from ''
// ---------------- ROUTES ------------  
const friendsRouter = require('./routes/friends.router.js');
const messagesRouter = require('./routes/messages.router.js');

const app = express();


const PORT = 3000;

// ------------ HOW MIDDLEWARE SYNTAX IS WRITTEN --------------------------------

// app.use => for initialiZing or using the middleware 
// (req, res, next) => next parameter is what differs

// MILDDLEWARE

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`Hello from the middleware 1💀`);
    console.log(`${req.method} ${req.url}`)
    next();
    const ms = Date.now() - start;
    console.log(ms)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send({
    id: 1,
    name: "Sir Issac New to town",
  });
});
app.use(express.json())

// ====> USING THE ROUTES <==========
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

// --------- POST REQS ----------------------

