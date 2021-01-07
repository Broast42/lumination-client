import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import HOUserCards from './HOUserCards';

const HomeOnlineUsers = props => {

    const { socket } = props;
    const [onlineList, setOnlineList] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0)
    const [combinedRank, setCombinedRank] = useState(0)
    const [averageLevel, setAverageLevel] = useState(0)

    useEffect(() => {
        if(!socket) return

        socket.on("onlineUsersList", (data) => {
            setOnlineList(data)
        })

        setTotalUsers(onlineList.length);

        let rankTotal = 0;
        let levelTotal = 0;
        for(let i = 0; i < onlineList.length; i++){
            rankTotal += onlineList[i].rank;
            levelTotal += Number(onlineList[i].level)
        }
        setCombinedRank(rankTotal);

        if(onlineList.length !== 0){
            levelTotal = levelTotal/onlineList.length
        }
        setAverageLevel(levelTotal);
        

    },[socket, onlineList])

    //console.log(onlineList)

    return(
        <div className="online-users">
            
            <div className="online-users-window">
                
                <div className="online-users-header">
                    {totalUsers} {totalUsers !== 1 ? "users" : 'user'} online.
                    With a combined rank of {combinedRank} {" "}
                    and an average level of {averageLevel}
                </div>
                
                <div className="list-window">
                    {onlineList.map((user, index) => (
                        <HOUserCards key={index} user={user} />
                    ))} 
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

export default connect(mapStateToProps, {})(HomeOnlineUsers)