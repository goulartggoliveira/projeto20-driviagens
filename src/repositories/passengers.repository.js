import { db } from "../database/db.connection.js";

async function create(firstName, lastName) {
  await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

export const passengersRepository = {
  create,
};
