import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/nav';
import Home from './components/home';
import AddPet from './components/addPet/addPet';
import AddEvent from './components/events/addEvent';
import About from './components/nav/about';
import Error from './components/nav/error';
import petProcessor from './components/petProcessor';
import petService from './services/pet.service';

import PetView from './components/household/petView/petView';
import AddVetEventForm from './components/events/addEventComponents/addVetEventForm';
import AddMedEventForm from './components/events/addEventComponents/addMedEventForm';
import AddGroomingEventForm from './components/events/addEventComponents/addGroomingEventForm';
import EventList from './components/events/eventList/eventList';
import EventDetails from './components/events/eventList/eventDetails';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pets: []
        };
    }
    // TODO take out and give state to all child components
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
            <main className="App">
                <Nav />
                <Switch basename="/">
                    <Route path="/addPet">
                        <AddPet />
                    </Route>
                    <Route path="/addEvent">
                        <AddEvent />
                    </Route>
                    <Route path="/addVetEvent">
                        <AddVetEventForm />
                    </Route>
                    <Route path="/addMedEvent">
                        <AddMedEventForm />
                    </Route>
                    <Route path="/addGroomingEvent">
                        <AddGroomingEventForm />
                    </Route>
                    <Route path="/petView/:petId" component={ PetView }>
                    </Route>
                    <Route path="/eventList/:petId" component={ EventList }>
                    </Route>
                    <Route path="/eventDetails/:eventId" component={ EventDetails }>
                    </Route>
                    <Route exact path="/">
                        <Home pets={ this.state.pets }/>
                    </Route>
                    
                    <Route>
                        <Error />
                    </Route>
                </Switch>
            </main>
        );
    }
    
}

export default App;
