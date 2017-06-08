import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Profile from './Profile';
import NewBoat from './NewBoat';
import NewJob from './NewJob';
import axios from 'axios';

class UserInterface extends Component {
  constructor(props){
    super(props)
    this.state={
      jobs:[],
      boats:[],
      user:props.user
    }
    this.createProfile=this.createProfilePage.bind(this);
    this.createNewBoat=this.createNewBoatPage.bind(this);
    this.createNewJob=this.createNewJobPage.bind(this);
    this.createBoat=this.createBoat.bind(this);
  }
  render() {  if (this.props.user === null) {
        return(
            <Redirect to="/" />
        )
    }

    return(
        <div>
            <button onClick={this.props.logout}>Logout</button>
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/user_interface">Profile</Link></li>
                        <li><Link to="/new_boat">New Boat</Link></li>
                        <li><Link to="/new_job">New Job</Link></li>
                    </ul>
                    <Route path="/user_interface" component={this.createProfile} />
                    <Route path="/new_boat" component={this.createNewBoat} />
                    <Route path="/new_job" component={this.createNewJob} />
                </div>
            </BrowserRouter>
        </div>
    )
}
    createProfilePage() {
        return <Profile user={this.props.user} />
    }

    createNewBoatPage() {
        return <NewBoat user={this.props.user} createBoat={this.createBoat} />
    }

    createNewJobPage() {
        return <NewJob user={this.props.user} />
    }
    createBoat(boat){
      console.log(boat);
      axios.post('/boats',{
        boat:boat
      }).then(function(response){
        console.log(response);
        this.setState({
          boats:response.data
        })
      }.bind(this));
    }
}

export default UserInterface;
