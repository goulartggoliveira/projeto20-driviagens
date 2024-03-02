import { errors } from "../errors/errors.js"
import { cityRepository } from "../repositories/cities.repository.js"


async function create(cityName){
    const sameCity = await cityRepository.cityName(cityName)
    if(sameCity)
        throw errors.sameCity()
    
    await cityRepository.create(cityName)
}


export const cityServices = {create}
