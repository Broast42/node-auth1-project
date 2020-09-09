import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Register from './components/Register';
//import Users from './components/Users'

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={props => <Login {...props} />} />
      <Route path="/register" render={props => <Register {...props} />} />
      {/* <Route path="/users" render={props => <Users {...props} />} /> */}
    </div>
  );
}

export default App;
