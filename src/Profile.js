import React from 'react';
import { Redirect } from 'react-router-dom';


function Profile(props) {

    if (props.user === null) {
        return(
            <Redirect to="/" />
        )
    }

    let jobs = props.jobs.map(function(job, index) {
        return(
            <div key={index}>
                {job.name}
            </div>
        )
    });

    return(
        <div>
            <h2>
                {props.user.username}'s Fleet
            </h2>
            <div>
                {jobs}
            </div>

        </div>
    )

}

export default Profile;
