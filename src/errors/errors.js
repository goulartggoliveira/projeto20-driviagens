function validationError(){
    return{
        type: "validationError",
        message: "error on validationSchema"
    }
}

function sameCity() {
    return {
        type: "conflict",
        message: `This city already exist`
    }
}

function invalidFlightDate() {
    return {
        type: "validationError",
        message: `Flight date is not correct!`
    }
}

function equalCities() {
    return {
        type: "conflict",
        message: `There are the same city!`
    }
}

function notFound(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} not found!`
    }
}

function badResult() {
    return {
        type: "badResult",
        message: `Bad result error!`
    }
}

export const errors = {
    validationError,
    sameCity,
    invalidFlightDate,
    equalCities,
    notFound,
    badResult
}