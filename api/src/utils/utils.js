const cleanArrayMain = (arr) =>
    arr.map((elem) => {
        return {
            id: elem.cca3,
            name: elem.name.common,
            image: elem.flags[0],
            continent: elem.continents[0],
            subregion: elem.subregion,
            capital: elem.capital ? elem.capital[0] : 'Not found',
            area: elem.area,
            population: elem.population,
            };
    });

module.exports = { cleanArrayMain}