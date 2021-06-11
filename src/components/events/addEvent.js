import React from 'react';
import petService from '../../services/pet.service';
import './addEvent.css'
// import ConditionalInput from './eventInputComponents/conditionalInput';
// import ProviderInput from './eventInputComponents/providerInput';
// import MedicationInput from './eventInputComponents/medicationInput';

// display label for user
let conditionalInput;
// htmlFor value
let conditionalValue;

let eventTypeInput;

class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            // eventPet: '',
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
        this.handleEventTypeChange = this.handleEventTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    // function to find pet by name and return id, don't need anymore
    // getPetId(targetPet) {
    //     const petsArr = this.state.pets;
    //     const foundPet = petsArr.find(pet => {
    //         return pet._name === targetPet;
    //     }); 
    //     if (foundPet) {
    //         return foundPet.id;
    //     } else {
    //         return null;
    //     }
    // }

    // handle pet select -> eventPetId
    handlePetSelect(e) {
        const petId = e.target.value;
        this.setState({
            eventPetId: petId,
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
        // if (e && e.fieldName) {
        //     this.setState({
        //         [e.fieldName]: e.fieldValue
        //     });
        // } else {
        //     this.setState({
        //         [e.target.name]: e.target.value
        //     });
        // }
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    // hanel form submission
    async handleSubmit(event) {
        event.preventDefault();
        // getting certain info out of state
        const eventDetails = {
            petId: this.state.eventPetId,
            eventType: this.state.eventType,
            eventDate: this.state.eventDate,
            eventNotes: this.state.eventNotes,
            providerName: this.state.providerName,
            medication: this.state.medication
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
        alert('A '+ this.state.eventType + ' event was submitted');
        window.location.reload();
    }

    handleEventTypeChange(e) {
        const eventType = e.target.value;
        this.setState({
            eventType: eventType
        });

        if (eventType === '') {
            conditionalInput = '';
            conditionalValue = '';
        } else if (eventType === 'veterinary' || eventType === 'grooming') {
            conditionalInput = 'Provider';
            conditionalValue = 'providerName';
        } else if (eventType === 'medication') {
            conditionalInput = 'Medication';
            conditionalValue = 'medication';
        }

        // if (e.target.value === 'veterinary' || e.target.value === 'grooming') {
        //     eventTypeInput = <ProviderInput value={ this.state.providerName } onChange={ this.handleInputChange }/>
        // } else if (e.target.value === 'medication') {
        //     eventTypeInput = <MedicationInput value={ this.state.medication } onChange={ this.handleInputChange }/>
        // }
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
                                return <option value={ pet.id } key={ pet.id }>{ pet.name }</option>
                            })
                            }
                        </select>
                    </div>
      
                    <div id="eventTypeSelect">
                        <label htmlFor="eventType" className="addEventFormLabel">Event Type</label>

                        <select id="eventType" className="addEventSelect" value={ this.state.eventType } onChange={ this.handleEventTypeChange }>
                            <option value=""></option>
                            <option value="veterinary">Veterinary</option>
                            <option value="grooming">Grooming</option>
                            <option value="medication">Medication</option>
                        </select>
                    </div>
                
                </div>

                <div className="formRenderDiv">

                    <div className="addEventformField">
                        <label className="addEventFormLabel" htmlFor="eventDate">Event Date</label><br/>
                        <input type="date" id="eventDate" className="addEventInput" name="eventDate" value={ this.state.eventDate } onChange={ this.handleInputChange } pattern="\d{4}-\d{2}-\d{2}"/>
                    </div>

                    <div className="formField">
                        <label className="addEventFormLabel" htmlFor={ conditionalValue }>{ conditionalInput }</label><br/>
                        <input type="text" id="vetEventClinic" className="addEventInput" name={ conditionalValue } value={ this.state[conditionalValue] } onChange={ this.handleInputChange }/>
                    </div>

                    {/* if/else statement maybe instead of ConditionalInput */}

                    {/* <div>
                        <ConditionalInput value={ conditionalValue } input={ conditionalInput } onChange={ this.handleInputChange }/>
                    </div> */}

                    {/* {eventTypeInput} */}

                </div>
                
                <div id="eventNotes">
                    <textarea className="addEventNotes" name="eventNotes" value={ this.state.eventNotes } onChange={ this.handleInputChange } rows="5" cols="100">
                        
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