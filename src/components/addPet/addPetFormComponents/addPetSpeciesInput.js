import React from 'react';

class AddPetSpeciesInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label>Species</label><br/>
                <input type="radio" id="petSpeciesDog" name="petSpecies" value="dog" onChange={ this.props.handleChange }/>
                <label htmlFor="petSpeciesDog" className="radioOptionLabel">Dog</label>
                <input type="radio" id="petSpeciesCat" name="petSpecies" value="cat" onChange={ this.props.handleChange }/>
                <label htmlFor="petSpeciesCat" className="radioOptionLabel">Cat</label>
                <input type="radio" id="petSpeciesOther" name="petSpecies" value="other" onChange={ this.props.handleChange }/>
                <label htmlFor="petSpeciesOther" className="radioOptionLabel">Other</label>
            </div>
        );
    }
}

export default AddPetSpeciesInput;