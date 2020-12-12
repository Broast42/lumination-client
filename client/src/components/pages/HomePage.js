import React, {useEffect, useState} from 'react';
import io from "socket.io-client";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


const HomePage = props => {

    const [socket, setSocket] = useState(null)
    const history = useHistory()

    //FUTURE NOTE: tracking isAuthorised if false we will want to check local storage for token 
    //and if so get and update state as if we are logged in otherwise push to landing page.
    if(!props.isAuthorized){
        history.push("/");
    }

    useEffect(() => {
        setSocket(io.connect("http://localhost:8000"))
        
    },[])
    
    return (
        <div>
            this is home   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {})(HomePage);