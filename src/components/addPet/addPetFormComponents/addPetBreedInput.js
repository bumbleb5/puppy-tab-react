import React from 'react';

class AddPetBreedInput extends React.Component {
    render() {
        return (
            <div className="formField">
                <label className="addPetFormLabel" htmlFor="petBreed">Breed</label><br/>
                <input type="text" id="petBreed" name="petBreed" className="addPetInput" value={ this.props.value } onChange={ this.props.handleChange }/>
            </div>
        );
    }
}

export default AddPetBreedInput;