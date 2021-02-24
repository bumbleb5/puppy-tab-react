import React from 'react';
import Household from './household/household.js';
import petArr from './household/pets/allPets';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Household pets={ petArr }/>
            </div>
        );
    }
}

export default Home;