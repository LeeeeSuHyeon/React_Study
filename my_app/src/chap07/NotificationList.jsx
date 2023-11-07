import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id : 1,
        image : "https://images.pexels.com/photos/12809204/pexels-photo-12809204.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        message:"안녕하세요, 오늘 일정 알려드립니다.",
    },
    {
        id : 2,
        image : "https://images.pexels.com/photos/5721056/pexels-photo-5721056.jpeg?auto=compress&cs=tinysrgb&w=800",
        message : "점심식사 시간입니다."
    },
    {
        id : 3,
        image : "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=800",
        message : "이제 곧 미팅이 시작됩니다."
    },
    {
        id : 4,
        image : "https://images.pexels.com/photos/5558238/pexels-photo-5558238.jpeg?auto=compress&cs=tinysrgb&w=800",
        message : "회의 시작 1시간 전입니다."
    },
    {
        id : 5,
        image : "https://images.pexels.com/photos/6989960/pexels-photo-6989960.jpeg?auto=compress&cs=tinysrgb&w=800",
        message : "금일 점심 메뉴는 김치볶음밥입니다."
    }
];

var timer ;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            notifications: [],
        };
    }

    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(()=>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            }
            else{
                this.setState({
                    notifications:[]
                })
                clearInterval(timer);
            }
            
        }, 1000);
    } // end of componentDidMount

    render(){
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification 
                        // key값이 있어야 함 
                        // 원래 id 값으로 넣어도 됬는데 요새는 키 값으로 설정해줘야 함 
                        // 각 message마다 유니크한 값을 쥑 위해 id 값을 랜더링? 
                        // id = {notification.id}
                        key = {notification.id}
                        id =  {notification.id}
                        image = {notification.image}
                        message = {notification.message} />;
                })}
            </div>
        )
    }

}
export default NotificationList;
