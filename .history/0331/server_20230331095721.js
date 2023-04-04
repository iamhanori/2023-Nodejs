liconst http = require('http');
const fs = require('fs').promises;

const path  = require('path');
const url  = require('url');


const server = http.createServer(async (req, res) => {
    try {
        console.log("URL 부분 : ", req.url);

        if(req.url == './favicon.ico') {
            res.writeHead(404);
            res.end();
        }

        // 지정된 폴더의 파일 리스트를 읽어와서 본문안에 넣기
        const menuFolder = path.join(__dirname, './textFile');
        console.log("내가 읽고 싶은 폴더 : ", menuFolder);
        const filelist = fs.readdir(menuFolder);
        // 요소 만들기
        let fileListText = '<ul>';
        await filelist.then((file_list) => {
            let ii = 0;
            console.log("filelist", file_list);
            while(ii < file_list.length) {
                let dateData = file_list[ii].replace("menu_","").replace(".txt","");
                fileListText += `<li><a href="/?date=${dateData}>${dateData}</li>`
                ii+=1;
            }
            
        });
        console.log("log", fileListText);
        fileListText += '</ul>';

        const template = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>급식 메뉴</title>
            </head>
            <body>
                <h1><a href="/">급식 메뉴</a></h1>
                ${fileListText}
            </body>
        </html>
    `
            

        res.writeHead(200, {'Context-Type' : 'text/html; charset=utf8'});
        res.end(template);

    } catch(err) {
        console.error(err);
        res.writeHead(500, {'Context-Type' : 'text/html; charset=utf8'});
        res.end(err.message);
    }  

    
});

server.listen(700);
    server.on('listening', () => {
        console.log("700번 포트에서 서버가 대기 중입니다.");
    });


