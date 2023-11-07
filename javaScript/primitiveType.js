// // 가본 자료형
// let number = 273;        // type : number
// let string = '안녕하세요';  // type : string
// let boolean = true;      // type : boolean

// let number = new Number(273);           // type : object
// let string = new String('안녕하세요');     // type : object
// let boolean = new Boolean(true);        // type : object

// // 자료형 출력
// console.log(typeof number);     // number
// console.log(typeof string);     // string
// console.log(typeof boolean);    // boolean 


// let string = '과자|1500원';
// console.log(string.split('|')); // [ '과자', '1500원' ], object형 배열


// let string = new String('과자|1500원');
// console.log(string.split('|')); // [ '과자', '1500원' ]


let primitiveNumber = 273;

// primitiveNumber.method = function(){
//     return 'Primitive Method';
// };

// console.log(primitiveNumber.method());  
//  TypeError: primitiveNumber.method is not a function
// 기본 자료형은 객체가 아니기 때문에 속성과 메서드를 생성할 수 없음 

// 기본 자료형에 프로토타입으로 메서드 추가 
Number.prototype.method = function(){
    return 'Primitive Method'
};
console.log(primitiveNumber.method());     // Primitive Method
