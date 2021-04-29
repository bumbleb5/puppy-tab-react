import React from 'react';

class AddPetVetInput extends React.Component {
    render() {
        return (
            <div className="formField">
                <label className="addPetFormLabel" htmlFor="vetClinicName">Veterinarian</label><br/>
                <input type="text" id="vetClinicName" name="vetClinicName" className="addPetInput" value={ this.props.value } onChange={ this.props.handleChange }/>
            </div>
        );
    }
}

export default AddPetVetInput;