const {getAllActivities, createActivity} = require("../controllers/activitiesController")

const getAllActHandler = async (req, res) => {
  try {  
    const results = await getAllActivities()
    res.status(200).json(results);
   } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

const createActivityHandler = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;

  try {
    const newAct = await createActivity(name, difficulty, duration, season, countries);
    res.status(201).json("Creado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {getAllActHandler, createActivityHandler}