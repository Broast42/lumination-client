import React from 'react'
import './App.css'
import io from "socket.io-client"


const socket = io.connect("http://localhost:8000")

function App() {
  return (
    <div className="App">
      test
    </div>
  )
}

export default App;
