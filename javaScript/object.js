// let product ={
//     제품명 : '7D 건조 망고',
//     유형: '당절임',
//     성분 : '망고, 설탕, 메타중아황산나트륨, 치자황색소',
//     원산지 : '필리핀'
// }

// console.log(product)
// console.log(product['제품명'])  // 7D 건조 망고
// console.log(product['유형'])    // 당절임
// console.log(product['성분'])    // 망고, 설탕, 메타중아황산나트륨, 치자황색소
// console.log(product['원산지'])  //  필리핀

// console.log(product.제품명)     // 7D 건조 망고
// console.log(product.유형)       // 당절임
// console.log(product.성분)       // 망고, 설탕, 메타중아황산나트륨, 치자황색소
// console.log(product.원산지)      //  필리핀


// let object = {
//     name: "바나나",
//     price : 1200,
//     number : 273,
//     string : 'RintIanTta',
//     boolean : true,
//     array: [52,273,103,32],
//     method : function(){
//         console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
//     }
// };

// console.log(object.name)        // 바나나
// console.log(object.price)       // 1200

// for (let key in object){
//     console.log(`${key} : ${object[key]}`)
// }
// // name : 바나나
// // price : 1200

// object.method()





// let products = [{
//     name : '바나나',
//     price : 1200,
//     print: function(){
//         console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
//     }
// }, {
//     name : '사과',
//     price : 2000,
//     print: function(){
//         console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
//     }
// }, {
//     name : '배',
//     price : 3000,
//     print: function(){
//         console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
//     }
// }, {
//     name : '고구마',
//     price : 700,
//     print: function(){
//         console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
//     }
// }, {
//     name : '감자',
//     price : 600,
//     print: function(){
//         console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
//     }
// }, {
//     name : '수박',
//     price : 5000,
//     print: function(){
//         console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
//     }
// }];

// // 반복해서 출력
// for (let product of products){
//     product.print();
// }





// let products = [
//     {name : '바나나', price : 1200},
//     {name : '사과', price : 2000},
//     {name : '배', price : 3000},
//     {name : '고구마', price : 700},
//     {name : '감자', price : 600},
//     {name : '수박', price : 5000}
// ];

// // 함수 선언 (타입을 가지는 선언적 함수)
// function printProduct(product){
//     console.log(`${product.name}의 가격은 ${product.price}원입니다.`)
// }

// // 반복 출력
// for(let product of products){
//     printProduct(product)
// }


// 생성자 함수 (대문자로 시작)
function Product(name, price){
    this.name = name;
    this.price = price; 
}

// // 객체 생성
// let product =  Product("바나나", 1200);  // new를 생략하면 객체가 생성되지 않음 
// let product1 = new Product("사과", 2000);
// let product2 = new Product("배", 1500);

// // 출력
// console.log(product)    // undefined
// console.log(product1)    // Product { name: '사과', price: 2000 }
// console.log(product2)    // Product { name: '배', price: 1500 }


// 프로토타입에 메서드를 선언 (프로토타입 : 모든 객체(전역적으로)가 공유하도록(static, public 느낌) )
// Product.prototype.print = function(){
//     console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
// };

// 객체 생성
// let product = new Product("바나나", 1200);

// 메소드 호출
// product.print();    // 바나나의 가격은 1200원입니다.

// 상품 목록 선언
// let products = [
//     new Product('바나나', 1200),
//     new Product('사과', 2000),
//     new Product('배', 3000),
//     new Product('고구마', 700),
//     new Product('감자', 600),
//     new Product('수박', 5000)
// ];

// // 반복 출력
// for(let product of products){
//     product.print();
// }


let a = "a";
let b = "b";

let ab = {a, b};
console.log(ab);

