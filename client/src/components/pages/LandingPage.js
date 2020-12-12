import React from 'react';
import { connect } from 'react-redux';

const LandingPage = props => {
    console.log(props);
    return(
        <div>
            test
           
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}


export default connect(mapStateToProps, {})(LandingPage);