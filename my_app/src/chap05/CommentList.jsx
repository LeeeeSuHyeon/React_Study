import React from "react";
import Comment from "./Comment";


const comments = [
    {
        image : "https://search.pstatic.net/common?type=a&size=174x108&quality=75&direct=true&ttype=input&src=https%3A%2F%2Fimgauto-phinf.pstatic.net%2F20230816_134%2Fauto_1692151672362DXcbW_PNG%2F20230816110741_XNYA5LeS.png",
        name : "산타페",
        comment : "안녕하세요 산타페입니다."
    },
    {
        image : "https://search.pstatic.net/common?type=a&size=174x108&quality=75&direct=true&ttype=input&src=https%3A%2F%2Fimgauto-phinf.pstatic.net%2F20230602_216%2Fauto_1685666723489p8ujw_PNG%2F20230602094514_psRN6zWT.png",
        name : "펠리세이드",
        comment : "안녕하세요 펠리세이드입니다."
    },
    {
        image : "https://search.pstatic.net/common?quality=75&direct=true&ttype=input&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F5662_000_8%2F20220823141122385_MNSP400WT.png%2F20220823140142_m.png%3Ftype%3Dm1500",
        name : "k5",
        comment : "안녕하세요 k5 입니다."
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment) =>{
                return(
                    <Comment image = {comment.image} name = {comment.name} comment = {comment.comment} /> 
                )
            })}
        </div>
    )
}


// function CommentList(props){
//     return(
//         <div>
//             <Comment name ={"제니"} comment = {"안녕하세요 블랙핑크 입니다."}/>
//             <Comment name ={"로제"} comment = {"리액트 재밌어요."}/>
//         </div>
//     );
// }

export default CommentList;