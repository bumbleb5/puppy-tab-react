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
                <h1>{ this.state.pet.name }s { this.state.event.eventType }'s visit on { this.state.event.eventDate }</h1>
                <table id="eventDetails">
                    <tbody>
                        <tr>
                            <td>{ this.state.event.providerName }</td>
                            <td>{ this.state.event.totalPrice }</td>
                        </tr>
                        <tr>
                            <td>{ this.state.event.eventNotes }</td>
                        </tr>
                        </tbody>
                </table>
            </div>
            
        );
    }
}

export default EventDetails;