import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'
//import cars from '../cars.json' // remove this
import './Home.css';
const Home = (props) => {
    return (
        <div className="card-container">
            {/* Change cars to props.cars and remove the cars.json import above */}
            {/*props.cars.map((car, idx) => (
            ))*/}    
            <img src="https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="App-logo" alt="logo"/>            
        </div>
       
    )
}

export default Home