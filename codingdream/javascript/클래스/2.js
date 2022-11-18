// 인스턴스 instance
// 레벨의 프로퍼티와 메소드

// static
// 정적 프로퍼티,메서드
class Fruit{

  static MAX_FRUITS=4;
  // 생성자 new키워드를 통한 객체
  constructor(name,emoji){
    
    this.name=name;
    this.emoji=emoji
  } 
    // 클래스 레벨의 메서드
  static makeRandomFruit(){
    // 클래스 레벨의 메서드에서는 this를 참조할수 없다

    return new Fruit('banana','🎍');
  }

  //인스턴스 레벨의 메서드 
  display=()=>{
    console.log(`${this.name}: ${this.emoji}`);
  }
}


const banana=Fruit.makeRandomFruit();
console.log(banana);

// apple 객체는Fruit클래스의 인스턴스이다 💋
const apple=new Fruit('apple','👓');
console.log(Fruit.MAX_FRUITS);
console.log(apple);
console.log(apple.name);
console.log(apple.name);
console.log(apple.emoji);
console.log(apple.emoji);


Math.pow();
Number.isFinite(1);