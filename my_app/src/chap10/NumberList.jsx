import React from "react";

function NumberList(props){
    const {numbers} = props;

    // const listItems = numbers.map((number)=>
        // <li key = {number.toString()}>
        //  <li key = {number.id}>  // 여전히 키 값 오류 
      const listItems = numbers.map((number, index)=> 
        <li key = {index}> 
            {number}
        </li>
    );

    return(
        <ul>{listItems}</ul>
    );
}

export default NumberList;