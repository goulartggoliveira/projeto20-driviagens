import joi from "joi"

export const citiesSchema = joi.object({
    name: joi.string().required().min(2).max(50)
})