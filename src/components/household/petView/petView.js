import React from 'react';
import "./petView.css";

const pet = {
    name: 'Pet',
    species: 'dog',
    sex: 'female',
    speutered: 'spayed',
    birthYear: '2016',
    birthMonth: '2',
    age: 5,
    breed: 'beagle',
    image: '../../../../media/paz.jpg',
    food: 'Eukanuba',
    currentOnVaccines: 'yes',
    reminders: {
        vaccines: '12/12/2021',
        preventative: '5/01/21'
    }
};

class PetView extends React.Component {
    render() {
        return (
            <div className="PetView" id="individualPetView">
                
                <div id="tableHead">
                    <div className="petPictureContainer">
                        <img className="petPicture" src={ pet.image } alt="{ pet.name }"/>
                    </div>
                    <div className="petInfoHeader">
                        <h1 id="petName">{ pet.name }</h1>
                        <h3>{ pet.species }</h3>
                        <h3>{ pet.birthMonth }/{ pet.birthYear }</h3>
                        <h3>{ pet.age } years</h3>
                    </div>
                </div>

                <div id="petInfoTable">
                    <table>
                        <tbody>
                            <tr>
                                <th>Breed</th>
                                <td>{ pet.breed }</td>
                            </tr>
                            <tr>
                                <th>Sex</th>
                                <td>{ pet.speutered} { pet.sex }</td>
                            </tr>
                            <tr>
                                <th>Food</th>
                                <td>{ pet.food }</td>
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
                    <h3 className="smallText">{ pet.name } is up to date on vaccines.</h3>
                    <h2 className="bigText">Next Due</h2>
                    <h3 className="smallText">Vaccinations: { pet.reminders.vaccines }</h3>
                    <h3 className="smallText">Preventative { pet.reminders.preventative }</h3>
                </div>

            </div>
        );
    };
};

export default PetView;