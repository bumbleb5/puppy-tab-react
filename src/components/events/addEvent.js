import React from 'react';
import petService from '../../services/pet.service';
import './addEvent.css'



class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            eventPet: '',
            eventPetId: '',
            eventType: '',
            eventDate: '',
            eventNotes: '',
            providerName: '',
            medication: ''
        };
        this.handlePetSelect = this.handlePetSelect.bind(this);
        this.handleEventSelect = this.handleEventSelect.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // when this component renders, a list of pets will be recieved from the DB, passing into child forms to choose
    componentDidMount() {
        petService.fetchPets().then(pets => {
            this.setState({
                pets
            });
            console.log(this.state);
        });
    }

    // handle pet select -> eventPetId
    handlePetSelect(e) {
        const pet = e.target.value;
        this.setState({
            eventPet: pet,
            eventPetId: pet.id
        });
        console.log(this.state);
    }
    // handle event select
    handleEventSelect(e) {
        this.setState({
            eventType: e.target.value
        });
        console.log(this.state);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    // handle form render
    // hanel form submission
    async handleSubmit(event) {
        event.preventDefault();
        // getting certain info out of state
        const eventDetails = {
            petId: [this.state.eventPetId],
            eventType: [this.state.eventType],
            eventDate: [this.state.eventDate],
            eventNotes: [this.state.eventNotes],
            providerName: [this.state.providerName],
            medication: [this.state.medication]
        };
        const stringifiedEvent = JSON.stringify(eventDetails);
        console.log(stringifiedEvent);
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: stringifiedEvent
        };
        const response = await fetch('/events', requestOptions);
        const data = await response.json();
        alert('An event was submitted for ' + this.state.eventPet);
        window.location.reload();
    }

    render() {
        return (
            <div id="addEventForm">

                <div className="addEventTitle">
                    <h1 >Add Event</h1>
                </div>

                <div id="addEventSelectDiv">

                    <div id="eventPetSelect">
                        <label htmlFor="eventPet" className="addEventFormLabel">Pet</label>

                        <select id="eventPet" className="addEventSelect" value={ this.state.eventPet } onChange={ this.handlePetSelect }>
                            <option value="null">Select Pet</option>
                            {
                                this.state.pets.map(pet => {
                                return <option pet={ pet } value={ pet.name } key={ pet.id }>{ pet.name }</option>
                            })
                            }
                        </select>
                    </div>
      
                    <div id="eventTypeSelect">
                        <label htmlFor="eventType" className="addEventFormLabel">Event Type</label>

                        <select id="eventType" className="addEventSelect" value={ this.state.eventType } onChange={ this.handleEventSelect }>
                            <option value="veterinary">Veterinary</option>
                            <option value="grooming">Grooming</option>
                            <option value="medication">Medication</option>
                        </select>
                    </div>
                
                </div>

                <div className="formRenderDiv">
                    {/* TODO switch (event type) this only renders when the event is selected */}

                    <div className="addEventformField">
                        <label className="addEventFormLabel" htmlFor="eventDate">Event Date</label><br/>
                        <input type="date" id="eventDate" className="addEventInput" name="eventDate" value={ this.state.eventDate } onChange={ this.handleInputChange } pattern="\d{4}-\d{2}-\d{2}"/>
                    </div>

                    <div className="formField">
                        <label className="addEventFormLabel" htmlFor="providerName">Veterinary Clinic</label><br/>
                        <input type="text" id="vetEventClinic" className="addEventInput" name="providerName" value={ this.state.providerName } onChange={ this.handleInputChange }/>
                    </div>

                </div>
                
                <div id="eventNotes">
                    <textarea className="addEventNotes" name="eventNotes" value={ this.state.eventNotes } onChange={ this.handleInputChange }rows="5" cols="100">
                        Notes
                    </textarea>
                </div>

                <div id="eventSubmit">
                    <button type="submit" form="addEventForm" id="eventSubmitButton" value="Add Event" onClick={ this.handleSubmit }>Add Event</button>
                </div>

            </div>
        );
    }
}

export default AddEvent;