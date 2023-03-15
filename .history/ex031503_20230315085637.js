// setTimeout(함수, 지연시간[밀리초])
// 1000 == 1초

setTimeout(() => console.log(("5초 경과"), 5000));
setTimeout(func_twoSec, 2000)

function func_twoSec() {
    console.log("2초 경과");
}

const interval_random = setInterval(() => console.log(Math.floor(Math.random()*10)), 1000);    

setTimeout(()=>{
    console.log(interval_random);
}, 10000)
