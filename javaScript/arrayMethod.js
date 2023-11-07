let array = [{
    name: '고구마',
    price : 1000
}, {
    name: '감자',
    price : 500
}, {
    name: '바나나',
    price : 1500
}];

// 배열 요소 꺼내기
let popped = array.pop();
console.log('- 배열에서 꺼낸 요소');
console.log(popped);    // { name: '바나나', price: 1500 }
console.log('- pop() 메소드를 호출한 이후의 배열');
console.log(array);     // [ { name: '고구마', price: 1000 }, { name: '감자', price: 500 } ]

// 배열 요소 넣기
array.push(popped);
array.push({
    name : '사과',
    price : 2000
});
console.log('- push() 메소드를 호출한 이후의 배열');
console.log(array); 
/*  [
    { name: '고구마', price: 1000 },
    { name: '감자', price: 500 },
    { name: '바나나', price: 1500 },
    { name: '사과', price: 2000 }
  ]
  */ 


let arrayA = ['고구마', '감자', '바나나'];
let arrayB = [{
    name: '고구마',
    price : 1000
}, {
    name: '감자',
    price : 500
}, {
    name: '바나나',
    price : 400
}];

// 기본 배열을 정렬하고 출력
arrayA.sort();
console.log('- 문자열로 정렬');
console.log(arrayA);                // [ '감자', '고구마', '바나나' ]
console.log();
console.log('- 문자열로 정렬(역순)');
console.log(arrayA.reverse());      // [ '바나나', '고구마', '감자' ]
console.log();

// 객체 내부의 숫자로 정렬하고 출력
arrayB.sort((itemA, itemB) =>{
    return itemA.price - itemB.price;
});
console.log('- 객체 내부의 숫자로 정렬');
console.log(arrayB);
console.log();

/* 
[
  { name: '바나나', price: 400 },
  { name: '감자', price: 500 },
  { name: '고구마', price: 1000 }
]
*/

// 객체 내부의 문자열로 정렬하고 출력
arrayB.sort((itemA, itemB) =>{
    if(itemA.name < itemB.name){
        return -1;
    } else if (itemA.name > itemB.name){
        return 1;
    } else{
        return 0;
    }
});

console.log('- 객체 내부의 문자열로 정렬');
console.log(arrayB);
console.log();

/*
[
  { name: '감자', price: 500 },
  { name: '고구마', price: 1000 },
  { name: '바나나', price: 400 }
]
*/