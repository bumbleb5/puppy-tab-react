import React from 'react';

class MedicationInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            medication: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            medication: e.target.value
        });
        console.log('medication:' + this.state.medication);
    }

    render() {
        return (
            
            <div className="formField">
                <label className="addEventFormLabel" htmlFor="medication">Medication</label><br/>
                <input type="text" id="vetEventClinic" className="addEventInput" name="medication" value={ this.state.medication } onChange={ this.handleInputChange }/>
            </div>
            
        )
    }
}

export default MedicationInput;