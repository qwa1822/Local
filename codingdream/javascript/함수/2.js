function add(a,b){
  console.log(a);
  console.log(b);
  return a+b;
}

//함수이름을 어디다가 할당하면
// 메모리주소를 할당하는것과 같은것
// 그래서 함수가 실행되는것 


const sum=add;


sum(1,2);
console.log(add(1,2));
console.log(sum(1,2));