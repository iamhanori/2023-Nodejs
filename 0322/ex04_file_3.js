// promises로 fs해보기

const fs = require('fs').promises;

let readData = "읽어오지 못헀습니다.";

fs.readFile("./readText.txt")
    .then((data) => {
        console.log(data.toString());
        readData = data.toString();
        return fs.writeFile("./writeText3.txt", ("Text3 : " + readData));
    }).then(() => {
        return fs.readFile("./writeText3.txt");
    }).then((data3) => {
        console.log("data3 : " + data3.toString());
    }).catch((err) => {
        console.error(err);
    });

       
        

