import React from 'react';

class ConditionalInput extends React.Component {
    render() {
        return (
            <div className="formField">
                <label className="addEventFormLabel" htmlFor={ this.props.value }>{ this.props.input }</label><br/>
                <input type="text" id="vetEventClinic" className="addEventInput" name={ this.props.value } value={ this.props.value } onChange={ this.props.handleChange }/>
            </div>
        );
    }
}

export default ConditionalInput;