import httpStatus from "http-status"
import { flightServices } from "../services/flights.service.js"



async function create(req, res){
    const { origin, destination, date } = req.body

    await flightServices.create(origin, destination, date)
    res.sendStatus(httpStatus.CREATED)
}

export const flightController = { create }