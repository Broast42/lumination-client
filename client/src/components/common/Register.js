import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Select, DatePicker, Radio, Button } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined, GlobalOutlined } from '@ant-design/icons';
import { countryList } from '../../data';
import { register } from '../../store/actions';

const Register = props => {

    const [allUsers, setAllUsers] = useState([]);
    const [allEmails, setAllEmails] = useState([]);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const [emailExists, setEmailExists] = useState(false);
    const [usernameExists, setUsernameExists] = useState(false);

    const [emailStatus, setEmailStatus] = useState(null);
    const [usernameStatus, setUsernameStatus] = useState(null);

    const [dob, setDob] = useState(null);

    let history = useHistory()

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
            }else if(/\S+@\S+\.\S+/.test(email) === false){
                
                setEmailStatus("error")
                return
            }
            setEmailStatus("success")
            
        }
    }

    const checkUsername = () => {
        for(let i = 0; i < allUsers.length; i++){
            if(username === allUsers[i].username || username.includes('admin') || username.includes('Admin') ){
                setUsernameExists(true)
                setUsernameStatus("error")
                return
            }else if(username === ''){
                setUsernameStatus("warning")
                return
            }
            setUsernameStatus("success")
        }
    }
    
    const submitForm = (fieldValues) => {
        const values = {
            ...fieldValues,
            dob: dob
        }
        
        delete values.confirm;
        
        props.register(values, history)
    }
    //console.log(allUsers)

    return(
        <div className="reg-page">
            <div className="register">
                <p className="title">Sign up! It's free.</p>
                <Form
                    name="register" 
                    className="reg-form"
                    onFinish={submitForm}
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
                            
                        />
                    </Form.Item>
                    

                    <Form.Item
                        name='password'
                        rules={[
                            {
                              required: true,
                              message: 'Please input your password!',
                            },
                          ]}
                          hasFeedback
                    >
                        <Input.Password prefix={<LockOutlined/>} placeholder=" Password"/>
                    </Form.Item>

                    <Form.Item
                        name='confirm'
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value){
                                    if(!value || getFieldValue('password') === value){
                                        return Promise.resolve();
                                    }

                                    return Promise.reject('Passwords do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined/>} placeholder=" Confirm Password"/>
                    </Form.Item>

                    <Form.Item
                        name='username'
                        hasFeedback
                        validateStatus={usernameStatus}
                        help={usernameExists ? `${username} already exists.` : null}
                        rules={[
                            {
                                required: true,
                                message: 'Please input a Username!',
                            },        
                        ]}
                    >
                        <Input 
                            prefix={<UserOutlined />} 
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            onBlur={() => checkUsername()}
                            onFocus={() => {setUsernameStatus("validating"); setUsernameExists(false);}}
                        />
                    </Form.Item>

                    <Form.Item
                        name='country'
                    >
                        <Select 
                            suffixIcon={<GlobalOutlined/>}
                            placeholder={`Select Country of Origin`}
                            
                        >
                            {countryList.map((country, index) => (
                                <Select.Option key={index} value={country}>
                                    {country}
                                </Select.Option>
                            ))}

                        </Select>

                    </Form.Item>

                    <Form.Item
                        name="dob"
                        rules={[
                            {
                                type: 'object'
                            }
                        ]}   
                    >

                        <div className="dob-flex">
                            <p>Date of Birth:</p>
                            <DatePicker onChange={(e) => setDob(e.format()) }/>
                        </div>
                        
                    </Form.Item>

                    <Form.Item
                        name="gender"
                    >
                        <Radio.Group className="radio-container">
                            <Radio value="male" className="radio">Male</Radio>
                            <Radio value="female" className="radio">Female</Radio>
                            <Radio value="other" className="radio">Other</Radio>
                        </Radio.Group>

                    </Form.Item>

                    <Form.Item>
                            <Button htmlType="submit" className="reg-btn">Submit</Button>
                    </Form.Item>


                </Form>
            </div>
        </div>
    )

    
}

const mapStateToProps = (state) => {
    return{
        ...state,
    }
}

export default connect(mapStateToProps, {register})(Register);