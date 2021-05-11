import React from 'react';
import { Link } from 'react-router-dom';
//import DogAgeCalculator from './dogAgeCalculator';
//import CatAgeCalculator from './catAgeCalculator';
import './ageCalculator.css';

class AgeCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: false,
            cat: false
        }
        //this.dogYears = this.dogYears.bind(this);
        //this.catYears = this.catYears.bind(this);
    }

    render() {
        return (
            <div>
    
                <nav className="calculator-nav"> 
                    <Link to="/catAgeCalculator" id="calculatorLink">Cat</Link>
                    <Link to="/dogAgeCalculator" id="calculatorLink">Dog</Link>
                </nav>
                
                <h1>Hello</h1>
            </div>
        )
    }
}

export default AgeCalculator;