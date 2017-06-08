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
    this.createProfilePage=this.createProfilePage.bind(this);
    this.createNewBoatPage=this.createNewBoatPage.bind(this);
    this.createNewJobPage=this.createNewJobPage.bind(this);
    this.createBoat=this.createBoat.bind(this);
    this.createJob=this.createJob.bind(this);
    this.getBoats = this.getBoats.bind(this);
    this.getJobs = this.getJobs.bind(this);

  }

    componentWillMount() {
        this.getBoats();
        this.getJobs();
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
                    <Route path="/user_interface" component={this.createProfilePage} />
                    <Route path="/new_boat" component={this.createNewBoatPage} />
                    <Route path="/new_job" component={this.createNewJobPage} />
                </div>
            </BrowserRouter>
        </div>
    )
}
    createProfilePage() {
        return <Profile user={this.props.user} boats={this.state.boats} jobs={this.state.jobs} />
    }

    createNewBoatPage() {
        return <NewBoat user={this.props.user} createBoat={this.createBoat} />
    }

    createNewJobPage() {
        return <NewJob user={this.props.user} createJob={this.createJob} boats={this.state.boats}/>
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

    getBoats() {
        axios.get('/boats').then(function(response) {
            this.setState({boats: response.data});
        }.bind(this));
    }

    getJobs() {
        axios.get('/jobs').then(function(response) {
            this.setState({jobs: response.data});
        }.bind(this));
    }

    createJob(job, boat_id) {
        console.log(job, boat_id);
        axios.post('/jobs', {
            job: job
        }).then((job_response) => {
            axios.post('assignments', {
                boat_id: boat_id,
                user_id: job.user_id,
                job_id: job_response.data.id
            }).then((assignment_response) => {
                this.getJobs();
            });
        });
    }

}

export default UserInterface;
