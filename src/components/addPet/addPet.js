import React from 'react';

class AddPet extends React.Component {
    render() {
        return (
            <div>
                <h1>Add Pet</h1>
                <form name="addPetForm">
                    <div>
                        <label for="petName">Name</label><br/>
                        <input type="text" id="petName" name="peName"/>
                    </div>
                    <div>
                        <label>Species</label><br/>
                        <input type="radio" id="petSpeciesDog" name="petSpecies"  />
                        <label for="petSpeciesDog">Dog</label>
                        <input type="radio" id="petSpeciesCat" name="petSpecies" />
                        <label for="petSpeciesCat">Cat</label>
                        <input type="radio" id="petSpeciesOther" name="petSpecies" />
                        <label for="petSpeciesOther">Other</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddPet;