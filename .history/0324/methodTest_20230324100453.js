const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("method : ", req.method);

    if(req.method == "GET") {
        console.log("GET 요청");
    } else if(req.method == "POST") {
        console.log("POST 요청");
    }
    res.writeHead(200, {'Content-Type':'text.html'});
    res.write('<!DOCTYPE html><html lange"en" <head><meta charset="utf-8"></head><body>');
    res.write(`<h1>요청타입은 ${req.method} 입니다.</h1>`);
    res.write('</body></html>');
});

server.listen(3000, () => {
    console.log("sever listening")
    }
})