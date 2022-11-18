// 접근자 프로퍼티(Accessor Property)

class Student{
  constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
   
  }
  get fullName(){
    return `${this.firstName}: ${this.lastName}`
  }


  set fullName(value){
    console.log(value);
  }
  // fullName(){
  //   return `${this.firstName} : ${this.lastName}`
  // }
}

const student=new Student('수지','김');
console.log();
console.log(student.fullName);   //get을 호출
student.fullName='김철수';      //set을 호출 
