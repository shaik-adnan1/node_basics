// AXIOS

const axios = require("axios");

axios
 .get("https://jsonplaceholder.typicode.com/users")
 .then(function (response) {
    console.log(response);
  }).catch(err => {
    console.log(err)
  })