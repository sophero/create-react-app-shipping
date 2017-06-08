import React, { Component } from 'react';

class NewJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    render() {
        return(
            <div>Hi {this.state.user.username}! Create a new Job here.</div>
        )
    }
}

export default NewJob;
