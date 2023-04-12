const { Router } = require("express")
const {getAllActHandler, createActivityHandler} = require("../handlers/activitiesHandler")

const activitiesRouter = Router();

activitiesRouter.get("/", getAllActHandler);

activitiesRouter.post("/", createActivityHandler)

module.exports = activitiesRouter


