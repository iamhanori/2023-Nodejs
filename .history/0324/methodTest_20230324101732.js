const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("method : ", req.method);
    console.log("url : ", req.url);
    console.log("url1 : ", url.parse(req.url1));
    console.log("url2 : ", url.parse(req.url).pathname);
    console.log("url3 : ", url.parse(req.url).query);
    console.log("url4 : ", url.parse(req.url, true).query);
    let queryobj = url.parse(req, url, true).query;

    if(req.method == "GET") {
        console.log("GET 요청");
    } else if(req.method == "POST") {
        console.log("POST 요청");
    }
    res.writeHead(200, {'Content-Type':'text.html'});
    res.write('<!DOCTYPE html><html lange"en" <head><meta charset="utf-8"></head><body>');
    res.write(`<h1>요청타입은 ${req.method} 입니다.</h1>`);
    res.write(`<h1>path은 ${url.parse(req.url).pathname} 입니다.</h1>`);
    res.write(`<h1>query는 ${JSON.stringify(queryobj)} 입니다.</h1>`);
    res.write('</body></html>');
});

server.listen(3000, () => {
    console.log("sever listening")
    
});