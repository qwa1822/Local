const textObj=new String('hello World!');
const text='Hello World!';

console.log(textObj);
console.log(text);
console.log(text.length);  //텍스트의 길이
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0)); //H
console.log(text.charAt(1)); //e
console.log(text.charAt(2));  //l


console.log(text.indexOf('l')); //2번쨰 인덱스에 있음
console.log(text.lastIndexOf('l'));


console.log(text.includes('tx'));  //tx가 있는지 false
console.log(text.includes('h'));  //h 있는지 false
console.log(text.includes('H'));  //H가 있는지 true

console.log(text.startsWith('He'));
console.log(text.toUpperCase());   //모두다 대문자로 
console.log(text.toLowerCase());   //모두다 소문자  

console.log(text.substring(0,2));  //0부터 2번쨰까지
console.log(text.slice(2));//2번쨰부터 가져옴
console.log(text.slice(-2));


const space='            space   '


console.log(space.trim());

const longText='Get to the point';
console.log(longText.split(' '));   //' '를기준으로 배열로 가져옴