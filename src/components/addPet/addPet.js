import React from 'react';
import './addPet.css';

class AddPet extends React.Component {
    render() {
        return (
            <div>
                <h1 id="addPetTitle">Add Pet</h1>
                <form id="addPetForm" name="addPetForm">
                    <div className="formField">
                        <label for="petName">Name</label><br/>
                        <input type="text" id="petName" name="peName"/>
                    </div>
                    <div className="formField">
                        <label>Species</label><br/>
                        <input type="radio" id="petSpeciesDog" name="petSpecies"/>
                        <label for="petSpeciesDog" className="radioOptionLabel">Dog</label>
                        <input type="radio" id="petSpeciesCat" name="petSpecies"/>
                        <label for="petSpeciesCat" className="radioOptionLabel">Cat</label>
                        <input type="radio" id="petSpeciesOther" name="petSpecies"/>
                        <label for="petSpeciesOther" className="radioOptionLabel">Other</label>
                    </div>
                    <div className="formField">
                        <label for="petBirthDate">Birthday</label><br/>
                        <input type="date" id="petBirthDate" name="petBirthDate"/>
                    </div>
                    <div className="formField">
                        <label for="petSex">Sex</label><br/>
                        <input type="radio" id="sexMale" name="petSex"/>
                        <label for="sexMale" className="radioOptionLabel">Male</label>
                        <input type="radio" id="sexFemale" name="petSex"/>
                        <label for="sexFemale" className="radioOptionLabel">Female</label>
                    </div>
                    <div className="formField">
                        <label for="vetClinicName">Veterinarian</label><br/>
                        <input type="text" id="vetClinicName" name="vetClinicName"/>
                    </div>
                    <div className="formField">
                        <label for="petMeds">Medications</label><br/>
                        <input type="text" id="petMeds" name="petMeds"/>
                    </div>
                    <div className="formField">
                        <label for="petBreed">Breed</label><br/>
                        <input type="text" id="petBreed" name="petBreed"/>
                    </div>
                </form>
                <button type="submit" form="addPetForm" value="Add Pet">Add Pet</button>
            </div>
        );
    }
}

export default AddPet;