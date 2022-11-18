// 카운터를 만들기
// 0이상의 값으로 초기화 한뒤 숫자를 ㅡ하나씩 증가
// counter 클래스 만들기



class Counter{
  #value

  constructor(startValue){
    this.startValue=startValue;
    if(isNaN(startValue) || startValue<0){
      this.#value=0;
    }
    else{
      this.#value=startValue;
    }
  }

  get value(){
    return this.#value;
  }


  increment=()=>{
    this.#value++;
  }


}


const counter=new Counter(0);
counter.increment()
counter.increment()
console.log(counter.value);

