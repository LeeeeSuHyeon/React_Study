import React,{useState} from "react";

function SignUp(props){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");
    const [age, setAge] = useState('20')

    const handleChangeName = (event)=>{
        setName(event.target.value);
    };

    const handleChangeGender = (event)=>{
        setGender(event.target.value);
    }
    const handleChangeAge = (event)=>{
        setAge(event.target.value);
    }

    const handleSubmit = (event)=>{
        alert(`이름 : ${name}
성별 : ${gender}
나이 : ${age}`);
        event.preventDefault();
    };

    return(
        <form onSubmit = {handleSubmit}>
            <label> 이름:
                <input type = "text" value = {name} onChange = {handleChangeName} />
            </label>
            <br />

            <label> 성별 :
                <select value ={gender} onChange = {handleChangeGender}>
                    <option value = "남자"> 남자 </option>
                    <option value = "여자"> 여자 </option>
                </select>
            </label>

            <br />

            <label> 나이 :
                <input type = "text" value = {age} onChange = {handleChangeAge} />
            </label>
            <button type ="submit">제출</button>
        </form>
    )
}

export default SignUp;