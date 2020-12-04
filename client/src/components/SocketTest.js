import React, { useState, useEffect } from 'react';
import io from "socket.io-client";


const SocketTest = () => {
    const [socket, setSocket] = useState(null)
    const [messages, setMessages] = useState([])
    const [textToSend, setTextToSend] = useState('')
    
    useEffect(() => {
        setSocket(io.connect("http://localhost:8000"))
    }, [])

    useEffect(() => {
        if(!socket) return
        
        socket.on('getMessage', (data) => {
        setMessages(oldArr => [...oldArr, data])
        })
    },[socket])

    const textHandle = e => {
        setTextToSend(e.target.value)
    }

    const sendMessage = (data) => {
        socket.emit('chat', data)
    }

    return(
        <div className="App">
            <div className="chat-box">
                <div className="message-window">
                    <div>
                        {
                            messages.map((x, i) => (
                            <div key={i}>
                                {x}
                            </div>
                            ))
                        }
                    </div>
                </div>
                <div className="input-window">
                    <div>
                        <button onClick={(e) => {e.preventDefault(); sendMessage(textToSend)}}>Submit</button>
                    </div>
                    <div>
                        <input type="text" onChange={(e) => {textHandle(e)}}/>
                    </div>

                </div>
            </div>
        </div>

    )
};

export default SocketTest;