import React, {useEffect, useState} from 'react';
import io from "socket.io-client";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HomeUserInfo from './page-components/HomeUserInfo'


const HomePage = props => {

    const [socket, setSocket] = useState(null)
    const history = useHistory()

    const token = localStorage.getItem("token")
    
    if(!token){
        history.push("/");
    }

    useEffect(() => {
        setSocket(io.connect("http://localhost:8000"))
        
    },[])
    
    return (
        <div>
            <HomeUserInfo />   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {})(HomePage);