import React from 'react';

class AddPetSexInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label>Sex</label><br/>
                <input type="radio" id="sexMale" name="petSex" onChange={ this.props.handleInputChange }/>
                <label htmlFor="sexMale" className="radioOptionLabel">Male</label>
                <input type="radio" id="sexFemale" name="petSex" onChange={ this.props.handleInputChange }/>
                <label htmlFor="sexFemale" className="radioOptionLabel">Female</label>
            </div>
        );
    }
}

export default AddPetSexInput;