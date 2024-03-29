const EventEmitter = require('events');

let emitter = new EventEmitter();

//1. 핸들러,리스너 등록
//1-1. 
emitter.addListener('event1', func_print);
emitter.on('event1', func_print);

//1-2. once : 한번만 유효한 이벤트로 등록된다.
// 한번 실행 후에 자동으로 제거 된다.
emitter.once('event1', func_print);

//2. 이벤트 발생
emitter.emit('event1', '메시지1');
emitter.emit('event1', '메시지2');

//3. 이벤트 제거
emitter.removeListener('event1', func_print);
emitter.emit('event1', '메시지3');

function func_print(msg){
    console.log("내용 : ", msg);
}