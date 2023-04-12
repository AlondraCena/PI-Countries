// const { conn } = require('../src/db.js');
// const { Country } = require('../src/db')
// const axios = require('axios');
// const { cleanArrayMain } = require("../src/utils/utils");

// conn.sync({ force: true }).then(async () => {
//     try {
//         const apiCountriesRaw = (await axios.get("https://restcountries.com/v3/all")).data;
//         var apiCountries = cleanArrayMain(apiCountriesRaw)
//         const createCountries = await Country.bulkCreate(apiCountries)
        
//         console.log("created")
//     } catch (error) {
//         console.log("Error while adding countries")
//         console.log(error)}
// })
