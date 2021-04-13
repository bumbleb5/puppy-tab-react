import React from 'react';

class AddPetMedsInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label htmlFor="petMeds">Medications</label><br/>
                <input type="text" id="petMeds" name="petMeds" value={ this.props.value } onChange={ this.props.handleChange }/>
            </div>
        );
    }
}

export default AddPetMedsInput;