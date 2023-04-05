const EventEmitter = require('events');

let emitter = new EventEmitter();

// 1. 핸들러, 리스너 등록
// 1-1. 아래 두 문장은 같은 역할
emitter.addListener('event1', func_print);
emitter.on(); 

// 2. 이벤트 발생
emitter.emit('event1', '메시지1');
emitter.emit('event1', '메시지2');

// 1-2. once : 한 번만 유요한 이벤트로 등록
// 한 번 실행 후 자동 제거 됨
emitter.once('event1', func_print);

function func_print(msg) {
    console.log("내용 ", msg);
}