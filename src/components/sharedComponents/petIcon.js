import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pets = {
    cat: 'cat',
    dog: 'dog',
    other: 'paw',
    bird: 'kiwi-bird',
    fish: 'fish',
    horse: 'horse'
};

class PetIcon extends React.Component {
    render() {
        return (
            <div id="FAIconDiv">
                <FontAwesomeIcon icon={ pets[this.props.petSpecies] } />
            </div>
        );
    }
}

export default PetIcon;