import React, { Component } from 'react';



class Signup extends Component{
  constructor(props) {
    super(props)
    this.state={
      user:{
        username:"",
        password:""
      }
    }
    this.updateUsername=this.updateUsername.bind(this);
    this.updatePassword=this.updatePassword.bind(this);
    this.createUser=this.createUser.bind(this);
  }
  render() {
    return(
      <div className="signup-form">
        <input type="text" value={this.state.user.username} onChange={this.updateUsername} placeholder="Username" />
        <input type="text" value={this.state.user.password} onChange={this.updatePassword} placeholder="Password" />
        <button onClick={this.createUser}>Create User</button>
      </div>
    )

  }

  updateUsername(event){
    this.setState({
      user:{username:event.target.value, password:this.state.user.password}
    })
  }
  updatePassword(event){
    this.setState({
      user:{password:event.target.value, username:this.state.user.username}
    })
  }
  createUser(){
    console.log(this.state.user)
    this.props.createUser(this.state.user)
  }

}






export default Signup;
