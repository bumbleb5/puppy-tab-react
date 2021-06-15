import React from 'react';
import eventService from '../../../services/event.service';
import petService from '../../../services/pet.service';
import { Link } from 'react-router-dom';
import './eventDetails.css';
import PetIcon from '../../sharedComponents/petIcon';


const sortEventArr = (eventArr) => {
    eventArr = eventArr.sort((a, b) => {
        return new Date(a.eventDate) - new Date(b.eventDate);
    });
    return eventArr.reverse();
}

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
                events: sortEventArr(events)
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

                <h1 className="eventHeader">{ this.state.pet?.name || 'Pet' }'s Event History</h1>

                <div id="eventListContianer">

                    <div id="eventListPetBrief">

                        <div className="petBriefName">
                            <p>{ this.state.pet.name }</p>
                        </div>

                        <div className="petBriefImgDiv">
                            {/* <img className="petBriefImg" src={`/` + this.state.pet.imgSrc } alt={ this.state.pet.name }></img> */}
                            <PetIcon petSpecies={ this.state.pet.species }/>
                        </div>

                        <div className="petBriefBreed">
                            <p>{ this.state.pet.breed }</p>
                        </div>

                        <div className="petBriefAge">
                            <p>{ this.state.pet.age } years</p>
                        </div>

                    </div>

                    <div className="eventListDiv">

                        <table className="eventListTable">

                            <tbody>
                                {/* <tr className="tableHeader">
                                    <th>Event Type</th>
                                    <th>Event Date</th>
                                    <th>Provider </th>
                                </tr> */}
                                    {
                                    this.state.events.map(event => {
                                        return (
                                        
                                            <tr key={event.eventId}>
                                                <td>{ event.eventType }</td>
                                                <td>{ event.eventDate }</td>
                                                <td>{ event.providerName || event.medication }</td>
                                                <td><Link className="eventDetailsLink" to={"/eventDetails/" + event.eventId} key={event.eventId} ><p>More Info</p></Link></td>
                                            </tr>
                                            
                                        );
                                    })
                                    }
                            </tbody>

                        </table>

                    </div>
                
                </div>

            </div>
            
        );
    }
}

export default EventList;