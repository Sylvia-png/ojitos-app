import React from 'react';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import "./Login.css";

function Login(props) {
    return (
      <div>
        <div className="formContainer">
          <form onSubmit={event => props.onLogin(event)}>
            <Input fullWidth placeholder="Username"></Input>
            <br/>
            <Input type="password" fullWidth placeholder="Password"></Input>
            <br/>
            <Button   type="submit" fullWidth style={{marginTop: '15px'}}  variant="contained">
              Login
            </Button>
          </form>      
        </div>
        <div className="image">
          <img src="https://images.unsplash.com/photo-1552833287-c19070e00073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="logo"/>
          <p className="parrafo">“Tell me and I forget, teach me and I may remember, involve me and I learn.”</p>
        </div>
      </div>
    )
}

export default Login;
