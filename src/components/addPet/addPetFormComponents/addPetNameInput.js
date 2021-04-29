import React from 'react';

class AddPetNameInput extends React.Component {
    render() {
        return (
            <div className="formField">
                <label className="addPetFormLabel" htmlFor="addPetName">Name</label><br/>
                <input type="text" id="addPetName" name="addPetName" className="addPetInput" value={ this.props.value } onChange={ this.props.handleChange }/>
            </div>
        );
    }
}

export default AddPetNameInput;