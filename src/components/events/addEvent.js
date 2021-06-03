import React from 'react';
import AddVetEventForm from './addEventComponents/addVetEventForm';
import petService from '../../services/pet.service';
import './addEvent.css'


class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            eventPet: '',
            eventType: ''
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

    // handle pet select -> eventPetId
    // handle event select
    // handle form render
    // hanel form submission

    render() {
        return (
            <div>
                <div id="addEventSelectDiv">
                    <h1 className="addEventTitle">Add Event</h1>

                    <div id="addEventSelectionDiv">
                        <label htmlFor="eventPet" className="addEventSelectLabel">Pet</label>
                        <select id="eventPet" className="addEventSelect">
                            <option value="null">Select Pet</option>
                            {
                                this.state.pets.map(pet => {
                                return <option pet={ pet } value={ pet.name } key={ pet.id }>{ pet.name }</option>
                            })
                            }
                        </select>
                    </div>
      
                    <div id="addEventSelectionDiv">
                        <label htmlFor="eventType" className="addEventSelectLabel">Event Type</label>

                        <select id="eventType" className="addEventSelect">
                            <option value="veterinary">Veterinary</option>
                            <option value="grooming">Grooming</option>
                            <option value="medication">Medication</option>
                        </select>
                    </div>
                
                    <h2 className="addEventText">{ this.state.eventPet }</h2>

                    <h2 className="addEventText">{ this.state.eventType }</h2>
                </div>

                <div></div>

                <div>
                    {/* TODO switch (event type) */}
                    <AddVetEventForm pets={ this.state.pets } />
                </div>
                

            </div>
        );
    }
}

export default AddEvent;