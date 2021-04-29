import React from 'react';

class AddPetSubmitButton extends React.Component {
    render() {
        return (
            <button id="addPetSubmitButton" type="submit" form="addPetForm" value="Add Pet">Add Pet</button>
        );
    }
}

export default AddPetSubmitButton;