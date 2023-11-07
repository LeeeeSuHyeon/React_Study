// let stringFromLiteral = '안녕하세요';
// let stringFromConstructor = new String('안녕하세요');

// console.log(stringFromLiteral);         // 안녕하세요
// console.log(stringFromConstructor);     // [String: '안녕하세요']


// let string = 'abcdefg'
// string.toUpperCase();
// console.log(string);    // abcdefg

// string = string.toUpperCase()
// console.log(string);    // ABCDEFG

// sliceString = string.slice(2, 5);
// console.log(sliceString);   // CDE


// let string = 'Hello World';
// string = string.toLowerCase();
// string = string.replace(' ', '|');
// let array = string.split('|');
// console.log(string);    // hello|world
// console.log(array);     // [ 'hello', 'world' ]

// string = 'Hello World';
// array = string.toLowerCase().replace(' ', '|').split('|');
// console.log(string);    // Hello World
// console.log(array);     // [ 'hello', 'world' ]



let string = '안녕하세요. 좋은 아침입니다.';

// 문자열 내부에 "아침"이라는 문자열이 있는지 확인 (indexOf는 특정 문자열이 있으면 위치를 리턴, 없으면 -1)
if (string.indexOf('아침') >= 0){
    console.log("좋은 아침이에요...!", string.indexOf('아침')); // 10
}


// var string = '감자, 고구마, 바나나, 사과';

// // 문자열을 쉼표로 자르고 출력합니다
// let array = string.split(',');
// console.log(array);     // [ '감자', ' 고구마', ' 바나나', ' 사과' ]




// // 현재 시간을 기반으로 Date 객체 생성
// let dateA = new Date();
// console.log(dateA);     // 2023-09-19T02:26:10.884Z

// // 유닉스 타임(1970년 1월 1일 00시 00분 00초부터 경과한 밀리초)
// let dateB = new Date(692281800000)
// console.log(dateB);     // 1991-12-09T12:30:00.000Z

// // 문자열을 기반으로 Date 객체 생성
// let dateC = new Date("December 9, 1991 21:30:00")
// console.log(dateC);     // 1991-12-09T12:30:00.000Z

// // 시간 요소 (년, 월 -1, 일, 시간, 분, 초, 밀리초)를 기반으로 Date 객체 생성
// let dateD = new Date(1991, 12 - 1, 9, 21, 30, 0, 0);
// console.log(dateD)      // 1991-12-09T12:30:00.000Z



// let date = new Date();

// console.log(date);      // 2023-09-19T02:29:45.290Z

// date.setFullYear(date.getFullYear() + 1);
// date.setMonth(date.getMonth() + 11);
// date.setDate(date.getDate() + 3);

// console.log(date);      // 2025-08-22T02:29:45.290Z


let now = new Date()
let before = new Date('September 28, 2000');

// 시간 간격 구하기
let interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

console.log(`태어나고 ${interval}일 지났습니다.`); // 태어나고 8391일 지났습니다.