import React, {useEffect, useState} from 'react';
import io from "socket.io-client";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HomeUserInfo from './page-components/HomeUserInfo';
import HomeOnlineUsers from './page-components/HomeOnlineUsers';
import GameCenter from './page-components/GameCenter';


const HomePage = props => {

    const [socket, setSocket] = useState(null)
    const history = useHistory()

    const token = localStorage.getItem("token")
    
    if(!token){
        history.push("/");
    }

    useEffect(() => {
        if(props.user.id !== -1){
          setSocket(io.connect(`http://localhost:8000?id=${props.user.id}`))  
        }
     
    },[props.user.id])
    
    return (
        <div>
            <div className="home-top-panel">
                <HomeUserInfo />
                <HomeOnlineUsers socket={socket}/>
            </div>
            <div>
                <GameCenter />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {})(HomePage);