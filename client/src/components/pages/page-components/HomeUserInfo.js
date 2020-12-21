import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { getUserInfo } from '../../../store/actions';
import { Spin, Progress, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons'

const HomeUserInfo = props => {
    
    const usersId = localStorage.getItem("userId")

    const { userInfoExists, getUserInfo, user} = props;

    const [percentage, setPercentage] = useState(0);
    const [expTnl, setExpTnl] = useState(0);


    useEffect(() => {
        if (!userInfoExists){
            getUserInfo(usersId)
        }
        
    },[userInfoExists, getUserInfo, usersId,])

    
    useEffect(() => {
        setPercentage( (user.exp/user.tnl) * 100)
        setExpTnl( user.tnl - user.exp )
    },[user])
    
    console.log(props)

    return (
        <div className="home-user-info">
            {props.isFetchingInfo ? 
                <div className="user-info-window center">
                    <Spin size="large" />
                </div>
            :
                <div className="user-info-window">
                    {/* <p>Hello <span className="user-name">{user.username}</span></p> */}
                    <div className="level-info">
                        <div>
                            <Avatar size={120} icon={<UserOutlined />} />
                            <div className='user-name'>
                                {user.username}
                            </div>
                        </div>
                        <div className="progress-window">
                            <Progress 
                                type="circle" 
                                percent={percentage} 
                                format={() => user.level} 
                                className="progress"
                                strokeWidth="8"
                                strokeColor={{
                                    "0%": '#aa00ff',
                                    "100%": '#ff00d9'
                                }}
                                trailColor="#4da8da"
                                 
                            />
                            <div className="level-stats">
                                <div>
                                    {`${user.exp}/${user.tnl}`}
                                </div>
                                <div>
                                    {`TNL: ${expTnl} Exp.`}
                                </div>
                            </div>

                        </div>
                        <div className="user-stats">
                            <div className="wins">
                                <p>Wins</p>
                                <p>{user.wins}</p>
                            </div>
                            <div className="losses">
                                <p>Losses</p>
                                <p>{user.losses}</p>
                            </div>
                            <div className="draws">
                                <p>Draws</p>
                                <p>{user.draws}</p>
                            </div>
                            <div className="wlp">
                                <p>Win%</p>
                                <p>{user.wlp}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        ...state
    }
}

export default connect(mapStateToProps, {getUserInfo})(HomeUserInfo)