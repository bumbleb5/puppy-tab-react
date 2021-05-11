import React from 'react';
import AddVetEventForm from './addEventComponents/addVetEventForm';
import './addEvent.css'

class AddEvent extends React.Component {
    render() {
        return (
            <div>
                <AddVetEventForm pets={ this.props.pets } />
            </div>
        );
    }
}

export default AddEvent;