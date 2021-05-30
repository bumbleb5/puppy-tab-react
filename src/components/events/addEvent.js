import React from 'react';
import AddVetEventForm from './addEventComponents/addVetEventForm';
import petService from '../../services/pet.service';
import './addEvent.css'


class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: []
        };
    }

    // when this component renders, a list of pets will be recieved from the DB, passing into child forms to choose
    componentDidMount() {
        petService.fetchPets().then(pets => {
            this.setState({
                pets
            });
            console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <AddVetEventForm pets={ this.state.pets } />
            </div>
        );
    }
}

export default AddEvent;