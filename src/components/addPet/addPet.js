import React from 'react';
import './addPet.css';
import AddPetForm from './addPetFormComponents/addPetForm';

class AddPet extends React.Component {

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
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log('setState(this.state)');
    }

    render() {
        return (
            <AddPetForm onChange={ this.handleInputChange }/>
        );
    }

}

export default AddPet;