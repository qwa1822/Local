class Employee{
  name;
  departement;
  hoursPermonth;


  constructor(name,departement,hoursPermonth,payRate){
    this.name=name;
    this.departement=departement;
    this.hoursPermonth=departement;
    this.payRate=payRate;
  }
  calculatePay(){
    return this.hoursPermonth*this.payRate;
  }

}


class FullTImeEmployee extends Employee{
  static PAY_RATE=10000;
  constructor(name,departement,hoursPermonth){
    super(name,departement,hoursPermonth,FullTImeEmployee.PAY_RATE);
  }
}



class PartTimeEmployee extends Employee{
  static PAY_RATE=8000;
  constructor(name,departement,hoursPermonth){
    super(name,departement,hoursPermonth,PartTimeEmployee.PAY_RATE);
  }
}

const ellie=new FullTImeEmployee('ellie','sw',40);
const bob=new PartTimeEmployee('sumin','sw',80);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());