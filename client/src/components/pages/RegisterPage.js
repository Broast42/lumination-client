import React from 'react';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';
import Register from '../common/Register';

const RegisterPage = props => {

    return(
        <div >
            {props.isRegistering ? 
                <div className="reg-spin">
                    <Spin size="large" />
                </div>
            :
                <Register />
            }
            
            {props.error ? 
                <Alert 
                    message="Something went wrong please try again" 
                    type="error" 
                    className="reg-error"
                    showIcon 
                /> 
            : 
                null
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isRegistering: state.isRegistering,
        error: state.error,
    }
}

export default connect(mapStateToProps)(RegisterPage);