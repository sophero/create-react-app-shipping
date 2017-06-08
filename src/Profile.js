import React from 'react';
import { Redirect } from 'react-router-dom';

function Profile(props) {

    if (props.user === null) {
        return(
            <Redirect to="/" />
        )
    }

    return(
        <div>
            {props.user.username}'s Fleet
        </div>
    )

}

export default Profile;
