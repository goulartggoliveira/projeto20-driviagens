import { errors } from "../errors/errors.js";
import { flightsRepository } from "../repositories/flights.repository.js";
import { passengersRepository } from "../repositories/passengers.repository.js";
import { travelRepository } from "../repositories/travels.repository.js";



async function create(passengerId, flightId){
    const passenger = await passengersRepository.findById(passengerId)
    if(!passenger) throw errors.notFound("Passenger")

    const flight = await flightsRepository.findById(flightId)
    if(!flight) throw errors.notFound("Flight")

    await travelRepository.create(passengerId, flightId)
}

export const travelService = { create }