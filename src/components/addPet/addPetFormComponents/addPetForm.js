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
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
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
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    handleSubmit(event) {
        alert('A profile was submitted for ' + this.state.addPetName);
        event.preventDefault();
        const petID = uuidv4();
        this.setState({ petID: petID });
        const stringifiedPet = JSON.stringify(this.state);
        console.log(stringifiedPet);
        localStorage.setItem(this.state.petID, stringifiedPet);
    }

    render() {
        return (
            <div>
                <h1 id="addPetTitle">Add Pet</h1>
                <form id="addPetForm" name="addPetForm" onSubmit={ this.handleSubmit }>
                    <AddPetNameInput handleChange={ this.handleInputChange } value={ this.state.addPetName }/>
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