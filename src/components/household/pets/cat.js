import Pet from './pet.js';

class Cat extends Pet {
    constructor(name, species, sex, birthYear, birthMonth, imgSrc, breed) {
        super(name, species, sex, birthYear, birthMonth, imgSrc);
        this._breed = breed;
    }
    get breed() {
        return this._breed;
    }
    get ageInSpeciesYears() {
        if (this.age < 1) {
            if (this.age < .3) {
                return 4;
            } if (this.age >= .3) {
                return 10;
            }
        }
        if (this.age === 1) {
            return 15;
        }
        if (this.age === 2) {
            return 24;
        } 
        if (this.age === 3) {
            return 28;
        }
        else {
            let base = 24;
            let newAge = this.age -2;
            return (newAge * 4) + 24;
        }
    }
}

export default Cat;