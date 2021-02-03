import './App.css';
import Nav from './components/nav/nav';
import Household from './components/household/household.js';
import petArr from './components/household/pets/allPets.js';

function App() {
  return (
    <div className="App">
        <Nav />
        <Household pets={ petArr }/>
    </div>
  );
}

export default App;
