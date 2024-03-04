import { errors } from "../errors/errors.js"
import { passengersRepository } from "../repositories/passengers.repository.js"

async function create(firstName, lastName){
    await passengersRepository.create(firstName, lastName)
}

async function getPassengersTravel(name){
    const travels = await passengersRepository.getPassengersTravel(name)

    if (travels.length > 10) throw errors.badResult()

    return travels
}

export const passengersService = {
    create,
    getPassengersTravel
}