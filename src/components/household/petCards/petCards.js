import React from 'react';
import './petCards.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PetIcon from '../../sharedComponents/petIcon';

// old way of image
{/* <img className="PetPicture" src={ this.props.pet.imgSrc } alt={ this.props.pet.name }></img> */}

class PetCards extends React.Component {

    render() {
        return (
            <div className="PetCards">
                    <div className="PetPictureFrame">
                        <Link className="petPictureLink" to={"/eventList/" + this.props.petId} pet={ this.props.pet }><PetIcon petSpecies={this.props.pet.species}/></Link>
                        {/* <FontAwesomeIcon icon="paw" /> */}
                    </div>
                <table>
                    <caption>{ this.props.pet.name }</caption>
                    <tbody>
                        <tr>
                            <th>Age</th>
                            <td>{ this.props.pet.age } years</td>
                        </tr>
                        <tr>
                        <th>Age in { this.props.pet.species } years</th>
                            <td>{ this.props.pet.ageInSpeciesYears } years</td>
                        </tr>
                        <tr>
                            <th>Breed</th>
                            <td>{ this.props.pet.breed }</td>
                        </tr>
                        <tr>
                            <th>Vaccinations Current</th>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
}

export default PetCards;