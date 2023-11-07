import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);
    // 커스텀 훅과 훅의 차이점 

    useEffect(()=>{
        console.log("==============================")
        console.log("useEffect() is called");
        console.log(`isFull : ${isFull}`);
    });
    // -> 의존성 배열이 없음 : 컴포넌트 자체가 업데이트 됐을 떄 useEffect 사용 

    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value : ${count}`)
    }, [count]);
    // 의존성 배열 count가 들어감 : count 값이 변할 때 useEffect를 사용하는 것 

    return (
        <div style={{padding :16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick = {increaseCount}disabled={isFull}>
                입장
            </button>
            <button onClick = {decreaseCount}>퇴장</button>

            {/* isFUll이 true일 때 (구조분해형태?) */}
            {isFull && <p style={{color : "red"}}>정원이 가득 찼습니다.</p>}

        </div>
    )
}

export default Accommodate