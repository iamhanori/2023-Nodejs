// image
const http = require('http');
const fs = require('fs');

const server1 = http.createServer();

server1.on('request', (req, res) => {
    fs.readFile("./Dvwn.jpg", (err, data) => {
        res.writeHead(200, {'Content-Type':'image.jpg'});
        res.end(data);
    });
});

server1.listen(3000, () => {
    console.log("3000 port image server start");
});

// // audio
// const server2 = http.createServer();

// server2.on('request', (req, res) => {
//     fs.readFile("./Sasim.mp3", (err, data) => {
//         res.writeHead(200, {'Content-Type':'audio/mp3'});
//         res.end(data);
//     });
// });

// server1.listen(3001, () => {
//     console.log("3001 port image server start");
// });

// // video
// const server3 = http.createServer();

// server3.on('request', (req, res) => {
//     fs.readFile("./BADKID.mp4", (err, data) => {
//         res.writeHead(200, {'Content-Type':'video/mp4'});
//         res.end(data);
//     });
// });

// server1.listen(3002, () => {
//     console.log("3002 port image server start");
// });


