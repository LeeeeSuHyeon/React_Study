import React from "react";

function Comment(props){
    return(
        <div style = {styles.wrapper}>
            <div style = {styles.imageContainer}>
                <img alt = ""
                    src = {props.image}
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                {/* <span style={styles.nameText}>이수현</span>  
                <span style={styles.commentText}>제가 만든 첫 컴포넌트입니다.</span> */}

                {/* 동적으로 사용하기 위해 바꿔줌 CommentList에서 속성값을 넣어줘야 함  */}
                <span style={styles.nameText}>{props.name}</span>  
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",       // 15장에서 자세히 배움 
        border : "4px solid black",
        borderRadius : 16,
        backgroundColor : "yellow",
    },

    imageContainer: {},

    image:{
        width: 100,
        height : 100,
        borderRadius: 25,       // 원형 모양 생성 
    },

    contentContainer:{
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },

    commentText: {
        color: "black",
        fontSize: 16,
    },
};


export default Comment;