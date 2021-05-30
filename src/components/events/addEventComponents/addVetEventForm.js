import React from 'react';
//import EventPetSelect from '../eventInputComponents/eventPetSelect';
import EventSubmitButton from '../eventInputComponents/eventSubmitButton';

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

class AddVetEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventType: 'veterinary',
            eventPet: '',
            providerName: '',
            eventDate: '',
            totalPrice: '',
            eventNotes: '',
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
    async handlePetSelect(e) {
        const requestOptions = {
            method: 'GET',
            headers: {}
        }
        await fetch('/pets', )
        this.setState({
            eventPet: e.target.value
        });
    }
    
    // handleSubmit(event) {
    //     event.preventDefault();
    //     //let randomEventID = uuidv4();
    //     //console.log(randomEventID);
    //     //this.setState({ eventID: randomEventID });
    //     //console.log(this.state);
    //     const stringifiedEvent = JSON.stringify(this.state);
    //     //console.log(eventID);
    //     //console.log(uuidv4());
    //     localStorage.setItem(this.state.eventID, stringifiedEvent);
    //     console.log(stringifiedEvent);
    //     alert('An event was submitted for ' + this.state.eventPet);
    // }

    async handleSubmit(event) {
        event.preventDefault();
        //let petID = uuidv4();
        //this.setState({ petID: petID });
        const stringifiedEvent = JSON.stringify(this.state);
        //localStorage.setItem(this.state.petID, stringifiedPet);
        console.log(stringifiedEvent);
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: stringifiedEvent
        };
        const response = await fetch('/events', requestOptions);
        const data = await response.json();
        // this.setState({ postId: data.id });
        alert('An event was submitted for ' + this.state.eventPet);
    }

    render() {
        return (
            <div>
                <h1 className="addEventFormTitle">Add Vet Event</h1>
                <form id="addVetEventForm" className="addEventForm" name="addVetEventForm" onSubmit={ this.handleSubmit }>
                    
                     {/* <EventPetSelect pets={ this.props.pets } value={ this.state.eventPet } onChange={ this.handleInputChange }/> */}
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
                    
                    <div className="formField">
                        <label className="addEventFormLabel" htmlFor="providerName">Veterinary Clinic</label><br/>
                        <input type="text" id="vetEventClinic" className="addEventInput" name="providerName" value={ this.state.providerName } onChange={ this.handleInputChange }/>
                    </div>
                    <div className="formField">
                        <label className="addEventFormLabel" htmlFor="eventDate">Date of Visit</label><br/>
                        <input type="date" id="vetEventDate" className="addEventInput" name="eventDate" value={ this.state.eventDate } onChange={ this.handleInputChange } pattern="\d{4}-\d{2}-\d{2}"/>
                    </div>
                    <div className="formField">
                        <label className="addEventFormLabel" htmlFor="totalPrice">Total</label><br/>
                        <input type="text" id="vetEventTotal" className="addEventInput" name="totalPrice" value={ this.state.totalPrice } onChange={ this.handleInputChange }/>
                    </div>
                    <div id="eventNotes">
                        <textarea className="vetEventNotes" name="eventNotes" value={ this.state.eventNotes } onChange={ this.handleInputChange }rows="6" cols="40">
                            Visit notes
                        </textarea>
                    </div>
                </form>
                <EventSubmitButton onSubmit={ this.handleSubmit }/>
            </div>
        )
    }
}

export default AddVetEventForm;