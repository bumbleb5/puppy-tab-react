import React from 'react';

class AddPetBreedInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label htmlFor="petBreed">Breed</label><br/>
                <input type="text" id="petBreed" name="petBreed" onChange={ this.props.handleInputChange }/>
            </div>
        );
    }
}

export default AddPetBreedInput;