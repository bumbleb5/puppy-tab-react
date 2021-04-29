import React from 'react';

class AddPetSpeciesInput extends React.Component {
    render() {
        return (
            <div className="formField">
                <label htmlFor="species" className="addPetFormLabel">Species</label>
                <select id="species" name="species" className="selectDropDown">
                    <option value="null" defaultValue></option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                </select>
            </div>
        );
    }
}

export default AddPetSpeciesInput;