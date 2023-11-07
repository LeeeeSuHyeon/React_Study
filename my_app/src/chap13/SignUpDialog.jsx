import React, {useState} from "react";
import FancyBorder from "./FancyBorder"

function Dialog(props){
    return (
        <FancyBorder color ="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className = "Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}

function SignUpDialog(props){
    const [nickname, setNickname] = useState("");
    const handleChange = (event) =>{
        setNickname(event.target.value);
    }
    const handleSignUp = () =>{
        alert(`어서 오세요, ${nickname}님!`)
    }

    return(
        <Dialog title = "화성탐사프로그램" message = "우리 사이트에 방문하신 것을 환영합니다.">
            <label> 이름 :
                <input value = {nickname} onChange = {handleChange} />
                <button onClick={handleSignUp}>가입하기</button>
            </label>
        </Dialog>
    )
}

export default SignUpDialog;