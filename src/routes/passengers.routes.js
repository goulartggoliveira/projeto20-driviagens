import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passengerSchema } from "../schemas/passengers.schema.js";
import { passengerController } from "../controllers/passengers.controllers.js";

const passengersRoute = Router()

passengersRoute.post("/passengers", validateSchema(passengerSchema), passengerController.create)
passengersRoute.get("/passengers/travels",)

export default passengersRoute