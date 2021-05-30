import React from 'react';
import './petCards/petCards.js';
import PetCards from './petCards/petCards.js';
import './household.css';
import petService from '../../services/pet.service';

class Household extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        petService.fetchPets().then(pets => {
            this.setState({
                pets
            });
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="Household">
                {
                    this.state.pets.map(pet => {
                        return < PetCards pet={ pet } petId={ pet.id } key={ pet.name }/>
                    })
                }
            </div>
        );
    };
}

export default Household;