const model = require('../models/friends.model.js')

function createFriend(req, res) {
  try {
 if (!req.body.name) {
    return res.status(400).json({
      error: "name is required",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  res.json(newFriend);
  }
  catch(err) {
    return res.status(500).json({
      error: err.message
    });
  }
  
 
}

function getFriend(req, res) {
  res.json(model);
}

function getFriendById(req, res) {
  const friendId = req.params.id;

  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "friend does not exist",
    });
  }
}

module.exports = { createFriend, getFriend, getFriendById };
