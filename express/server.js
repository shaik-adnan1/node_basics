const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send({
    id: 1, 
    name: 'Sir Issac New to town'
  });
});

app.get("/messages", (req, res) => {
  res.send("Hello there");
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  res.send("Hello there");
});
