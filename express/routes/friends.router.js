const express = require('express');


// -------- CONTROLLERS ------------ 
const friendsController = require('../controllers/friends.controller');
const friends = require('../models/friends.model');


const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log(req.ip)
    next();
})

friendsRouter.get("/", friendsController.getFriend);
friendsRouter.get("/:id", friendsController.getFriendById);
friendsRouter.post("/friends", friendsController.createFriend);


module.exports = friendsRouter;