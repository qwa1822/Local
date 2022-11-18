// 단항연산자 Unary Operators

// +(양)
// -(음)
// !(부정)

let a=5;
a=-a;  //-1*5;
console.log(a);
console.log(-a);


a=+a;
console.log(a);
let boolean=true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// +숫자가 아닌 타입들을 숫자로 변환하면 어떤갑싱 나오는지 확인할 수 있음.
console.clear();
console.log(+false);
console.log(+null); //0
console.log(+''); //1
console.log(+true);   //Nan
console.log(+'text'); //Nan

console.log(!!1);