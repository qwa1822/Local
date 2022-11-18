// 객체를 손쉽게 만들수 있는 템플릿
// 1.생성자 함수(오래된 고전적인 방법)
// 2. 클래스💋


// 클래스 calss
class Fruit{
  // 생성자 new키워드를 통한 객체
  constructor(name,emoji){
    this.name=name;
    this.emoji=emoji
  } 
  display=()=>{
    console.log(`${this.name}: ${this.emoji}`);
  }
}

// apple 객체는Fruit클래스의 인스턴스이다 💋
const apple=new Fruit('apple','👓');
console.log(apple);
console.log(apple.name);
console.log(apple.name);
console.log(apple.emoji);
console.log(apple.emoji);



// obj는 객체임.
const obj={name:'ellile'};