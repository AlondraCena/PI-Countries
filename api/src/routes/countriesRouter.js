const { Router } = require("express")
const { getAllHandler, getCountryHandler, getCountriesHandler} = require("../handlers/countriesHandler")

const countriesRouter = Router();

countriesRouter.get("/", getAllHandler);

countriesRouter.get("/search", getCountriesHandler);

countriesRouter.get("/:id", getCountryHandler);

module.exports = countriesRouter