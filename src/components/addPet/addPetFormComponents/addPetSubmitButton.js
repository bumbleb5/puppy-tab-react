import React from 'react';

class AddPetSubmitButton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <button type="submit" form="addPetForm" value="Add Pet">Add Pet</button>
        );
    }
}

export default AddPetSubmitButton;