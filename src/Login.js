import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.updateUsername=this.updateUsername.bind(this);
        this.updatePassword=this.updatePassword.bind(this);
        this.initiateLogin=this.initiateLogin.bind(this);
    }

    render() {
        if (this.props.user) {
            return(
                <Redirect to="/profile" />
            )
        }
        return(
            <div>
                <input type="text" value={this.state.username} onChange={this.updateUsername} placeholder="Username" />
                <input type="password" value={this.state.password} onChange={this.updatePassword} placeholder="Password" />
                <button onClick={this.initiateLogin}>Login</button>
            </div>
        );
    }

    updateUsername(event) {
        this.setState({username: event.target.value});
    }

    updatePassword(event) {
        this.setState({password: event.target.value});
    }

    initiateLogin() {
        this.props.login(this.state);
    }

}

export default Login;
