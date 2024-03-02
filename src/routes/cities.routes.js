import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { citiesSchema } from "../schemas/cities.schema.js";
import { cityController } from "../controllers/cities.controller.js";

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citiesSchema), cityController.create)

export default citiesRouter