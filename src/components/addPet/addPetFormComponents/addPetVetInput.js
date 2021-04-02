import React from 'react';

class AddPetVetInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label htmlFor="vetClinicName">Veterinarian</label><br/>
                <input type="text" id="vetClinicName" name="vetClinicName" onChange={ this.props.handleInputChange }/>
            </div>
        );
    }
}

export default AddPetVetInput;