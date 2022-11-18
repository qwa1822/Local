


// 퀴즈1 
/**
 * 주어진 배열안의 딸기 아이템을 키위로 교체하는 함수로 만들기
 * 단 주어진 배열을 수정하지 않도록 !
 */ 
 const array=['🍌','🍓','🍇','🍓'];
 console.log(array);
 
 function replace(array,from,to){
    return array.map(item=>item===from?to:item);
  
  
 }

 const result=replace(array,'🍓','🥝');
 console.log(result);
 
 
 
 
 
 //퀴즈2:
 // 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지
 // 카운트
 const array2=['🍌','🍓','🍇','🍓'];
 function change(array,from){
  // 그 배열의 아이템의 개수를 찾을수 있음.
  return array.filter(value=>value===from).length;



    // return array.reduce((count,cur)=>{
    //   if(cur===from){
    //     count++;
    //   }
    //   return count;
    // },0)
    
    
 }
 const result2=change(array2,'🍓');
 console.log(result2);
 
 
 function match(input,search){

  return input.filter(item=>search.includes(item));


   const result=[];
   for(let i=0; i<input.length; i++){
     if(search.includes(input[i])){
       result.push(input[i])
     }
   }
   return result;
 }
 
 console.log(match(['🍕','🍔','🍟'],['🍕','🍔']));
 
 

//  퀴즈 4 
// 5이상(보다 큰)의 숫자들의 평균

const nums=[3,16,5,25,4,34,21];

const result3=nums.filter((num)=>num>5).reduce((acc,cur,_,array)=>
  acc+cur/array.length,0)
console.log(result3);