


// 퀴즈1 
/**
 * 주어진 배열안의 딸기 아이템을 키위로 교체하는 함수로 만들기
 * 단 주어진 배열을 수정하지 않도록 !
 */ 
const array=['🍌','🍓','🍇','🍓'];
console.log(array);

function replace(array,from,to){
  const replaced=Array.from(array);
  for(let i=0; i<replaced.length; i++){
    if(replaced[i]===from){
      replaced[i]=to;
    }
  }
  return replaced;
}
const result=replace(array,'🍓','🥝');
console.log(result);





//퀴즈2:
// 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지
// 카운트
const array2=['🍌','🍓','🍇','🍓'];
function change(array,from){
 
  let count=0;
  for(let i=0; i<array.length; i++){
    if(array[i]===from){
      count++;
    }
  }
  return count;

}
const result2=change(array2,'🍓');
console.log(result2);


function match(input,search){
  const result=[];
  for(let i=0; i<input.length; i++){
    if(search.includes(input[i])){
      result.push(input[i])
    }
  }
  return result;
}

console.log(match(['🍕','🍔','🍟'],['🍕','🍔']));

