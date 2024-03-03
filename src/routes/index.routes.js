import { Router } from "express";
import passengersRoute from "./passengers.routes.js";
import citiesRouter from "./cities.routes.js";
import flightRouter from "./flights.routes.js";
import travelsRouter from "./travels.routes.js";

const router = Router()

router.use(passengersRoute)
router.use(citiesRouter)
router.use(flightRouter)
router.use(travelsRouter)

export default router