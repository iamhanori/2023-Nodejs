const http = require('http');
const fs = require('fs').promises;

const path = require('path');
const url =require('url');

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
fileListText += `<li><a href=".?date=${dataData}">${dataData}</a></li>`;
ii+=1;
}
});
fileListText += '</ul>';

const searchParams = new URL(req.url, "http://localhost:8089").searchParams;
console.log("searchParams", searchParams);

const param_date = searchParams.get("date") || "null";
const fileName = path.join(__dirname,`./textFile/menu_${param_date}.txt`);
let fileDate = await fs.readFile(fileName);
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
${fileDate}
</body>
</html>`
res.writeHead(200,{'Context-Type':'text/html; charset=utf-8'});
res.end(template);

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