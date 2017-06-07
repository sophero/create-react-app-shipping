import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <div className="App">

          <Home signup={this.signup}/>

      </div>
    );
  }
  signup(user) {
    axios.post("/users",{
      user:user
    })
  }

}

export default App;
