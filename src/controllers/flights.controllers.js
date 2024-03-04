import httpStatus from "http-status"
import { flightServices } from "../services/flights.service.js"
import dayjs from "dayjs"



async function create(req, res){
    const { origin, destination, date } = req.body

    await flightServices.create(origin, destination, date)
    res.sendStatus(httpStatus.CREATED)
}

async function getFlights(req, res){
    const { origin, destination } = req.query

    const flights = await flightServices.getFlights(origin, destination)

    const FlightsFormat = flights.map(flight => {
        const date = dayjs(flight.date).format("DD-MM-YYYY")
        return { ...flight, date }
    })

    res.send(FlightsFormat)
}

export const flightController = { create, getFlights }