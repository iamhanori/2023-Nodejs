const EventEmitter = require('events');
const { emit } = require('process');

let emitter = new EventEmitter();

// 1. 핸들러, 리스너 등록
// 1-1. 아래 두 문장은 같은 역할
emitter.addListener('event1', func_print);
emitter.on(); // 

function func_print(msg) {
    console.log("내용 ", msg);
}