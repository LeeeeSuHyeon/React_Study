import React from "react";
import Class from "./Class";

function Grade(props){
    return(
        <div>
            <Class name = "심화 프로그래밍" score = {100}></Class>
            <Class name = "고급 웹프로그래밍" score = {90}></Class>
            <Class name = "웹DB 프로그래밍" score = {95}></Class>
        </div>
    )
}

export default Grade;