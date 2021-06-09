import React from 'react';

class ProviderInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provider: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // handleInputChange(e) {
    //     this.setState({
    //         provider: e.target.value
    //     });
    //     console.log('provider:' + this.state.provider);
    // }

    handleInputChange(e) {
        this.props.onChange(e);

    }

    render() {
        return (
            <div className="formField">
                <label className="addEventFormLabel" htmlFor="providerName">Provider</label><br/>
                <input type="text" id="vetEventClinic" className="addEventInput" name="providerName" value={ this.props.value } onChange={ this.handleInputChange }/>
            </div>
        )
    }
}

export default ProviderInput;