import React from 'react';

class AddPetNameInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="formField">
                <label htmlFor="addPetName">Name</label><br/>
                <input type="text" id="addPetName" name="addPetName" onChange={ this.props.handleInputChange }/>
            </div>
        );
    }
}

export default AddPetNameInput;