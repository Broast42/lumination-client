import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const HomePage = props => {

    const history = useHistory();

    if (props.isLogged === false){
        history.push("/")
    }
    
    return (
        <div>
            Home 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.isLogged,
    }
}

export default connect(mapStateToProps, {})(HomePage);