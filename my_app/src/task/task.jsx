import React, {useState} from "react";

// 사용자가 로그인한 경우 표시하는 컴포넌트
function UserGreeting(props){
    return <h1>다시 오셨군요!</h1>
}

// 사용자가 로그인한 경우 표시하는 컴포넌트
function GuestGreeting(props){
    return <h1>회원가입을 해주세요</h1>
}

// 사용자 로그인 상태에 따라 적절한 컴포넌트 반환 
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

// 로그인 버튼
function LoginButton(props){
    return(
        <button onClick={props.onClick}>로그인</button>
    )
}

// 로그아웃 버튼 
function LogoutButton(props){
    return(
        <button onClick={props.onClick}>로그아웃</button>
    )
}

// 사용자의 로그인 상태 관리 및 로그인 내역 저장 
function LoginControl(props){
    // 로그인 상태 관리 
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // 입력 폼 상태 관리 
    const [form, setForm] = useState({
        id: '',
        pw: '',
    });

    // 로그인 내역 관리 
    const [loginHistory, setLoginHistory] = useState([]);

    // 입력 폼 변화 감지 후 form 상태 업데이트 
    const onChange = (e) =>{
        setTimeout(()=> console.log(e), 500);
        const nextForm = {
            ...form,    // object, array를 사용할 떄 자바스크립트 문법 
            [e.target.name]: e.target.value,
        };
        setForm(nextForm)
    };

    // 로그인 버튼 클릭했을 때 호출하며, 사용자 로그인 상태 변경 및 로그인 내역을 loginHistory에 추가
    const handleLoginClick = ()=>{
        setIsLoggedIn(true)
        const newHistory = [...loginHistory, form]
        setLoginHistory(newHistory)
        setForm({
            id:'',
            pw:''
        });
    }

    // 로그아웃 버튼 클릭 시 호출하고 form을 초기화 및 LoginHistory 초기화
    const handleLogoutClick = ()=>{
        setIsLoggedIn(false)

        setForm({
            id:'',
            pw:''
        });
        setLoginHistory([]);
    }

    // 로그인 내역 표시, map 함수를 이용하여 각 로그인 내역 표시 
    const table = ()=>{
        return(
            
            <div>
                <h1> 로그인 내역 </h1>
                {loginHistory.map((entry, index)=>(
                    <p key ={index}> ID : {entry.id}, PW : {entry.pw} </p>
                ))}

            </div>
        )
    }

    return (
        <div>
            <Greeting isLoggedIn = {isLoggedIn} />

            <input type="text" name="id" value ={form.id} placeholder="ID" onChange={onChange} />
            <input type="text" name="pw" value = {form.pw} placeholder="Password" onChange={onChange} />

            <LoginButton onClick = {handleLoginClick} />
            <LogoutButton onClick = {handleLogoutClick} /> 

            {isLoggedIn && (
                table()   
            )}    
        </div>
    )
}

export default LoginControl;