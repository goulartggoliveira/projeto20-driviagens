import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
  console.log(error);

  if (error.type === "validationError") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "notFound") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  if (error.type === "conflict") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === "badResult") {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }

  return res
    .status(httpStatus.UNPROCESSABLE_ENTITY)
    .send("generic error(teste para o erro padrão)");
}
