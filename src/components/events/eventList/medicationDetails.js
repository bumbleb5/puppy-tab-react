import React from 'react';

function capitalizeEventType(event) {
    let firstLetter = event[0];
    firstLetter = firstLetter.toUpperCase();
    return firstLetter.concat(event.slice(1));
}

class MedicationDetails extends React.Component {
    render() {
        return (
            <div className="eventDetails">
                <h1 className="eventHeader">{ this.props.pet.name }'s { capitalizeEventType(this.props.event.eventType) } Administration</h1>
                <div className="eventSummaryContainer">
                    <p className="eventProvider">Medication: {this.props.event.medication}</p>
                    <p>Date: {this.props.event.eventDate}</p>
                </div>
                <p className="ownerNotes">Owner Notes: {this.props.event.eventNotes}</p>
            </div>
        );
    }
}

export default MedicationDetails;