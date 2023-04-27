const { Country, Activity } = require("../db");
const axios = require("axios");

const getAllActivities= async () =>{

   let allActivities = await Activity.findAll({ 
    include:[{
        model: Country,
        attributes: ["name"],
        through:{
            attributes:[] //no quiero datos de tabla intermedia
        }
}]});
   //const minus = allActivities.map(e => e.name.toLowerCase())
   return allActivities;
};

const createActivity = async (name, difficulty, duration, season, countries) =>{
    const newAct = await Activity.create({ name, difficulty, duration, season,});
       
    const dbCountries = await Country.findAll({ where: { name: countries } });
        await newAct.setCountries(dbCountries);
    
    return newAct
}; 


module.exports = {getAllActivities, createActivity}