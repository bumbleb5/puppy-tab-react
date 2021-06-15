import Pet from './pet.js';

class Dog extends Pet {
    constructor(name, species, sex, birthMonth, birthYear, imgSrc, id, breed) {
        super(name, species, sex, birthMonth, birthYear, imgSrc, id, breed);
        
    }
    
    get ageInSpeciesYears() {
        return this.age * 7;
    }
}

export default Dog;