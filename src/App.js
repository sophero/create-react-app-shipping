import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import UserInterface from './UserInterface';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
            errorMsg: ""
        }
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.createHome = this.createHome.bind(this);
        this.createUserInterface = this.createUserInterface.bind(this);
    }

    render() {
        return (
          <div className="App">
              <div className="error-msg">{this.state.errorMsg}</div>
              <BrowserRouter>
                  <div>
                      <Route exact path="/" component={this.createHome} />
                      <Route path="/user_interface" component={this.createUserInterface} />
                  </div>
              </BrowserRouter>
          </div>
        );
    }

    createHome() {
        return <Home signup={this.signup} login={this.login} user={this.state.currentUser}/>
    }

    createUserInterface() {
        return <UserInterface user={this.state.currentUser} logout={this.logout}/>
    }

    signup(user) {
        axios.post("/users",{
          user:user
      }).then(function(response) {
          this.setState({
              currentUser: {
                  username: response.data.username,
                  id: response.data.id
              }
          });
      }.bind(this));
    }

    login(user) {
        axios.get("/users").then(function(response) {
            console.log(response);
            let users = response.data;
            let foundUser = false;
            for (let k = 0; k < users.length; k++) {
                if (users[k].username === user.username) {
                    foundUser = true;
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

                }
            }
            if (!foundUser) {
                this.setState({
                    errorMsg: "No user found with that username."
                });
            }
            console.log(this.state);
        }.bind(this));
    }

    logout() {
        this.setState({currentUser: null});
    }

}

export default App;
