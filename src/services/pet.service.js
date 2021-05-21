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

export default {
    fetchPets
};