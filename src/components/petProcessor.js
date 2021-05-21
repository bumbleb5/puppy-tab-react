import React from 'react';
import { Dog, Cat, Pet } from './household/pets/allPets';
//takes in json returned object

function petProcessor (petObj) {
    // assigning raw data properties to new properties
    let newPet;
    let name = petObj.name;
    let species = petObj.species;
    let sex = petObj.sex;
    let birthMonth = petObj.birthMonth;
    let birthYear = petObj.birthYear;
    let imgSrc = petObj.imgSrc;
    if (!imgSrc) {
        imgSrc = 'media/cat.png';
    }
    let breed = petObj.breed;
    // creating new pet objects
    if (species === 'dog') {
        newPet = new Dog(name, species, sex, birthMonth, birthYear, imgSrc, breed);
    } else if (species === 'cat') {
        newPet = new Cat(name, species, sex, birthMonth, birthYear, imgSrc, breed);
    } else {
        newPet = new Pet(name, species, sex, birthMonth, birthYear, imgSrc);
    }
    return newPet;
}   

export default petProcessor;