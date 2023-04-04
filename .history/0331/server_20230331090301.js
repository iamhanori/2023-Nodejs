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
            
        });

    }
});