import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { travelSchema } from "../schemas/travels.schema.js";
import { travelController } from "../controllers/travels.controllers.js";

const travelsRouter = Router()

travelsRouter.post("/travels", validateSchema(travelSchema), travelController.create)

export default travelsRouter