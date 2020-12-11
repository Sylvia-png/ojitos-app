import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import About from './components/About'
//import Car from './containers/Car'
import LoginForm from './components/LoginForm'
import Login from './components/Login'
import Signup from './components/Signup'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/signup" component={Signup} />
        </Switch>
    );
};

export default Router;