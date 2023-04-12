const {getAllActivities, createActivity} = require("../controllers/activitiesController")

const getAllActHandler = async (req, res) => {
    const results = await getAllActivities()
    res.status(200).json(results);
}

const createActivityHandler = async (req, res) => {
    const { name, difficulty, duration, season } = req.body;

  try {
    const newAct = await createActivity(name, difficulty, duration, season);
    res.status(201).json("Creado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {getAllActHandler, createActivityHandler}