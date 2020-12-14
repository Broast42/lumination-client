import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Form, Input } from 'antd';
import { MailOutlined, LockOutlined, LoadingOutlined, CheckCircleOutlined } from '@ant-design/icons';

const RegisterPage = props => {

    const[allUsers, setAllUsers] = useState([]);
    const[allEmails, setAllEmails] = useState([]);

    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');

    const[emailExists, setEmailExists] = useState(false)
    const[usernameExists, setUsernameExists] = useState(false)

    const[emailStatus, setEmailStatus] = useState(null)

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/users/allusernames`)
            .then(res => {
                setAllUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        axios
            .get(`${process.env.REACT_APP_API}/users/allemails`)
            .then(res => {
                setAllEmails(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const checkEmail = () => {
        for(let i = 0; i < allEmails.length; i++){
            if(email === allEmails[i].email || email.includes('admin')){
                setEmailExists(true)
                setEmailStatus("error")
                return
            }else if(email === ''){
                setEmailStatus("warning")
                return
            }else if(!email.includes("@") || !email.includes(".com")){
                setEmailStatus("error")
                return
            }
            setEmailStatus("success")
            
        }
    }
    
    console.log(allEmails)

    return(
        <div className="reg-page">
            <div className="register">
                <p className="title">Sign up! It's free.</p>
                <Form
                    name="register" 
                    className="reg-form"
                >
                    
                    <Form.Item
                        name='email'
                        hasFeedback
                        validateStatus={emailStatus}
                        help={emailExists ? `${email} already exists.` : null}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email address!',
                            },
                            {
                                type: 'email',
                                message: 'Must be a valid email address.',
                    
                            }
                        ]}
                        
                    >
                        <Input 
                            prefix={<MailOutlined />} 
                            placeholder=" Email Address" 
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => checkEmail()}
                            onFocus={() => {setEmailStatus("validating"); setEmailExists(false);}}
                            //suffix={emailStatus ? <CheckCircleOutlined style={{background: "green"}}/> : null}
                            
                        />
                    </Form.Item>
                    

                    <Form.Item
                        name='password'
                    >
                        <Input.Password prefix={<LockOutlined/>} placeholder=" Password"/>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage;