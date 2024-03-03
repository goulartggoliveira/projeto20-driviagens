import { db } from "../database/db.connection.js";

async function create(firstName, lastName) {
  await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

async function findById(id) {
  const passenger = await db.query(`SELECT * FROM passengers WHERE id=$1;`, [id])
  return passenger.rows[0]
}

export const passengersRepository = {
  create,
  findById
};
