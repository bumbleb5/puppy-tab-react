
const fetchEvents = async (petId) => {
    return await fetch(`/pets/${petId}/events`)
    .then(res => res.json())
    .then(data => {
        let eventArr = data;
        eventArr = eventArr.map(event => {
            return event;
        });
        return eventArr;
    });
}

export default {
    fetchEvents
};



