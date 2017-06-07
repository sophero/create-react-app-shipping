import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Profile from './Profile';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
            errorMsg: ""
        }
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
        this.createHome = this.createHome.bind(this);
        this.createProfile = this.createProfile.bind(this);
    }

    render() {
        return (
          <div className="App">
              <div className="error-msg">{this.state.errorMsg}</div>
              <BrowserRouter>
                  <div>
                      <Route exact path="/" component={this.createHome} />
                      <Route path="/profile" component={this.createProfile} />
                  </div>
              </BrowserRouter>
          </div>
        );
    }

    createHome() {
        return <Home signup={this.signup} login={this.login} user={this.state.currentUser}/>
    }

    createProfile() {
        return <Profile user={this.state.currentUser} />
    }

    signup(user) {
        axios.post("/users",{
          user:user
      });
    }

    login(user) {
        axios.get("/users").then(function(response) {
            console.log(response);
            let users = response.data;
            for (let k = 0; k < users.length; k++) {
                if (users[k].username === user.username) {
                    if (users[k].password === user.password) {
                        this.setState({
                            currentUser: {
                                username: users[k].username,
                                id: users[k].id
                            }
                        });

                    } else {
                        this.setState({
                            errorMsg: "Incorrect password"
                        });
                    }

                } else {
                    this.setState({
                        errorMsg: "No user found with that username."
                    });
                }
            }
            console.log(this.state);

        }.bind(this));
    }

}

export default App;
