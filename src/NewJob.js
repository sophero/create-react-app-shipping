import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NewJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            boats: props.boats,
            name: "",
            description: "",
            origin: "",
            destination: "",
            cost: "",
            containers_needed: "",
            boat_id: ""
        }

        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateOrigin = this.updateOrigin.bind(this);
        this.updateDestination= this.updateDestination.bind(this);
        this.updateCost = this.updateCost.bind(this);
        this.updateContainersNeeded = this.updateContainersNeeded.bind(this);
        this.handleCreateJob = this.handleCreateJob.bind(this);
        this.updateBoatId = this.updateBoatId.bind(this);
    }

    componentWillMount() {
        console.log(this.state.boats);
        this.setState({
            boat_id: this.state.boats[0].id
        });
    }

    render() {

        let boats = this.state.boats.map(function(boat, index) {
            return(
                <option value={boat.id} key={index}>{boat.name}</option>
            )
        });

        return(
            <div>
                <div>
                    Hi {this.state.user.username}! Create a new Job here.
                </div>
                <div className="new-job-form">
                    <div>
                        <input type="text" onChange={this.updateName} value={this.state.name} placeholder="Job name" />
                    </div>
                    <div>
                        <textarea type="textarea" onChange={this.updateDescription} placeholder="Job description" value={this.state.description}></textarea>
                    </div>
                    <div>
                        <input type="text" onChange={this.updateOrigin} value={this.state.origin} placeholder="Origin" />
                    </div>
                    <div>
                        <input type="text" onChange={this.updateDestination} value={this.state.destination} placeholder="Destination" />
                    </div>
                    <div>
                        <input type="text" onChange={this.updateCost} value={this.state.cost} placeholder="Cost" />
                    </div>
                    <div>
                        <input type="text" onChange={this.updateContainersNeeded} value={this.state.containers_needed} placeholder="Containers needed" />
                    </div>
                    <div>
                        <select onChange={this.updateBoat}>
                            {boats}
                        </select>
                    </div>
                    <div>
                        <button onClick={this.handleCreateJob}>Create Job</button>
                    </div>
                </div>
            </div>
        )
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateDescription(event) {
        this.setState({description: event.target.value});
    }

    updateOrigin(event) {
        this.setState({origin: event.target.value});
    }

    updateDestination(event) {
        this.setState({destination: event.target.value});
    }

    updateCost(event) {
        this.setState({cost: event.target.value});
    }

    updateContainersNeeded(event) {
        this.setState({containers_needed: event.target.value});
    }

    updateBoatId(event) {
        this.setState({boat_id: event.target.value})
    }

    handleCreateJob() {
        let job = {
            name: this.state.name,
            description: this.state.description,
            origin: this.state.origin,
            destination: this.state.destination,
            cost: parseInt(this.state.cost),
            containers_needed: parseInt(this.state.containers_needed),
            user_id: this.state.user.id
        }
        this.props.createJob(job, parseInt(this.state.boat_id));
        // this.setState({
        //     name: "",
        //     description: "",
        //     origin: "",
        //     destination: "",
        //     cost: "",
        //     containers_needed: "",
        //     boat_id: ""
        // });
        return(
            <Redirect to="/profile" />
        )
    }
}

export default NewJob;
