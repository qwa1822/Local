// 배열생성 방법
let array=new Array(2);
console.log(array);


let array1=new Array(1,2,3);
console.log(array1);



array=Array.of(1,2)
console.log(array);

// 배열 리터럴 
const anotherArray=[1,2,3,4];
console.log(anotherArray);



array=Array.from('text')
console.log(array);


// 일반적으로 배열은 동일한 메모리 크기를 가지며,
// 연속적으로 이어져 있어야 한다.
// 하지만 자바스크립트는 배열은 연속적으로 이어져 있지않는다
// 오브젝트와 유사함
// 자바스크립트 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다
// 이걸 보완하기 위해서
// 타입이 정해져있는 타입 배열이 있음.

array=Array.from({
  0:'안',
  1:'녕',
  length:2,
})
console.log(array);