import httpStatus from "http-status"

export default function errorHandler(error, req, res, next){
    console.log(error)

    if (error.type === "validationError"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }

    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send("generic error(teste para o erro padrão)")
    
    }