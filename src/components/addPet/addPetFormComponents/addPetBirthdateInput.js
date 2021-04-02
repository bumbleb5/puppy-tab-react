import React from 'react';
import addPetSubmit from './addPetVetInput';

class AddPetBirthdateInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label htmlFor="petBirthDate">Birthday</label><br/>
                <input type="date" id="petBirthDate" name="petBirthDate" onChange={ this.props.handleInputChange }/>
            </div>
        );
    }
}

export default AddPetBirthdateInput;