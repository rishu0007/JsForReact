const fetchData = async() => {
    const data = await fetch("imageinaryapi/com");
    const name = data.person?.name;
};