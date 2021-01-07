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
                    <div className="level-info">
                        <div>
                            <Avatar size={120} icon={<UserOutlined />} />
                            <div className='user-name'>
                                {user.username}
                            </div>
                        </div>
                        <div className="progress-window">
                            <div>
                                <div>
                                    <Progress
                                        type="circle"
                                        width={65}
                                        trailColor="#4da8da"
                                        strokeWidth="8"
                                        strokeColor={{
                                            "0%": '#fcb900',
                                            "100%": '#ff00d9'
                                        }}
                                        className="rankprog"
                                        format={() => user.rank}
                                        percent={user.level}
                                    />
                                </div>
                                
                                <div className="level-meter">
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
                                        width={100}
                                    />
                                </div>
                            </div>

                        </div>
                            
                        <div className="lvl-info">
                            <div>
                                <p>{100 - user.level}</p>
                                <p className="lvl-info-text">Levels till next rank</p>
                            </div>
                            <div>
                                <p>{`${user.exp}/${user.tnl}`}</p>
                                <p className="lvl-info-text">Experience points</p>
                            </div>
                            <div>
                                <p>{expTnl}</p>
                                <p className="lvl-info-text">Experience till next level</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="user-stats">
                        <div className="wins">
                            <p>Wins: {user.wins}</p>
                        </div>
                        <div className="losses">
                            <p>Losses: {user.losses}</p>
                        </div>
                        <div className="draws">
                            <p>Draws: {user.draws}</p>
                        </div>
                        <div className="wlp">
                            <p>Win Percentage: {user.wlp}%</p>
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