const { Country, Activity } = require("../db");
const {Op} = require('sequelize');

const getAll = async () =>{
    
    const dbCountries = await Country.findAll({
        include:[{
            model: Activity,
            attributes: ["name"],
            through:{
                attributes:[] //no quiero datos de tabla intermedia
            }
        }]
    });
    return dbCountries;
};

const getCountryById = async (id) =>{

           const dbCountry = await Country.findByPk(id, {
              include: {
              model: Activity,
              attributes: ["name"],
              through:{
                  attributes:[] //no quiero datos de tabla intermedia
              }
              },
          }) 
          
          return dbCountry
      
};

const searchCountryByName = async (name) =>{
  
    const dbCountries = await Country.findAll({ 
        where: { 
            name:{
                [Op.iLike]: `%${name}%`
            }
        },
        include:{
            model: Activity,
            attributes: ["name"],
            through:{
                attributes:[] //no quiero datos de tabla intermedia
            }
        },
     })
    return dbCountries;
};


module.exports = { getAll, getCountryById, searchCountryByName}