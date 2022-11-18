// 객체
// 서로 연관있는 속성과 행동을 묶어주기 위해
// 데이터(프로퍼티) 함수(메소드)
// 순수데이터 객체  상태와 행동 객체


//💛밀접하게 관련있는 상태와 행동을 객체로 묶음 💛
//Object literal {key:value}
// new Object()
// Object.create();
// key-문자,숫자 ,문자열 ,심볼 💛 
// value- 원시값, 객체(함수)💛

let apple={
  name:'apple',
  'hello':'😀',
  0:1,
};


// 속성,데이터에 접근하기 위해서는
console.log(apple.name);   //마침표 표기법 dot notation
console.log(apple['hello']);    //대괄호 표기법 bracket notation
apple['name'];

apple.emoji='🎈';
console.log(apple.emoji);
console.log(apple['emoji']);
console.log(apple);