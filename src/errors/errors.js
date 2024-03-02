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
export const errors = {
    validationError,
    sameCity
}