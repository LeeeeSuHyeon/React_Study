// import React, {useState} from "react";

// function Counter(props){
//     // var count = 1;   -> 선언만 해놓고 사용하지 않는다는 경고가 뜸 
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <p> 총 {count}번 클릭했습니다. </p>
//             <button onClick={ () => setCount(count + 1)}>
//                 클릭
//             </button>
//         </div>
//     )
// }

// export default Counter;



// // ========== useEffect  ========== 
import React, {useState, useEffect} from "react";

function Counter(props){
    // var count = 1;   -> 선언만 해놓고 사용하지 않는다는 경고가 뜸 
    const [count, setCount] = useState(0);
    // componentDidMount(), DidUpdate()와 비슷한 기능
    useEffect(()=>{
        document.title = `총 ${count}번 클릭했습니다`;
    });
    return(
        <div>
            <p> 총 {count}번 클릭했습니다. </p>
            <button onClick={ () => setCount(count + 1)}>
                클릭
            </button>
        </div>
    )
}

export default Counter;
