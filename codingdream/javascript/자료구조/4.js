const pizza={name:'🍕',price:2};
const remen={name:'🍜',price:3};
const sushi={name:'🍣',price:1};

const store1=[pizza,remen];
const store2=Array.from(store1);
console.log('store1',store1);
console.log('store2',store2);

store2.push(sushi)
console.log('store1',store1);
console.log('store2',store2);

pizza.price=4;
console.log('store1',store1);
console.log('store2',store2);
