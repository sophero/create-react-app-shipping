import React, { Component } from 'react';

class NewBoat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            name:"",
            container_amount:"",
            location:""
        }
      this.boatName=this.boatName.bind(this);
      this.boatContainer=this.boatContainer.bind(this);
      this.boatLocation=this.boatLocation.bind(this);
      this.handleCreateBoat=this.handleCreateBoat.bind(this);
    }

    render() {
        return(
            <div className="new-boat">
              <div>Choose a Boat Name
                <input type="text" value={this.state.name} onChange={this.boatName} placeholder="Name" />
              </div>
              <div>Choose Number of Containers on Boat
                <input type="text" value={this.state.container_amount} onChange={this.boatContainer} placeholder="Amount" />
              </div>
              <div>Choose Boat Location
                <input type="text" value={this.state.location} onChange={this.boatLocation} placeholder="Location" />
              </div>
              <button onClick={this.handleCreateBoat}>Create Boat</button>
            </div>
          )

        }
      boatName(event) {
        this.setState({
          name:event.target.value
        })
      }
      boatContainer(event) {
        this.setState({
          container_amount:event.target.value
        })
      }
      boatLocation(event) {
        this.setState({
          location:event.target.value
        })
      }
      handleCreateBoat() {
        this.props.createBoat({
          name:this.state.name,
          container_amount:this.state.container_amount, location:this.state.location,
          user_id:this.state.user.id
        });
      }

    }


export default NewBoat;
