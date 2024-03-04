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

async function getPassengersTravel(name){

  const a = []
  let q = `
      SELECT CONCAT(p."firstName", ' ', p."lastName") AS "name", COUNT(t."passengerId") AS travels
          FROM passengers p
          LEFT JOIN travels t ON t."passengerId" = p.id
          WHERE 1=1
  `
  if (name) {
      a.push(`%${name}%`)
      q += `AND CONCAT(p."firstName", ' ', p."lastName") ILIKE $1 `
  }

  q += "GROUP BY p.id ORDER BY travels DESC;"

  const result = await db.query(q, a)
  return result.rows

}

export const passengersRepository = {
  create,
  findById,
  getPassengersTravel
};
