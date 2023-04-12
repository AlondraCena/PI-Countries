const { Country, Activity } = require("../db");
const axios = require("axios");

const getAllActivities= async () =>{
//     const url = (await axios.get("https://restcountries.com/v3/all")).data;

//     const tempApiRaw = await url.map((item) => item.temperament?.split(', ')).flat()

//     const cleanArray = new Set(tempApiRaw)
   
//     cleanArray.forEach(async (item) => {
//         if (item) {
//           await Temperaments.findOrCreate({
//             where: { name: item }
//           })
//         }
//       })

   let allActivities = await Activity.findAll({ include: Country });
   //const minus = allActivities.map(e => e.name.toLowerCase())
   return allActivities;
};

const createActivity = async (name, difficulty, duration, season) =>{
    const newAct = await Activity.create({ name, difficulty, duration, season,
        include: { model: Country}});
       return newAct
}; 


module.exports = {getAllActivities, createActivity}