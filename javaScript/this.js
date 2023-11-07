let object = {
    name: "바나나",
    price : 1200,
    print : function(){
        console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
    }
};

// object.print()   // 바나나의 가격은 1200원입니다.
console.log(object.print())
// 바나나의 가격은 1200원입니다.
// undefined