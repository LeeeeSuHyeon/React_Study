// import React from "react";

// class Toggle extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {isToggleOn: true};

//         // callback에서 this를 사용하기 위해서는 바인딩이 필수 
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.setState(prevState =>({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }

//     render(){
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? '켜짐' : '꺼짐'}
//             </button>
//         );
//     }
// }

import React, {useState} from "react";

function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 방법 1 : 함수 안에 함수로 정의
    function handleClick(){
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // 방법 2 : arrow function을 사용하여 ㅈ엉의
    // const handleClick = ()=>{
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }
    
    return (
        <button onClick={handleClick}>
           {isToggleOn ? '켜짐' : '꺼짐'}
        </button>
    );
    
}

export default Toggle;

