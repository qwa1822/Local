function add(num1,num2){
  return num1+num2;
}
const result=add(3,4);
console.log(result);


//사용예제2
function fullName(firstName,lastName){
  return `${firstName} ${lastName}`;
}
let lastName='김';
let firstName='지수';

console.log(fullName(firstName,lastName));