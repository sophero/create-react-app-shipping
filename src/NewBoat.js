import React, { Component } from 'react';

class NewBoat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    render() {
        return(
            <div>Hi {this.state.user.username}! Create a new Boat here.</div>
        )
    }
}

export default NewBoat;
