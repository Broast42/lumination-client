import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginPage from './LoginPage';


const FrontPage = props => {

    let history = useHistory();
    
    if(props.isLogged === true){
        history.push("/home");
    }
        
    return(
        <div>
            <LoginPage />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.isLogged,
    }
}


export default connect(mapStateToProps, {})(FrontPage);