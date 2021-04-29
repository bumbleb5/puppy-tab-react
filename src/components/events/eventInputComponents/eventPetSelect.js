import React from 'react';

class EventPetSelect extends React.Component {
    render() {
        // const petsArr = this.props.pets;
        return (
            <div className="formField">
                <label htmlFor="eventPet" className="addEventFormLabel">Select Pet</label>
                <select id="eventPet" name="eventPet" className="selectPetDropDown">
                    {
                        this.props.pets.map(pet => {
                        return <option pet={ pet } value={ this.props.value } onChange={ this.props.onChange } key={ pet.name }>{ pet.name }</option>
                        })
                    }
                </select>
            </div>
        );
    }
}

export default EventPetSelect;