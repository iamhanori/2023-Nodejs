const http = require('http');
const fs = require('fs').promises;

const path = require('path');
const url =require('url');
const qs = require('querystring');

const server = http.createServer(async(req, res)=>{
    try{
        console.log("URL 부분 : ", req.url);

        if(req.url =='./favicon.ico'){
            res.writeHead(404);
            res.end();
        }

        const menuFolder = path.join(__dirname,"./textFile");
        console.log("내가 읽고 싶은 폴더 : ", menuFolder);
        const fileList = fs.readdir(menuFolder);

        let fileListText = '<ul>';
        await fileList.then((file_list)=>{
            let ii= 0;
            console.log("file_list", file_list);
            while(ii < file_list.length){
                let dataData = file_list[ii].replace("menu_","").replace(".txt","");
                fileListText += `<li><a href="/?date=${dataData}">${dataData}</a></li>`;
                ii+=1;
            }
        });
        fileListText += '</ul>';

        const searchParams = new URL(req.url, "http://localhost:8089").searchParams;
        console.log("searchParams", searchParams);

        const param_date = searchParams.get("date") || "null";
        console.log("param_date :", param_date);

        const fileName = path.join(__dirname,`./textFile/menu_${param_date}.txt`);
        let fileDate = await fs.readFile(fileName);
        let fileDataString = fileDate.toString().replace(/\r/g, '<br/>');
        console.log("텍스트 : ", fileDataString);

        // crud
        const pathname = url.parse(req.url, true).pathname;
        let subContent = "";
        let title="";
        if(pathname == '/create'){
            subContent = `<form action="create_process" method="post">
                <p><input type="text" name="title" placeholder="title"/></p>
                <p><textarea name="description" placeholder="description"></textarea></p>
                <p><input type="submit"/></p>
            </form>
            `
        }else if(pathname == '/update'){
            subContent = `<form action="update_process" method="post">
                    <input type="hiddon" name="id" value="${param_date}"/>
                    <p><input type="text" name="title" placeholder="title" value ="${param_date}"/></p>
                    <p><textarea name="description" placeholder="description">${fileDataString}</textarea></p>
                    <p><input type="submit"/></p>
                </form>`
        }

        const template = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>일정</title>
        </head>
        <body>
            <h1><a href="/">일정</h1>
            ${fileListText}
            <br>
            ${fileDataString}
            <br>
            <a href="create">create</a>
            <a href="/update?date=${param_date}">update</a>
            ${subContent}
        </body>
        </html>`;

        if(pathname == '/create_process'){
            let body = "";
           req.on('data', function(data){
                body += data;
           });
           req.on('end', function(){
                const post = qs.parse(body);
                const title = post.title;
                const description = post.description;
                fs.writeFile(path.join(__dirname, `./textFile/menu_${title}.txt`), description, 'utf-8', function(err){});
                console.log("내용", post);

                res.writeHead(302, {location: `/?date=${encodeURIComponent(title)}`});
                res.end();
           })
        }else if(pathname == '/update_process'){
            let body = "";
           req.on('data', function(data){
                body += body+data;
           });
           req.on('end', async function(){
                const post = qs.parse(body);
                const id = post.id;
                const title = post.title;
                const description = post.description;

                // const fileName = path.join(__dirname,`./textFile/menu_${param_date}.txt`);
                // await fs.rename(`textFile/menu=${id}.txt`, `textFile/menu_${title}.txt`);
                await fs.rename(path.join(__dirname,`./textFile/menu_${param_date}.txt`)
                            , path.join(__dirname, `textFile/menu_${title}.txt`));
                await fs.writeFile(`textFile/menu_${title}.txt`, description, 'utf-8');
                res.writeHead(302, {Location: `/?date=${encodeURIComponent(title)}`});
                res.end();

           });
        }else{
            res.writeHead(200,{'Context-Type':'text/html; charset=utf-8'});
            res.end(template);
        }

    }catch(err){
        console.log(err);
        res.writeHead(500, {'Context-Type':'text/plain; charset=utf-8'})
        res.end(err.message);
    }
});

server.listen(8089)
server.on('listening', ()=>{
    console.log("8089번 포트에서 서버가 대기 준비 입니다.");
});