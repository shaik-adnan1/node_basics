const {get} = require('https');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
// })

// creating a request on https protocol

get('https://www.google.com', (res) => {
    res.on('data', (chuck) => {
        console.log(chuck.toString());
    });
    res.on('end', () => {
        console.log('No more data available')
    })
})

