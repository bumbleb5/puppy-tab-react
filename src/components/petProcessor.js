import React from 'react';
import { Dog, Cat, Pet } from './household/pets/allPets';
//takes in json returned object

function petProcessor (petObj) {
    // assigning raw data properties to new properties
    let newPet;
    let name = petObj._name;
    let species = petObj._species;
    let sex = petObj._sex;
    let birthMonth = petObj._birthMonth;
    let birthYear = petObj._birthYear;
    let imgSrc = petObj._imgSrc;
    let breed = petObj._breed;
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