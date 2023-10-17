function getMessages (req, res) {
  res.send("Hello there");
};

function postMessages(req, res) {
    // res.send("Hello there");
   
   return res.status(200).json({
    status: "success",
    data:"this is the data"
   });
};


module.exports = {
    getMessages,
    postMessages
}