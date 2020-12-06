import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Button, Alert } from 'antd';
import { MailOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { login } from '../../store/actions/index';
import { useHistory, Link } from 'react-router-dom';


const Login = (props) =>{

    let history = useHistory();

    const logon = values => {
        props.login(values, history);
        console.log(props);
        
    }

    return(
        <div className="login-form">
            <Form 
                name='login'
                onFinish={logon}
            
            >
                <p>Welcome to Lumination</p>
                <Form.Item
                    name='email'
                    rules={[
                        {
                          required: true,
                          message: 'Please input your email address!',
                        },
                    ]}
                >
                    <Input prefix={<MailOutlined />} placeholder=" Email Address"/>
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                >
                    <Input.Password prefix={<LockOutlined />}placeholder=" Password"/>
                </Form.Item>

                
                {props.error !== null ?
                    <Form.Item>
                        <Alert message={props.error.data.message} type="error" showIcon /> 
                    </Form.Item> 
                    
                : null}

                <Form.Item >
                    <Button type="primary" htmlType="submit" className="submitBtn">
                        {props.isAuthorizing ? <LoadingOutlined /> : "Log in"}
                    </Button>
                </Form.Item>

                <p>Dont have an account?</p>

                <Form.Item>
                    <Link to="/register">
                        <Button className="submitBtn">
                            Sign Up!
                        </Button>
                    </Link>
                    
                </Form.Item>


            </Form>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, { login })(Login);