import React from 'react';

class AddPetSpeciesInput extends React.Component {
    render() {
        return (
            <div className="formField">
                <label htmlFor="petSpecies" className="addPetFormLabel">Species</label>
                <select id="petSpecies" name="petSpecies" className="selectDropDown" onChange={ this.props.handleChange }>
                    <option value="null" defaultValue></option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="fish">Fish</option>
                    <option value="horse">Horse</option>
                    <option value="other">Other</option>
                </select>
            </div>
        );
    }
}

export default AddPetSpeciesInput;