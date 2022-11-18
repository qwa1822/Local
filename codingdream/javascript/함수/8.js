// 불변성

/*

immutable불변(성) 변경할수 없는
mutable 변경할수 있는

*/



// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 ❌
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트,값) 만들어서 반환해야 함
// 원시값- 값에 의한 복사
// 객체값- 참조에 의한 복사(메모리주소)
function display(num){

  // 지역변수 5를 변경했으니 5가출력
  num=5;
  console.log(num);
}


// 4가 출력되는게 당연 
const value=4;
display(value)
console.log(value);

function changeName(obj){   //0x100 
  obj.name='Bob';     //  ❌  ❌  ❌  ❌  ❌  ❌  ❌  ❌  ❌외부로부터 주어진인자(오브젝트)를 내부에서변경   ❌
  console.log(obj);   
}

const ellie={name:'Ellie'};   //0x100 변경하는순간 
changeName(ellie)
console.log(ellie);


function  changeName2(obj){
  return {...obj,name:'Bob'};
}