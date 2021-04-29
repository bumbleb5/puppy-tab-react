import React from 'react';

class AddPetMedsInput extends React.Component {
    render() {
        return (
            <div className="formField">
                <label className="addPetFormLabel" htmlFor="petMeds">Medications</label><br/>
                <input type="text" id="petMeds" name="petMeds" className="addPetInput" value={ this.props.value } onChange={ this.props.handleChange }/>
            </div>
        );
    }
}

export default AddPetMedsInput;