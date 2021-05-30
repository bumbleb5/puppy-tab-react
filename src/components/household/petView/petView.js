import React from 'react';
import "./petView.css";
import petService from '../../../services/pet.service';

// TODO Fix all of the shit

class PetView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: null
        }
    }

    componentDidMount() {
        const {match:{params}}=this.props;
        petService.fetchPet(params.petId).then(pet => {
            this.setState({
                pet
            });
        });
    }

    render() {
        if (!this.state.pet) {
            return (
                <div>Hold tight...we're getting your pet's info!</div>
            )
        }
        return (
            <div className="PetView" id="individualPetView">
                
                <div id="tableHead">
                    <div className="petPictureContainer">
                        <img className="petPicture" src={ this.state.pet.imgSrc } alt="{ pet.name }"/>
                    </div>
                    <div className="petInfoHeader">
                        <h1 id="petName">{ this.state.pet.name }</h1>
                        <h3>{ this.state.pet.species }</h3>
                        <h3>{ this.state.pet.birthMonth }/{ this.state.pet.birthYear }</h3>
                        <h3>{ this.state.pet.age } years</h3>
                    </div>
                </div>

                <div id="petInfoTable">
                    <table>
                        <tbody>
                            <tr>
                                <th>Breed</th>
                                <td>{ this.state.pet.breed }</td>
                            </tr>
                            <tr>
                                <th>Sex</th>
                                <td>{ this.state.pet.sex }</td>
                            </tr>
                            <tr>
                                <th>Food</th>
                                <td>{ this.state.pet.food }</td>
                            </tr>
                            <tr>
                                <th>Veterinarian</th>
                                <td>PuppyTab Vet Clinic</td>
                            </tr>
                            <tr>
                                <th>Vet Contact Info</th>
                                <td>(123)456-7891</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="petInfoRemimders">
                    <h2 className="bigText">Reminders</h2>
                    <h3 className="smallText">{ this.state.pet.name } is up to date on vaccines.</h3>
                    <h2 className="bigText">Next Due</h2>
                    <h3 className="smallText">Vaccinations: { this.state.pet.reminders?.vaccines }</h3>
                    <h3 className="smallText">Preventative { this.state.pet.reminders?.preventative }</h3>
                </div>

            </div>
        );
    };
};

export default PetView;