import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button} from 'antd';
import { MailOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { login } from '../../store/actions/index';
import { useHistory } from 'react-router-dom';


const Login = (props) =>{

    let history = useHistory();
    
    const logon = values => {
        props.login(values, history);
        
    }

    const layout = {
        wrapperCol: {}
        
    }
    
    return(
        <div className="reg-form-container">
            <Form 
                name="login"
                onFinish={logon}
                className='login-form'
                {...layout}
            >
                
                <Form.Item 
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email address!',
                        },
                        {
                            type: 'email',
                            message: 'Must be a valid email address.'
                        }
                    ]}
                    
                    
                >
                    <Input prefix={<MailOutlined />} placeholder=" Email Address" />
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
                
                <Form.Item>
                    <Button htmlType="submit" className="submitBtn">
                        {props.isAuthorizing ? <LoadingOutlined /> : "Log In"}
                    </Button> 
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