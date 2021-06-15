import React from 'react';
import './petCards.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PetIcon from '../../sharedComponents/petIcon';

// old way of image
{/* <img className="PetPicture" src={ this.props.pet.imgSrc } alt={ this.props.pet.name }></img> */}

class PetCards extends React.Component {

    render() {

        let species = this.props.pet.species;
        let ageInSpeciesYears = this.props.pet.ageInSpeciesYears;
        let breed = this.props.pet.breed;

        return (
            <div className="PetCards">
                <div className="PetPictureFrame">
                    <Link className="petPictureLink" to={"/eventList/" + this.props.petId} pet={ this.props.pet }><PetIcon petSpecies={this.props.pet.species}/></Link>
                    {/* <FontAwesomeIcon icon="paw" /> */}
                </div>

                <div className="petCardNameLink">
                    <Link to={"/eventList/" + this.props.petId} pet={ this.props.pet }>{ this.props.pet.name }</Link>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <th>Age</th>
                            <td>{ this.props.pet.age } years</td>
                        </tr>

                        {(function() {
                            if (species === 'dog' || species === 'cat') {
                                return (
                                    <tr>
                                        <th>Age in { species } years</th>
                                        <td>{ ageInSpeciesYears } years</td>
                                    </tr>
                                );
                            } else {
                                return <div></div>
                            }
                        })()}

                        {(function() {
                            if (!breed || breed === '') {
                                return <div></div>
                            } else {
                                return (
                                    <tr>
                                        <th>Breed</th>
                                        <td>{ breed }</td>
                                    </tr>
                                )
                            }
                        })()}

                        
                        
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