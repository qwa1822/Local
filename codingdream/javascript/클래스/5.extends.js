// class Tiger{
//   constructor(color){
//     this.color=color;
//   }

//   eat(){
//     console.log('먹자!');
//   }
//   sleep(){
//     console.log('잔다!');
//   }
// }

// class Dog{
//   constructor(color){
//     this.color=color;
//   }

//   eat(){
//     console.log('먹자!');
//   }
//   sleep(){
//     console.log('잔다!');
//   }
//   play(){
//     console.log('놀자응');
//   }
// }
class Animal {
  constructor(color){
      this.color=color;
  }

  eat(){
    console.log('먹자!');
  }
  sleep(){
    console.log('잔다!');
  }
  play(){
    console.log('놀자응');
  }

}

class Tiger extends Animal {}
const tiger=new Tiger('노랑이');
console.log(tiger);
tiger.sleep();

class Dog extends Animal{
  constructor(color,ownerName){
    super(color);   //부모클래스의 생성자의 컬러를 전달 
    this.ownerName=ownerName;   //내 도그클래스에만 오너 적용 
  }
  play(){
    console.log('놀자~');
  }
  //오버라이딩 overrindg
  eat(){
    super.eat();   //부모의 함수를 먼저 호출
    console.log('강아지가 먹는다 !');
  }
}


const dog=new Dog('빨강이','엘리');
console.log(dog);
dog.sleep();
dog.play();
dog.eat();