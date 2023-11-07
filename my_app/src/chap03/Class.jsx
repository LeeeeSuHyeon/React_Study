import React from "react";

function Class(props){
    return(
        <div>
            <h1>{`과목 : ${props.name}.`}</h1>
            <h2>{`점수 : ${props.score}점 입니다.`}</h2>
        </div>
    )
}

export default Class;