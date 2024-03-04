import dayjs from "dayjs"
import { errors } from "../errors/errors.js"
import { cityRepository } from "../repositories/cities.repository.js"
import { flightsRepository } from "../repositories/flights.repository.js"


async function create( origin, destination, date){
    const today = dayjs()
    const flightDate = dayjs(date, "DD-MM-YYYY")
    if (flightDate < today) throw errors.invalidFlightDate()

    if (origin === destination) throw errors.equalCities()

    const originCity = await cityRepository.findById(origin)
    const destinationCity = await cityRepository.findById(destination)
    if (!originCity || !destinationCity) throw errors.notFound("City")

    await flightsRepository.create(origin, destination, date)
}


async function getFlights(origin, destination){
    const flights = await flightsRepository.getFlights(origin, destination)
    return flights
    
}

export const flightServices = {
    create,
    getFlights
}