import React from 'react';

class AddPetSexInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label>Sex</label><br/>
                <input type="radio" id="sexMale" name="petSex" value="male" onChange={ this.props.handleChange }/>
                <label htmlFor="sexMale" className="radioOptionLabel">Male</label>
                <input type="radio" id="sexFemale" name="petSex" value="female" onChange={ this.props.handleChange }/>
                <label htmlFor="sexFemale" className="radioOptionLabel">Female</label>
            </div>
        );
    }
}

export default AddPetSexInput;