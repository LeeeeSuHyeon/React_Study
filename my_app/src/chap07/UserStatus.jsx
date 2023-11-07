import React, {useState, useEffect} from "react";

function UserStatus(props){
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }

    useEffect(()=>{
        ServerAPI.subscribeUseStatus(props.user.id, handleStatusChange);
        return (() =>{
            ServerAPI.unscribe
        })
    })
}