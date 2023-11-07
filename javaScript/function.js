// // 익명함수
// let 함수 = function() {
//     console.log("함수의  첫 번째 줄")
//     console.log("함수의  두 번째 줄")
// };

// 함수()
// /*
// 함수의  첫 번째 줄
// 함수의  두 번째 줄
// */

// console.log(함수)   // [Function: 함수]


// // 선언적 함수
// function 함수1(){
//     console.log("함수의  첫 번째 줄")
//     console.log("함수의  두 번째 줄")
// }

// 함수1()            // 함수의  첫 번째 줄
//                   // 함수의  두 번째 줄
// console.log(함수1) // [Function: 함수1]


// // 화살표 함수
// let 함수2 = () =>{
//     console.log("함수의  첫 번째 줄")
//     console.log("함수의  두 번째 줄")
// }

// 함수2()            // 함수의  첫 번째 줄
//                   // 함수의  두 번째 줄
// console.log(함수2) // [Function: 함수2]

// function power(x){
//     return x + x;
// }

// console.log(power(10))      // 20
// console.log(power(20))      // 40 

// function print(message){
//     console.log(`${message}(이)라고 말했습니다!`)
// }
// print("안녕하세요")     // 안녕하세요(이)라고 말했습니다!
// print("뿌잉뿌잉")      // 뿌잉뿌잉(이)라고 말했습니다!


// // 선언적 함수
// function sum(min, max){
//     let output = 0 // 지역변수
//     for(let i = min; i <= max; i++){
//         output += i
//     }
//     return output
// }

// console.log(sum(1,100)) // 5050 


function print(name, count){
    // 함수 매개 변수 초기화
    // if(!count){
    //     count = 1;
    // }

    // 함수 본문
    console.log(`${name}이/가 ${count}개 있습니다.`)
}

// 함수 호출
print("사과")   // 사과이/가 1개 있습니다.


// function print(name, count){
//     count = count || 1

//     console.log(`${name}이/가 ${count}개 있습니다.`)
// }

// // 함수 호출
// print("사과")   // 사과이/가 1개 있습니다.



// // 콜백함수 
// function callTenTimes(callback){
//     for(let i = 0; i < 10; i++){
//         callback()
//     }
// }

// callTenTimes(function () {
//     console.log("힘수호출")
// })

// /*
// 힘수호출
// 힘수호출
// 힘수호출
// 힘수호출
// 힘수호출
// 힘수호출
// 힘수호출
// 힘수호출
// 힘수호출
// 힘수호출
// */ 


// let inputA = "52"
// let inputB = "52.273"
// let inputC = "1401동"

// // paseInt() 함수의 기본적인 사용
// console.log(parseInt(inputA))           // 52

// // paseInt() 함수와 pasreFloat() 함수의 차이
// console.log(parseInt(inputB))           // 52
// console.log(parseFloat(inputB))         // 52.273

// // 문자열 뒤에 숫자가 아닌 문자가 있을 때 
// console.log(parseInt(inputC))           // 1401

// // // 1초 후에
// // setTimeout(function(){
// //     console.log("1초가 지났습니다.")
// // }, 1000)

// // // 1초다 마다
// // setInterval(function(){
// //     console.log("1초 마다 호출됩니다.")
// // },1000)



// // let id = setInterval(function(){
// //     console.log("출력")
// // }, 1000)

// // // 3초 후에
// // setTimeout(function(){
// //     // 타이머 제거
// //     clearInterval(id)
// // }, 3000)


// let 변수;
// 변수 = 10
// 변수 = 20
// console.log(변수)       // 20

// 함수 = function(){ console.log("첫 번째 함수")}
// 함수 = function(){ console.log("두 번째 함수")}

// 함수()      // 두 번쨰 함수 


function 함수() {console.log("두 번째 함수")}   // 선언적 함수
함수 = () =>{
    console.log('익명함수는 어떻게 되는건데')
}
함수 = function(){console.log("첫 번째 함수")}  // 익명 함수

함수()  // 첫 번째 함수 -> 선언적 함수가 먼저 작성되고 익명함수가 덮어씀 

// 함수 = function() {console.log("1")}
// 함수 = function() {console.log("2")}
// 함수()  // 2

// 함수 = function() {console.log("1")}
// function 함수() { console.log("2")}
// 함수()  // 1

// function 함수() { console.log("1")}
// 함수 = function() {console.log("2")}
// 함수()  // 2

// function 함수() { console.log("1")}
// function 함수() { console.log("2")}
// 함수()  // 2

// // 익명 함수 생성 후 곧바로 호출 
// (function () {
//     console.log(this)
// })();

// // 화살표 함수 생성 후 곧바로 호출
// (() => {
//     console.log(this)
// })();