import React from 'react';
import { connect } from 'react-redux';

const FrontPage = props => {
    
    return(
        <div>
            test
            {/* <LoginPage /> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}


export default connect(mapStateToProps, {})(FrontPage);