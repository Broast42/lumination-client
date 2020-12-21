import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Alert } from 'antd';
import { connect } from 'react-redux';
import Login from '../common/Login' 


const LandingPage = props => {
    //console.log(props);
    return(
        <div>
            <div className="landing">
                <h1>Welcome to BitMen Battles</h1>
                <p>A multi-player JRPG style battler with a twist of TCG</p>
                <div className="sign-up">
                    {props.justRegistered ?
                        <Alert
                            message="Registration was successfull"
                            description="Please Sign in below to get started"
                            type="success"
                            showIcon
                        />
                    :
                        null
                    }

                    {props.error !== null  ?
                        <Alert
                            message="Something went wrong"
                            description={props.error.data.message}
                            type="error"
                            showIcon
                        />
                    :
                        null
                    }

                    <Login />
                    <p>Don't have an account?</p>
                    <Link to="/register">
                        <Button className="signup-btn">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </div>   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}


export default connect(mapStateToProps, {})(LandingPage);