import React from 'react';

class AddPetMedsInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label htmlFor="petMeds">Medications</label><br/>
                <input type="text" id="petMeds" name="petMeds" onChange={ this.props.handleInputChange }/>
            </div>
        );
    }
}

export default AddPetMedsInput;