// let number = 273.5210332;
// console.log(number.toFixed(1));     // 273.5
// console.log(number.toFixed(4));     // 273.5210


// 생성자 함수 생성
function Constructor(){}
Constructor.property = 273;
Constructor.method = function(){};

// 생성자 함수의 속성과 메소드 출력
console.log(Constructor.property)   // 273
console.log(Constructor.method)     // [Function (anonymous)]



let numberA = Number.MAX_VALUE;
let numberB = Number.MAX_VALUE + 1;

console.log(numberA)    // 1.7976931348623157e+308
console.log(numberB)    // 1.7976931348623157e+308

let addNumber = Number('0.0000000000000001e+308'); // 소수점 밑 0, 15개
let number = Number.MAX_VALUE + addNumber

console.log(number);    // Infinity