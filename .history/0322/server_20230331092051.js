// 노드 서버 만들기

const http = require('http');

server = http.createServer((req, res) => {
    res.write("<h1> Hello Ndoe</h1>");
    res.end("<p>hello server</p>");
})

server.listen(8088);
// 이벤트 on
server.on('listening', () => {
    console.log("8088번 포트에서 서버가 대기 중입니다.");
});

server.on('error', (error) => {
    console.log(error);
});

