// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) {}}
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 {} 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될떄까지 2번과 3번을 반복

for(let i=0; i<5; i++){
  console.log(i);
}
for(let i=0; i<5; i++){
  for(let j=0; j<5; j++){
    console.log(i,j);
  }
}

//무한루프

