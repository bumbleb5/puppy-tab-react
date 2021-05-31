import React from 'react';
import AddPetNameInput from './addPetNameInput';
import AddPetSpeciesInput from './addPetSpeciesInput';
import AddPetBirthdateInput from './addPetBirthdateInput';
import AddPetSexInput from './addPetSexInput';
import AddPetVetInput from './addPetVetInput';
import AddPetMedsInput from './addPetMedsInput';
import AddPetBreedInput from './addPetBreedInput';
import AddPetSubmitButton from './addPetSubmitButton';

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
  

class AddPetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addPetName: '',
            petSpecies: '',
            petBirthDate: '',
            petSex: '',
            vetClinicName: '',
            petMeds: '',
            petBreed: '',
            petID: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePetNameInput = this.handlePetNameInput.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    // if there is no id assigned, assign an id, else just set state with name
    // TODO move ID generation to back end 
    handlePetNameInput(e) {
        // if (this.state.petID === '') {
        //     let randomPetID = uuidv4();
        //     this.setState({
        //         petID: randomPetID,
        //         addPetName: e.target.value
        //     });
        // } else { }
        this.setState({
            addPetName: e.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        //let petID = uuidv4();
        //this.setState({ petID: petID });
        const stringifiedPet = JSON.stringify(this.state);
        //localStorage.setItem(this.state.petID, stringifiedPet);
        console.log(stringifiedPet);
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: stringifiedPet
        };
        const response = await fetch('/pets', requestOptions);
        const data = await response.json();
        // this.setState({ postId: data.id });
        alert('A profile was submitted for ' + this.state.addPetName);
        window.location.reload();
    }

    render() {
        return (
            <div>
                <h1 id="addPetTitle">Add Pet</h1>
                <form id="addPetForm" name="addPetForm" className="addPetForm" onSubmit={ this.handleSubmit }>
                    <AddPetNameInput handleChange={ this.handlePetNameInput } value={ this.state.addPetName }/>
                    <AddPetSpeciesInput handleChange={ this.handleInputChange } value={ this.state.petSpecies }/>
                    <AddPetBirthdateInput handleChange={ this.handleInputChange } value={ this.state.petBirthDate }/>
                    <AddPetSexInput handleChange={ this.handleInputChange } value={ this.state.petSex }/> 
                    <AddPetVetInput handleChange={ this.handleInputChange } value={ this.state.vetClinicName }/>
                    <AddPetMedsInput handleChange={ this.handleInputChange } value={ this.state.petMeds }/>
                    <AddPetBreedInput handleChange={ this.handleInputChange } value={ this.state.petBreed }/>
                </form>
                <AddPetSubmitButton />
            </div>
        );
    }
}

export default AddPetForm;