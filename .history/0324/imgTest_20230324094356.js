const http = require('http');
const fs = require('fs');

const server1 = http.createServer();

server1.on('request', (req, res) => {
    fs.readFile("./Dvwn/jpg", (err, data) => {
        res.writeHead(200, {'Content-Type':'image.jpg'});
        res.end(data);
    });
});

server1.listen(3000, () => {
    console.log("3000 port image server start");
})