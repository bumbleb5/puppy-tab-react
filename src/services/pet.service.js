import petProcessor from '../components/petProcessor';

const fetchPets = async () => {
    return await fetch('/pets')
    .then(res => res.json())
    .then(data => {
        let petArr = data;
        petArr = petArr.map(pet => {
            return petProcessor(pet);
        });
        return petArr;
    });
}

const fetchPet = async (petId) => {
    return await fetch('/pets/' + petId)
    .then(res => res.json())
    .then(data => {
        return petProcessor(data);
    });
}


export default {
    fetchPets,
    fetchPet
};