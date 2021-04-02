import React from 'react';

class AddPetSpeciesInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label>Species</label><br/>
                <input type="radio" id="petSpeciesDog" name="petSpecies" onChange={ this.props.handleInputChange }/>
                <label htmlFor="petSpeciesDog" className="radioOptionLabel">Dog</label>
                <input type="radio" id="petSpeciesCat" name="petSpecies" onChange={ this.props.handleInputChange }/>
                <label htmlFor="petSpeciesCat" className="radioOptionLabel">Cat</label>
                <input type="radio" id="petSpeciesOther" name="petSpecies" onChange={ this.props.handleInputChange }/>
                <label htmlFor="petSpeciesOther" className="radioOptionLabel">Other</label>
            </div>
        );
    }
}

export default AddPetSpeciesInput;