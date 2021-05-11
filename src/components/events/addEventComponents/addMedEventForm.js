import React from 'react';
//import EventPetSelect from '../eventInputComponents/eventPetSelect';
import EventSubmitButton from '../eventInputComponents/eventSubmitButton';

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

class AddMedEventForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventType: 'medication',
            eventPet: '',
            eventMedication: '',
            medEventDate: '',
            medEventNotes: '',
            eventID: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePetSelect = this.handlePetSelect.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    // TODO move ID generation to back end 
    handlePetSelect(e) {
        if (this.state.eventID === '') {
            let randomID = uuidv4();
            this.setState({
                eventID: randomID,
                eventPet: e.target.value
            });
            console.log(this.state);
        } else {
            this.setState({
                eventPet: e.target.value
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        //let randomEventID = uuidv4();
        //console.log(randomEventID);
        //this.setState({ eventID: randomEventID });
        //console.log(this.state);
        const stringifiedEvent = JSON.stringify(this.state);
        //console.log(eventID);
        //console.log(uuidv4());
        localStorage.setItem(this.state.eventID, stringifiedEvent);
        console.log(stringifiedEvent);
        alert('An event was submitted for ' + this.state.eventPet);
    }

    render() {
        return (
            <div>
                <h1 className="addEventFormTitle">Add Medication Event</h1>
                <form id="addMedEventForm" className="addEventForm" name="addMedEventForm" onSubmit={ this.handleSubmit }>

                    <div className="formField">
                        <label htmlFor="eventPet" className="addEventFormLabel">Select Pet</label>
                        <select id="eventPet" name="eventPet" className="selectPetDropDown" onChange={ this.handlePetSelect }>
                            <option value="null" defaultValue></option>
                        {
                            this.props.pets.map(pet => {
                            return <option pet={ pet } value={ pet.name } key={ pet.name }>{ pet.name }</option>
                        })
                        }
                        </select>
                    </div>

                    {/* TODO: GET MEDS FROM PET */}
                    <div className="formField">
                        <label className="addEventFormLabel" htmlFor="eventMedication">Medication</label><br/>
                        <input type="text" id="eventMedication" className="addEventInput" name="eventMedication" value={ this.state.eventMedication } onChange={ this.handleInputChange }/>
                    </div>

                    <div className="formField">
                        <label className="addEventFormLabel" htmlFor="medEventDate">Date of Visit</label><br/>
                        <input type="date" id="medEventDate" className="addEventInput" name="medEventDate" value={ this.state.medEventDate } onChange={ this.handleInputChange } pattern="\d{4}-\d{2}-\d{2}"/>
                    </div>

                    <div id="eventNotes">
                        <textarea className="medEventNotes" name="medEventNotes" value={ this.state.medEventNotes } onChange={ this.handleInputChange }rows="6" cols="40">
                            Notes
                        </textarea>
                    </div>
                    
                </form>
                <EventSubmitButton onSubmit={ this.handleSubmit }/>
            </div>
        )
    }
}

export default AddMedEventForm;