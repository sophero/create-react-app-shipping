import React, { Component } from 'react';
import Signup from './Signup'
import Login from './Login'

class Home extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Signup createUser={this.props.signup} user={this.props.user}/>
        <Login login={this.props.login} user={this.props.user}/>
      </div>
  );
  }


}





export default Home;
