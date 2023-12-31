// src/component/LoginControl.jsx

import React, {useState} from "react";
import styled from "styled-components"

// 로그인 컴포넌트 전체 div 
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

// 인삿말 컨테이너 스타일
const GreetingContainer = styled.div`
    display: flex;
    align-items: center;
`;

// 아이디, 비밀번호 폼 스타일
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 내부 요소들을 수직 가운데 정렬 */
  margin-right: 10px; 
`;

// 여유 공간을 주기 위한 마진 추가 
const GreetingText = styled.h1`
    margin-right: 10px; 
`;

// 로그아웃 버튼 스타일 설정 
const LogButton = styled.button`
    background-color: #0A82FF	; 
    color: #FFF;
    padding: 5px 10px;
    border: 1px;
    border-radius : 8px;
    cursor: pointer;
    height : 50px;
`;

// 로그인 회원 배열 
const users = [
    { id: "이수현", pw: "123" },
    { id: "홍길동", pw: "1212" },
];


// 사용자 로그인 상태에 따라 적절한 컴포넌트 반환 
function Greeting(props){

    // 로그인 상태 관리 
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return (
            // 로그인 한 경우 
            <GreetingContainer>
                <GreetingText>{props.name}님의 장바구니입니다!</GreetingText>
                <LogButton onClick={props.onLogout}>로그아웃</LogButton>
            </GreetingContainer>
        )
    }
    // 로그인 하지 않은 경우
    return <GreetingText>로그인 해주세요</GreetingText>;
}

// 로그인 버튼
function LoginButton(props){
    return(
        <LogButton onClick={props.onClick}>로그인</LogButton>
    )
}


// 사용자의 로그인 상태 관리 및 로그인 내역 저장 
function LoginControl(props){
    // 로그인 상태 관리 
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    // 로그인 아이디를 name으로 저장
    const [name, setName] = useState('');

    // 입력 폼 상태 관리 
    const [form, setForm] = useState({
        id: '',
        pw: '',
    });


    // 입력 폼 변화 감지 후 form 상태 업데이트 
    const onChange = (e) =>{
        setTimeout(()=> console.log(e), 500);
        const nextForm = {
            ...form,    // object, array를 사용할 때 자바스크립트 문법 
            [e.target.name]: e.target.value,
        };
        setForm(nextForm)
    };

    // 로그인 버튼 클릭했을 때 호출하며, 사용자 로그인 상태 변경
    // onLoginStatusChange()는 App.js에서 로그인 상태를 변경하기 위해 로그인 상태가 변경될 때 호출되는 콜백함수
    const handleLoginClick = ()=>{
        const user = users.find((user) => user.id === form.id && user.pw === form.pw);
        if(user){
            setIsLoggedIn(true)
            props.onLoginStatusChange(true)   // 콜백함수
            setName(form.id)
            setForm({
                id:'',
                pw:''
            });
        }
        else{
            alert("로그인 정보가 일치하지 않습니다.")
        }
    }

    // 로그아웃 버튼 클릭 시 호출하고 form을 초기화 및 LoginHistory 초기화
    const handleLogoutClick = ()=>{
        setIsLoggedIn(false)
        props.onLoginStatusChange(false)
        setForm({
            id:'',
            pw:''
        });
    }

    return (
        <Wrapper>
            <div>
                <Greeting isLoggedIn = {isLoggedIn} name = {name} onLogout={handleLogoutClick}/>

                {!isLoggedIn &&(
                    <GreetingContainer>
                        <InputContainer>
                            <input type="text" name="id" value ={form.id} placeholder="ID" onChange={onChange} />
                            <input type="text" name="pw" value = {form.pw} placeholder="Password" onChange={onChange} />
                        </InputContainer>

                        <LoginButton onClick = {handleLoginClick} />

                    </GreetingContainer>                 
                )}
            </div>        
        </Wrapper>

    )
}

export default LoginControl;