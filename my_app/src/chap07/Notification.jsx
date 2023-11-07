import React from "react";

const styles = {
    wrapper:{
        margin:8,
        padding:8,
        display:"flex",
        flexDirection: "row",
        border:"1px solid grey",
        borderRadius: 16
    },

    contentContainer:{
        marginLeft: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    messageText:{
        color:"black",
        fontSize:16,
    },
    imageContainer: {},

    image:{
        width: 70,
        height : 70,
        borderRadius: 35,       // 원형 모양 생성 
    },
};

class Notification extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() called`);
    }
    componentDidUpdate(){
        console.log(`${this.props.id} componentDidUpdate() called`);
    }
    componentWillUnmount(){
        console.log(`${this.props.id} componentWillUnmount() called`);
    }

    render(){
        return(
            <div style = {styles.wrapper}>

                <div style = {styles.imageContainer}>
                    <img alt = ""
                        src = {this.props.image}
                        style = {styles.image}
                    />
                </div>

                <div style={styles.contentContainer}>
                    <span style={styles.messageText}>
                        {this.props.message}
                    </span>
                </div>
            </div>
        );
    }
}

export default Notification;