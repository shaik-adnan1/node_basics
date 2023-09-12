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

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonlaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map(url => {
    return fetch(url)
      .then(resp => resp.json())
      .then(results => {
        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
      })
      .catch(error => console.log("the error is " + error));
  })
);
