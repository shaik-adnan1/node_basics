const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Oggy",
  },
  {
    id: 1,
    name: "Sir Issac Newton",
  },
  {
    id: 2,
    name: "jamal part 2",
  },
  {
    id: 3,
    name: "Kashimati",
  },
  {
    id: 4,
    name: "jamal",
  },
  {
    id: 5,
    name: "issac New to town",
  },
];

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send({
    id: 1,
    name: "Sir Issac New to town",
  });
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const friendId = Number(req.params.id);

  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
        error: 'friend does not exist'
    })
  }
});

app.get("/messages", (req, res) => {
  res.send("Hello there");
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  res.send("Hello there");
});
