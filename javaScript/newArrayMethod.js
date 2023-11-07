// let array = [52, 273, 32, 64, 72];

// // // forEach() 메서드
// console.log('--- forEach() 메소드 ---');
// array.forEach((item, index) =>{
//     console.log(`- ${index}번째 요소는 ${item}입니다.`);
// });

// // // map() 메소드
// console.log()
// console.log('--- map() 메소드 ---');
// let outputA = array.map((item, index) =>{
//     // 배열의 모든 요소를 제곱해서 새로운 배열을 만듦
//     return item * item;
// });
// /* 
// - 0번째 요소는 52입니다.
// - 1번째 요소는 273입니다.
// - 2번째 요소는 32입니다.
// - 3번째 요소는 64입니다.
// - 4번째 요소는 72입니다.
// */ 

// console.log(outputA);       // [ 2704, 74529, 1024, 4096, 5184 ]

// // // filter() 메서드 
// console.log();
// console.log('---filter() 메소드 ---');
// let outputB = array.filter((item, index) => {
//     // 짝수만 추출
//     return item % 2 == 0;
// });
// console.log(outputB)        // [ 52, 32, 64, 72 ]



// // 프로토타입에 메소드 추가 
// String.prototype.contain = function(input){
//     return this.indexOf(input) >= 0;
// };

// // 메소드 활용
// console.log('안녕하세요'.contain('안녕'));      // ture
// console.log('안녕하세요'.contain('데굴데굴'));   // false 

const javascriptObject = [{
    name: '윤인성',
    region : '서울'
}, {
    name: '윤명월',
    region : '도쿄'
}];

// JSON.stringify() 메소드로 자바스크립트 객체를 JSON 문자열로 변경
const outputA = JSON.stringify(javascriptObject);
const outputB = JSON.stringify(javascriptObject, null, 2);  // null(공백함수), 2(공백 개수)
console.log(typeof(outputA));   // string
console.log(typeof(outputB));   // string
console.log(outputA);           // [{"name":"윤인성","region":"서울"},{"name":"윤명월","region":"도쿄"}]
console.log(outputB);



/*
[
  {
    "name": "윤인성",
    "region": "서울"
  },
  {
    "name": "윤명월",
    "region": "도쿄"
  }
]
*/


// console.log('---------------------');

// JSON.parse() 메소드로 JSON 문자열을 자바스크립트 객체로 변경
// outputC는 객체로 변경된 것 (초록색)
const ouputC = JSON.parse(outputB);
console.log(typeof(ouputC));     // object
console.log(ouputC);            // [ { name: '윤인성', region: '서울' }, { name: '윤명월', region: '도쿄' } ]
