import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/nav';
import Home from './components/home';
import AddPet from './components/addPet/addPet';
import About from './components/nav/about';
import Error from './components/nav/error';

function App() {
  return (
    <main className="App">
        <Nav />
        <Switch>
            <Route path="/addPet">
                <AddPet />
            </Route>
            <Route path="/about">
                <About />
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
