import React, { Component } from 'react';
import Signup from './Signup'


class Home extends Component{
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <Signup createUser={this.props.signup}/>
      </div>
  )
  }


}





export default Home;
