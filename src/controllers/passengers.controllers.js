import httpStatus from "http-status"
import { passengersService } from "../services/passengers.service.js"


async function create(req, res){
    const { firstName, lastName } = req.body

    await passengersService.create(firstName, lastName)
    res.sendStatus(httpStatus.CREATED)
}

export const passengerController = {create}