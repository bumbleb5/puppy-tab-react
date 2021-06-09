import React from 'react';

class ConditionalInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.props.onChange({
            fieldName: this.props.value,
            fieldValue: this.state.value
        });
    }

    render() {
        return (
            <div className="formField">
                <label className="addEventFormLabel" htmlFor={ this.props.value }>{ this.props.input }</label><br/>
                <input type="text" id="vetEventClinic" className="addEventInput" name={ this.props.value } value={ this.state.value } onChange={ this.handleInputChange }/>
            </div>
        );
    }
}

export default ConditionalInput;