const express = require('express');


// -------- CONTROLLERS ------------ 
const friendsController = require('../controllers/friends.controller')


const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriend);
friendsRouter.get("/:id", friendsController.getFriendById);
friendsRouter.post("/friends", friendsController.createFriend);


module.exports = friendsRouter;