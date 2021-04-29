import React from 'react';

class AddPetBirthdateInput extends React.Component {
    render() {
        return (
            <div className="formField">
                <label className="addPetFormLabel" htmlFor="petBirthDate">Birthday</label><br/>
                <input type="date" id="petBirthDate" className="addPetInput" name="petBirthDate" value={ this.props.value } onChange={ this.props.handleChange } pattern="\d{4}-\d{2}-\d{2}"/>
            </div>
        );
    }
}

export default AddPetBirthdateInput;