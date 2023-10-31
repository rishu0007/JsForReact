const fetchData = async (animalName) => {
    const data = await fetch(`imaginaryapi.com/searchTerm=${animalName}`);
    const name = data.person?.name;
};