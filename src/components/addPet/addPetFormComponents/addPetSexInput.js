import React from 'react';

class AddPetSexInput extends React.Component {
    render() {
        return (
            <div className="formField">
                <label className="addPetFormLabel">Sex</label><br/>
                <input type="radio" id="sexMale" name="petSex" className="addPetRadioButton" value="male" onChange={ this.props.handleChange }/>
                <label htmlFor="sexMale" className="addPetFormLabel">Male</label>
                <input type="radio" id="sexFemale" name="petSex" className="addPetRadioButton" value="female" onChange={ this.props.handleChange }/>
                <label htmlFor="sexFemale" className="addPetFormLabel">Female</label>
            </div>
        );
    }
}

export default AddPetSexInput;