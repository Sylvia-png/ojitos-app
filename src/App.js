import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


class App extends React.Component {
  state = {
    loggedIn: false,
  }

  onLogin = props => {
    props.preventDefault();
    this.setState({
      loggedIn: true,
     });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.loggedIn ? (
          <Login onLogin={this.onLogin} />        
        ):(
          <Dashboard />
        )}
      </div>
    );
  }
}

export default App;

