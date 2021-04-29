import React from 'react';
import AddVetEvent from './addEventComponents/addVetEventForm';
import './addEvent.css'

class AddEvent extends React.Component {
    render() {
        return (
            <div>
                <AddVetEvent pets={ this.props.pets } />
            </div>
        );
    }
}

export default AddEvent;