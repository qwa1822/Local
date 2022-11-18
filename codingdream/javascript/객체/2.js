const obj={
  name:'김수민',
  age:30,
}
// 코딩하는 시점에, 정적으로 접근이 확정됨💛
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을떄 대괄호 표기법 사용💛
function getValue(obj,key){
  return obj[key];
}
function addkey(obj,key,value){
  return obj[key]=value;
}
function deleteKey(obj,key){
  delete obj[key];
}
console.log(getValue(obj,'name'));
addkey(obj,'job','enginner');


deleteKey(obj['job'])
console.log(obj);