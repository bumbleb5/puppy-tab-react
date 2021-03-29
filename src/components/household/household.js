import React from 'react';
import './petCards/petCards.js';
import PetCards from './petCards/petCards.js';
import './household.css';

class Household extends React.Component {
    render() {
        return (
            <div className="Household">
                {
                    this.props.pets.map(pet => {
                        return < PetCards pet={ pet } key={ pet.name }/>
                    })
                }
            </div>
        );
    };
}

export default Household;