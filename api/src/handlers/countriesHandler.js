const {getAll, getCountryById, searchCountryByName} = require("../controllers/countriesController")

const getAllHandler = async (req, res) => {
  try {
    const results = await getAll()
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data from API");
  }
};

const getCountryHandler = async (req, res) => {
    const { id } = req.params;
    try{
      const country = await getCountryById(id);

      if (!country) throw new Error("that country does not exist")
      res.status(200).json(country);
    } catch (error){
        res.status(400).json({ error: error.message });
    }
}; 

const getCountriesHandler = async (req, res) => {
    const { name } = req.query;
    
    try{
      const results = name
        ? await searchCountryByName(name) 
        : await getAll()

      
      res.status(200).json(results)

    } catch (error){
      res.status(400).json({ error: error.message });
  }
}; 

module.exports = {getAllHandler, getCountryHandler, getCountriesHandler}