import httpStatus from "http-status"
import { flightServices } from "../services/flights.service.js"



async function create(req, res){
    const { origin, destination, date } = req.body

    await flightServices.create(origin, destination, date)
    res.sendStatus(httpStatus.CREATED)
}

async function getFlights(req, res){
    const { origin, destination } = req.query

    const flights = await flightServices.getFlights(origin, destination)
    res.send(flights)
}

export const flightController = { create, getFlights }