// const apple={
//   name:'apple',
//   display:function(){
//     console.log(`${this.name}: ❤`);
//   },
// };

// apple.display();

// const orange={
//   name:'orange',
//   display:function(){
//     console.log(`${this.name}: 💋`);
//   },
// };


// 생성자 함수
// 대문자를 써야됌 
function Fruit(name,emoji){
  this.name=name;
  this.emoji=emoji;
  this.display=()=>{
    console.log(`${this.name}: ${this.emoji}`);
  }
};


const apple=new Fruit('apple','🎈');
const orange=new Fruit('orange','💖');



console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(apple.emoji);
console.log(apple.display);