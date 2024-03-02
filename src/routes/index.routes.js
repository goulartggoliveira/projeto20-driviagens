import { Router } from "express";
import passengersRoute from "./passengers.routes.js";
import citiesRouter from "./cities.routes.js";

const router = Router()

router.use(passengersRoute)
router.use(citiesRouter)

export default router