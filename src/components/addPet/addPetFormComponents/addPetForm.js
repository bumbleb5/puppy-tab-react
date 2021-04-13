import React from 'react';
import AddPetNameInput from './addPetNameInput';
import AddPetSpeciesInput from './addPetSpeciesInput';
import AddPetBirthdateInput from './addPetBirthdateInput';
import AddPetSexInput from './addPetSexInput';
import AddPetVetInput from './addPetVetInput';
import AddPetMedsInput from './addPetMedsInput';
import AddPetBreedInput from './addPetBreedInput';
import AddPetSubmitButton from './addPetSubmitButton';

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
            petBreed: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1 id="addPetTitle">Add Pet</h1>
                <form id="addPetForm" name="addPetForm">
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