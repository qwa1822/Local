console.log(globalThis);



console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL(URI , Uniform Resource Identifier 하위개념)
// 아스키 문자로만 구성되어야 함.
// 한글이나 특수문자는 이스케이프 처리 해야 한다.
const URL='https://드림코딩.com';
const encoded=encodeURI(URL);
console.log(encoded);


const decoded=decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
