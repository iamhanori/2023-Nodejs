const http = require('http');
const fs = require('fs').promises;

const path  = require('path');
const url  = require('url');


const server = http.createServer(async (req, res) => {
    try {
        console.log("URL 부분 : ", req.url);

        if(req.url == '/favicon.ico') {
            res.writable(404);
            res.end();
        }

        // 지정된 폴더의 파일 리스트를 읽어와서 본문안에 넣기
        const menuFolder = path.join_(__dirname, +'./textFile');
        console.log("내가 읽고 싶은 폴더 : ", menuFolder);
        const filelist = fs.readdir(menuFolder);
        // 요소 만들기
        let fileListText = '<ul>';
        filelist.then((filelist) => {
            let ii = 0;
            console.log("filelist", file_list);
            // while(ii < file_list.length) {
            //     let dateData = file_list[ii].replace("menu_","").replace(".txt","");
            //     fileListText += `<li><a href="/?date=${dateData}>`
            //     ii+=1;
            // }
            
        })

        res.writeHead(200, {'Context-Type' : 'text/plain; charset=utf-8'});
        res.end("성공");

    } catch(err) {
        console.error(err);
        res.writeHead(500, {'Context-Type' : 'text/plain; charset=utf8'});
        res.end(err.message);
    }  

    
});

server.listen(8089);
    server.on('listening', () => {
        console.log("8089번 포트에서 서버가 대기 중입니다.");
    });
