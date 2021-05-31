import React from 'react';
import eventService from '../../../services/event.service';
import petService from '../../../services/pet.service';
import './eventDetails.css';

class EventDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: null,
            event: null
        }
    }

    // something is wrong with what this is fetching - fetching pets????
    componentDidMount() {
        // getting URL parameters with deconstructed assignment
        const {match:{params}}=this.props;
        // fetch specific event
        eventService.fetchEvent(params.eventId).then(event => {
            this.setState({
                event
            });
            console.log(event);
            petService.fetchPet(event.petId).then(pet => {
                this.setState({
                    pet
                });
            });
        });
        
        console.log(this.state);
    }
    
    render() {
        if (!this.state.pet) {
            return (
                <div>Hold tight...we're getting your pet's info!</div>
            )
        }
        return (
            <div>
                <h1 className="eventHeader">{ this.state.pet.name }'s { this.state.event.eventType } visit on { this.state.event.eventDate }</h1>
                <div className="eventSummary">
                    <p className="eventProvider">Provider: {this.state.event.providerName}</p>
                    <p className="eventTotal">Total: ${this.state.event.totalPrice}</p>
                    <p className="ownerNotes">Owner Notes: {this.state.event.eventNotes}</p>
                </div>
            </div>
            
        );
    }
}

export default EventDetails;