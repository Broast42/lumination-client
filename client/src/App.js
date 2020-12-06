import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import SocketTest from './components/SocketTest';
import FrontPage from './components/pages/FrontPage';
import HomePage from './components/pages/HomePage';
import RegisterPage from './components/pages/RegisterPage';
import './styles/styles.scss'


function App() {

  

  return (
    <div>
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>  
    </div>
  )
}

export default App;
