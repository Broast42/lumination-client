import React, {useEffect, useState} from 'react';
import io from "socket.io-client";
import { connect } from 'react-redux';


const HomePage = props => {

    const [socket, setSocket] = useState(null)
    
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