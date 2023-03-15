// setTimeout(함수, 지연시간[밀리초])
//

setTimeout(()=> console.log("5초 경과", 5000));
setTimeout(func_twoSec, 2000)

function func_twoSec() {
    console.log("2초 경과");
}