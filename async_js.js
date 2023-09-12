// // Promises

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("stuff worked");
//   } else {
//     reject("Error, broken!");
//   }
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Pookie')
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'IS THAT YOU? I"M LOOKING FOR?')
// })

// Promise.all([promise, promise2, promise3]).then(values => {
//     console.log(values)
// })

// // promise
// //   .then(result => result + "!")
// //   .then(result2 => result2 + "?")
// //   .catch(() => {
// //     console.log("found an error");
// //   })
// //   .then(result3 => console.log("result3 " + result3));

// json placeholder

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonlaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// Promise.all(
//   urls.map(url => {
//     return fetch(url)
//       .then(resp => resp.json())
//       .then(results => {
//         console.log(results[0]);
//         console.log(results[1]);
//         console.log(results[2]);
//       })
//       .catch(error => console.log("the error is " + error));
//   })
// );

// async functions

// movePlayer(100, "left")
//   .then(() => movePlayer(400, "left"))
//   .then(() => movePlayer(10, "right"))
//   .then(() => movePlayer(350, "left"));

// // with async and await

// async function playerStart() {
//   const first = await movePlayer(100, "left"); //pause
//   const second = await movePlayer(400, "right"); //pause
//   const third = await movePlayer(100, "left"); //pause
// }
async function fetchUser() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  respJson = resp.json();
  console.log(respJson);
}

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonlaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

// async way for Promise all
const getUsers = async function () {
    try {

        const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url)));
    } catch(err) {
        console.log('we have an error', err)
    }
  console.log(users, posts, albums);  
};
