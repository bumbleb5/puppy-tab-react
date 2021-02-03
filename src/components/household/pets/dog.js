import Pet from './pet.js';

class Dog extends Pet {
    constructor(name, species, sex, birthYear, birthMonth, imgSrc, breed) {
        super(name, species, sex, birthYear, birthMonth, imgSrc);
        this._breed = breed;
    }
    get breed() {
        return this._breed;
    }
    get ageInSpeciesYears() {
        return this.age * 7;
    }
}

export default Dog;