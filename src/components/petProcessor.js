import React from 'react';
//takes in json returned object

function getAge (birthYear, birthMonth) {
    let birthdate = new Date(birthYear, (birthMonth - 1));
    //difference in milliseconds
    let diff = Date.now() - birthdate.getTime();
    //milliseconds to years
    let diffYear = diff / 31536000000;
    //if less than one round to one decimal place
    if (diffYear < 1) {
        return parseFloat(diffYear.toFixed(1));
    } else {
        return Math.round(diffYear);
    }
}

function ageInCatYears (age) {
    if (age < 1) {
        if (age < .3) {
            return 4;
        } if (age >= .3) {
            return 10;
        }
    }
    if (age === 1) {
        return 15;
    }
    if (age === 2) {
        return 24;
    } 
    if (age === 3) {
        return 28;
    }
    else {
        let newAge = age - 2;
        return (newAge * 4) + 24;
    }
}

function ageInDogYears (age) {
    return age * 7;
}

function petProcessor (petObj) {
    let processedPet = {};

    processedPet.age = getAge(petObj._birthYear, petObj._birthMonth);
    processedPet.name = petObj._name;
    processedPet.species = petObj._species;
    processedPet.sex = petObj._sex;
    processedPet.imgSrc = petObj._imgSrc;

    if (processedPet.species === 'dog') {
        processedPet.breed = petObj._breed;
        processedPet.ageInSpeciesYears = ageInDogYears(processedPet.age);
    } else if (processedPet.species === 'cat') {
        processedPet.breed = petObj._breed;
        processedPet.ageInSpeciesYears = ageInCatYears(processedPet.age);
    }
    return processedPet;
}   

export default petProcessor;