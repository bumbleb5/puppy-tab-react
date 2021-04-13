import React from 'react';

class AddPetVetInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label htmlFor="vetClinicName">Veterinarian</label><br/>
                <input type="text" id="vetClinicName" name="vetClinicName" value={ this.props.value } onChange={ this.props.handleChange }/>
            </div>
        );
    }
}

export default AddPetVetInput;