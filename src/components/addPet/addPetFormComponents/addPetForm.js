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
    render() {
        return (
            <div>

                <h1 id="addPetTitle">Add Pet</h1>

                <form id="addPetForm" name="addPetForm">

                    <AddPetNameInput />
                    <AddPetSpeciesInput />
                    <AddPetBirthdateInput />
                    <AddPetSexInput /> 
                    <AddPetVetInput />
                    <AddPetMedsInput />
                    <AddPetBreedInput />

                </form>

                <AddPetSubmitButton />

            </div>

        );
    }
}

export default AddPetForm;