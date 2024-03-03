import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { flightSchema } from "../schemas/flights.schema.js";
import { flightController } from "../controllers/flights.controllers.js";

const flightRouter = Router()

flightRouter.post("/flights", validateSchema(flightSchema), flightController.create)

export default flightRouter