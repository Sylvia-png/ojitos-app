import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Dashboard.css';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: "20px",
    }
  }));

 const Dashboard = () =>{
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <div className="image">
          <img src="https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="App-logo" alt="logo"/>
          </div>
      </div>
    )
  }


export default Dashboard