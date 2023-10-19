const path = require('path')

function getMessages (req, res) {
  res.render('messages', {
    title: 'messages to my frineds',
    friend: 'jambooo'
  })

  // res.send("Hello there");
  // res.sendFile(path.join(__dirname, "..", "public", "images", "cod.jpg"));
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