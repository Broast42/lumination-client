import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import SocketTest from './components/SocketTest';
import Header from "./components/common/Header";
import LandingPage from './components/pages/LandingPage';
import HomePage from './components/pages/HomePage';
import RegisterPage from './components/pages/RegisterPage';
import './styles/styles.scss'


function App() {

  

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>  
    </div>
  )
}

export default App;
