import {useState} from 'react'
import React from 'react'
const EventPractice = () =>{
    const [form, setForm] = useState({
        username: '',
        message: '',
    });

    const {username, message} = form;
    const onChange = (e) =>{
        setTimeout(()=> console.log(e), 500);
        const nextForm = {
            ...form,    // object, array를 사용할 떄 자바스크립트 문법 
            [e.target.name]: e.target.value,
        };
        setForm(nextForm)
    };

    const onClick = ()=>{
        alert(username+ ':' + message);
        console.log(form)
        setForm({
            username:'',
            message:''
        });
    };

    const onKeyPress = (e)=>{
        if(e.key === 'Enter'){
            onClick();
        }
    }
    
    return(
        <div>
            <h1>이벤트 연습</h1>
            <input
                type = "text"
                name = "username"
                placeholder='유저명'
                value={username}
                onChange={onChange}
            />
            <input
                type = "text"
                name = "message"
                placeholder='아무거나 입력'
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick = {onClick}>확인</button>
        </div>
    )
}
export default EventPractice;