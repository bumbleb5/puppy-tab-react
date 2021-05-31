import React from 'react';
import eventService from '../../../services/event.service';
import petService from '../../../services/pet.service';
import { Link } from 'react-router-dom';

class EventList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            pet: null
        }
    }

    componentDidMount() {
        // getting route parameters
        const {match:{params}}=this.props;
        petService.fetchPet(params.petId).then(pet => {
            this.setState({
                pet
            });
        });
        eventService.fetchEvents(params.petId).then(events => {
            this.setState({
                events
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
                <h1>{ this.state.pet?.name || 'Pet' }'s Event History</h1>
                <table>
                    <tr>
                        <th>Event Type</th>
                        <th>Event Date</th>
                        <th>Provider </th>
                    </tr>
                    <tr>
                        {
                        this.state.events.map(event => {
                            return (
                                <div>
                                    <tbody>
                                        <td>{ event.eventType }</td>
                                        <td>{ event.eventDate }</td>
                                        <td>{ event.providerName }</td>
                                        <Link className="eventDetailsLink" to={"/eventDetails/" + event.eventId} key={event.eventId} ><p>More Info</p></Link>
                                    </tbody>
                                </div>
                            );
                        })
                        }
                    </tr>
                </table>
            </div>
            
        );
    }
}

export default EventList;