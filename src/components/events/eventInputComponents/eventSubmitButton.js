import React from 'react';

class EventSubmitButton extends React.Component {
    render() {
        return (
            <button type="submit" form="addVetEventForm" id="eventSubmitButton" value="Add Event" onClick={ this.props.onSubmit }>Add Event</button>
        );
    }
}

export default EventSubmitButton;