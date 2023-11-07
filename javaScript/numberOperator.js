// console.log(1+2);
// console.log(1-2);
// console.log(1*2);
// console.log(1/2);
// console.log(1%2);

// // 앞에 있는 피 연산자 부호를 따름
// console.log(4%3);
// console.log(-4%3);
// console.log(4%-3);
// console.log(-4%-3);
// /*
// 1
// -1
// 1
// -1 
// */


// console.log(5.0%2.2);   //0.5999999999999996

// console.log(!true);
// console.log(!false);
// console.log(!(52<273));
// console.log(!(52>273));

// console.log("This is 'String'") // This is 'String'
// console.log('This is "String"'); // This is "String"
// console.log("This is \"String\"") // This is "String"
// console.log('This is \'String\'') // This is 'String'

// console.log("이름\t나이");  // 이름    나이
// console.log("안녕\n하세요");
// //안녕
// //하세요
// console.log("\\\\"); // \\ 

// console.log("안녕하세요"[0]);   // 안
// console.log("안녕하세요"[1]);   // 녕
// console.log("안녕하세요"[3]);   // 세

// console.log(`안녕하세요`) // '안녕하세요'
// console.log(`올해는 ${new Date().getFullYear()}년입니다.`)  // '올해는 2023년입니다.'

// console.log(52<273)          // true
// console.log(52>273)          // false
// console.log("하마" < "가방")   // false, 한글 순으므로 하가 더 큼
// console.log("하마" > "가방")    // true


// let hours = (new Date()).getHours();
// console.log(hours)                      // 10 -> 현재 10시여서
// console.log(hours < 3 || 8 < hours);      //true
// console.log(3 <= hours && hours <= 8);  // false


// let pi = 3.14159265
// let radius = 10

// console.log(`둘레: ${2 * pi * radius}`)      // 둘레: 62.831853
// console.log(`넓이: ${pi * radius * radius}`) // 넓이: 314.159265

// var a = 'test'
// var a = 'test2'  // 재선언 가능
// a = 'test3'      // 재할당 가능
// console.log(a)   // test3


// let a = 'test'
// // let a = 'test1' // let을 한 번 더 쓰는 건 재선언이므로 문제가 됨
//     a = 'test2'    // 재선언이 아닌 재할당하는 건 가능 
//     a = 'test3'
// console.log(a)  // test3


// const b = 'test'
// // const b = 'test2'    // 재선언 불가능
// // b = 'test3'          // 재할당 불가능 - 컴파일 시 에러 발생(Assignment to constant variable.)
// console.log(b)          // test


// let a = 10
// console.log(a)              // 10
// console.log(typeof(a))      // number

// a = "문자열"
// console.log(a)              // 문자열
// console.log(typeof(a))      // string

// a = true
// console.log(a)              // true
// console.log(typeof(a))      // boolean

// a = {};
// console.log(a)              // {}
// console.log(typeof(a))      // object

// let c;                      
// console.log(typeof(c))      // undefined (하나의 타입임)


// let number = 10

// console.log(number)     // 10
// console.log(++number)   // 11
// console.log(--number)   // 10
// console.log(number)     // 10

// console.log(number++)   // 10
// console.log(number--)   // 11
// console.log(number)     // 10 

// // boolean 까지 6가지 타입이 있음 
// > typeof 10             // 'number'
// > typeof "문자열"         //'string'
// > typeof(function(){})  // 'function'
// > typeof({})            // 'object'
// > typeof(alpha)         // 'undefined'

console.log(Number("52"))       // 52
console.log(Number("52.273"))   // 52.273
console.log(Number(true))       // 1
console.log(Number(false))      // 0
console.log(Number("안녕하세요"))  // NaN (Not a Number) -> *중요 숫자 자료형이지만 숫자가 아닌 것을 의미 

// NaN 변수 생성
let nan = Number("안녕하세요")

// NaN끼리 비교 
console.log(nan == nan)     // false
console.log(nan != nan)     // true

// isNaN() 함수로 NaN인지 확인
console.log(isNaN(nan))     // true

let undefinedVariable;

console.log(Boolean(0))     // false, 0
console.log(Boolean(nan))   // false, NaN
console.log(Boolean(""))    // false, 빈 문자열
console.log(Boolean(null))  // false, null
console.log(Boolean(undefinedVariable)) // false, undefined 

// ! 연산자를 두 번 사용하면 Boolean() 함수를 사용하는 것과 같음
console.log(!!0)     // false, 0
console.log(!!nan)   // false, NaN
console.log(!!"")    // false, 빈 문자열
console.log(!!null)  // false, null
console.log(!!undefinedVariable) // false, undefined 


// === : 자료형과 값이 같은지 비교 
console.log(`52 == "52" : ${52 == "52"}`)       // 52 == "52" : true
console.log(`52 === "52" : ${52 === "52"}`)     // 52 === "52" : false
console.log();
console.log(`0 == "" : ${0 == ""}`)             // 0 == "" : true
console.log(`0 === "" : ${0 === ""}`)           // 0 === "" : false
console.log()

const constant = "변경할 수 없어요"
// constant = "";  // Error : Assignment to constant variable. 상수는 재할당 불가능
console.log(constant)

let pi1 = 3.14;
console.log(pi1);