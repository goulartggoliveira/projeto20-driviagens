import httpStatus from "http-status"
import { passengersService } from "../services/passengers.service.js"


async function create(req, res){
    const { firstName, lastName } = req.body

    await passengersService.create(firstName, lastName)
    res.sendStatus(httpStatus.CREATED)
}

async function getPassengersTravel(req, res){
    const { name } = req.query
    const passenger = await passengersService.getPassengersTravel(name)

    const formattedTravels = passenger.map(travel => {
        return {...travel, travels: parseInt(travel.travels)}
    })

    res.send(formattedTravels)
}

export const passengerController = {create,
getPassengersTravel}