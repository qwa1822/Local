
// 접근제어자 -캡슐화 
// private(#), public(기본) ,protected
// #을통해 외부에서 접근불가 
class Fruit{

  #name;
  #emoji;
  #type='과일';
  constructor(name,emoji){
    
    this.#name=name;
    this.#emoji=emoji
  } 
    
  //인스턴스 레벨의 메서드 
  display=()=>{
    console.log(`${this.name}: ${this.emoji}`);
  }
}

// apple 객체는Fruit클래스의 인스턴스이다 💋
const apple=new Fruit('apple','👓');
// #field 는 외부에서 접근 불가 
console.log(apple);