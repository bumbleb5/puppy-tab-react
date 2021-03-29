import React from 'react';
import './addPet.css';

class AddPet extends React.Component {
    render() {
        return (
            <div>
                <h1 id="addPetTitle">Add Pet</h1>
                <form id="addPetForm" name="addPetForm">
                    <div className="formField">
                        <label htmlFor="addPetName">Name</label><br/>
                        <input type="text" id="addPetName" name="addPetName"/>
                    </div>
                    <div className="formField">
                        <label>Species</label><br/>
                        <input type="radio" id="petSpeciesDog" name="petSpecies"/>
                        <label htmlFor="petSpeciesDog" className="radioOptionLabel">Dog</label>
                        <input type="radio" id="petSpeciesCat" name="petSpecies"/>
                        <label htmlFor="petSpeciesCat" className="radioOptionLabel">Cat</label>
                        <input type="radio" id="petSpeciesOther" name="petSpecies"/>
                        <label htmlFor="petSpeciesOther" className="radioOptionLabel">Other</label>
                    </div>
                    <div className="formField">
                        <label htmlFor="petBirthDate">Birthday</label><br/>
                        <input type="date" id="petBirthDate" name="petBirthDate"/>
                    </div>
                    <div className="formField">
                        <label>Sex</label><br/>
                        <input type="radio" id="sexMale" name="petSex"/>
                        <label htmlFor="sexMale" className="radioOptionLabel">Male</label>
                        <input type="radio" id="sexFemale" name="petSex"/>
                        <label htmlFor="sexFemale" className="radioOptionLabel">Female</label>
                    </div>
                    <div className="formField">
                        <label htmlFor="vetClinicName">Veterinarian</label><br/>
                        <input type="text" id="vetClinicName" name="vetClinicName"/>
                    </div>
                    <div className="formField">
                        <label htmlFor="petMeds">Medications</label><br/>
                        <input type="text" id="petMeds" name="petMeds"/>
                    </div>
                    <div className="formField">
                        <label htmlFor="petBreed">Breed</label><br/>
                        <input type="text" id="petBreed" name="petBreed"/>
                    </div>
                </form>
                <button type="submit" form="addPetForm" value="Add Pet">Add Pet</button>
            </div>
        );
    }
}

export default AddPet;