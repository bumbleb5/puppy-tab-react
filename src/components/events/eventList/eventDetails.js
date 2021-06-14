import React from 'react';
import eventService from '../../../services/event.service';
import petService from '../../../services/pet.service';
import './eventDetails.css';
import VeterinaryGroomingDetails from './veterinaryGroomingDetails';
import MediationDetails from './medicationDetails';
import { Link } from 'react-router-dom';


let eventDetailsComponent;

class EventDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: null,
            event: null        }
    }

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
            );
        } else if (this.state.event.eventType === 'veterinary' || this.state.event.eventType === 'grooming') {
            eventDetailsComponent = <VeterinaryGroomingDetails className="eventDetailsComponent" pet={ this.state.pet } event={ this.state.event }/>;
        } else if (this.state.event.eventType === 'medication') {
            eventDetailsComponent = <MediationDetails className="eventDetailsComponent" pet={ this.state.pet } event={ this.state.event }/>;
        }

        return (
            <div id="eventDetailsContainer">
                {eventDetailsComponent}
                <div className="linkContainer">
                    <Link className="eventDetailsPageLink" to={"/eventList/" + this.state.pet.id}>{ this.state.pet.name }'s Event List</Link>
                    <Link className="eventDetailsPageLink" to="/">Houshold</Link>
                </div>
            </div>
            
        )

        // return (
            // <div id="eventDetailsContainer">
            //     <h1 className="eventHeader">{ this.state.pet.name }'s { this.state.event.eventType } visit on { this.state.event.eventDate }</h1>
            //     <div className="eventSummaryContainer">
            //         <p className="eventProvider">Provider: {this.state.event.providerName}</p>
            //         <p className="eventTotal">Total: ${this.state.event.totalPrice}</p>
            //         <p className="ownerNotes">Owner Notes: {this.state.event.eventNotes}</p>
            //     </div>
            // </div>
        // );
    }
}

export default EventDetails;