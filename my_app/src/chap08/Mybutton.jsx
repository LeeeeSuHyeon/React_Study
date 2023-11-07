import React from "react";

// function Mybutton(props){
//     const handleDelete = (id, event) =>{
//         console.log(id, event.target);
//     };

//     return(
//         <button onClick={(event) => handleDelete( 1, event)}>
//             삭제하기
//         </button>
//     )
// }

class Mybutton extends React.Component{
    handleClick = () =>{
        console.log('this is', this);
    }

    render(){
        return (
            <button onClick={()=>this.handleClick()}>
                클릭
            </button>
        )
    }
}

export default Mybutton;