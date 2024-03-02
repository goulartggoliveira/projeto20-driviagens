import httpStatus from "http-status"
import { cityServices } from "../services/cities.service.js"


async function create(req, res){
    const { name } = req.body

    await cityServices.create(name)
    res.sendStatus(httpStatus.CREATED)
}


export const cityController = {create}