// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함.


const i=(i)=>i;
const double=(d)=>d*2;


function iterate(max,action){
  for(let i=0; i<=max; i++){
    let result=action(i);
    console.log(result);
  }
}


iterate(3,i)
iterate(3,double)