import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/nav';
import Home from './components/home';
import AddPet from './components/addPet/addPet';
import AddEvent from './components/events/addEvent';
import About from './components/nav/about';
import Error from './components/nav/error';
import PetView from './components/household/petView/petView';

function App() {
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
            <Route path="/about">
                <About />
            </Route>
            <Route path="/petView">
                <PetView />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route>
                <Error />
            </Route>
        </Switch>
    </main>
  );
}

export default App;
