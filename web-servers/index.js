const http = require('http');

const PORT = 3000;


const server = http.createServer((req, res) => {
    const friends = [
      {
        id: 0,
        name: "Oggy",
      },
      {
        id: 1,
        name: "Sir Issac Newton",
      },
      {
        id: 2,
        name: "jamal part 2",
      },
      {
        id: 3,
        name: "Kashimati",
      },
      {
        id: 4,
        name: "jamal",
      },
      {
        id: 5,
        name: "issac New to town",
      },
    ];

    const items = req.url.split('/')

    if(req.method === 'GET' && items[1] === 'friends') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

      if(req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
          const friend = data.toString();
          console.log('Request: ',  friend);
          friends.push(JSON.parse(friend));
        })
      }else if(items.length === 3) {
            res.end(JSON.stringify(friends[Number(items[2])]))
        } else {

            res.end(JSON.stringify(friends))
        }


    } else if (items[1] === 'free') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>')
        res.write('<ul>')
        res.write('<li> Hey issac fuckUMean </li>')
        res.write('<li> Jimmy carter </li>')
        res.write('</ul>');
        res.write('</h1>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
    



})

// listening to server through port

server.listen(PORT, () => {
    console.log('server listening on port');
})