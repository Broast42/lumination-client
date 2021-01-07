import React from 'react';
import { Progress } from 'antd';


const HOUserCards = props => {

    const {user} = props;
    
    //console.log(user);

    return (
        <div className="users-list-card uc-bg">
            <div>
                <p>{user.username}</p>
            </div>
            <div>
                <Progress
                    type="circle"
                    width={25}
                    trailColor="#4da8da"
                    strokeWidth="8"
                    strokeColor={{
                        "0%": '#fcb900',
                        "100%": '#ff00d9'
                    }}
                    className="small-rank"
                    format={() => user.rank}
                    percent={user.level}

                />
            </div>
            <div> 
                <Progress
                    type="circle"
                    width={30}
                    trailColor="#4da8da"
                    strokeWidth="8"
                    strokeColor={{
                        "0%": '#aa00ff',
                        "100%": '#ff00d9'
                    }}
                    className="small-rank"
                    format={() => user.level}
                    percent={user.level}

                />
            </div>
            <div>
                <p>
                    <span className="wins">{user.wins}</span>
                    /
                    <span className="losses">{user.losses}</span>
                    /
                    <span className="draws">{user.draws}</span>  
                    {"  "}
                    <span className="wlp">{user.wlp}%</span>
                </p>
            </div>
        </div>
    )
}

export default HOUserCards;