import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Profile from './Profile';
import NewBoat from './NewBoat';
import NewJob from './NewJob';

function UserInterface(props) {

    if (props.user === null) {
        return(
            <Redirect to="/" />
        )
    }

    return(
        <div>
            <button onClick={props.logout}>Logout</button>
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/user_interface">Profile</Link></li>
                        <li><Link to="/new_boat">New Boat</Link></li>
                        <li><Link to="/new_job">New Job</Link></li>
                    </ul>
                    <Route path="/user_interface" component={createProfile} />
                    <Route path="/new_boat" component={createNewBoat} />
                    <Route path="/new_job" component={createNewJob} />
                </div>
            </BrowserRouter>
        </div>
    )

    function createProfile() {
        return <Profile user={props.user} />
    }

    function createNewBoat() {
        return <NewBoat user={props.user} />
    }

    function createNewJob() {
        return <NewJob user={props.user} />
    }
}

export default UserInterface;
