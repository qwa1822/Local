console.log(new Date());  //현재시간 
console.log(new Date('Jun 5,2022'));
console.log(new Date('2022-12-17T03:24:00'));


// UTC기준 (협정 세계시,1970년 1월 1일 UTC자정과의 시간차이를 밀리초 단위)
console.log(Date.now());
console.log(Date.parse('2022-12-17T03:22:24'));

const now=new Date();
now.setFullYear(2023);
now.setMonth(10);  // 0부터시작 0:1월
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());    // 0일요일부터 1..6:금요일