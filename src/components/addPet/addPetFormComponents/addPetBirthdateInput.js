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
                <input type="date" id="petBirthDate" name="petBirthDate" value={ this.props.value } onChange={ this.props.handleChange } pattern="\d{4}-\d{2}-\d{2}"/>
            </div>
        );
    }
}

export default AddPetBirthdateInput;