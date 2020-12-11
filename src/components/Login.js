import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Dashboard from  './Dashboard'
import LoginStyle from './LoginStyle.css';
import LoginForm from  './LoginForm'



class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
          loggedIn: false
        }
      }
   
      handleClick=(e)=>{
        e.preventDefault()
        this.setState({
          loggedIn: true
        })
      }
     
      render(){
      return this.state.loggedIn ? <div>  <Dashboard /> </div> :(
       <div className="App">

          <LoginForm onClick={this.handleClick} />
       </div>
      );
      }
    }
export default Login