import { passengersRepository } from "../repositories/passengers.repository.js"

async function create(firstName, lastName){
    await passengersRepository.create(firstName, lastName)
}

export const passengersService = {
    create
}