import { db } from "../database/db.connection.js";

async function create(origin, destination, date) {
    await db.query(
        `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
        [origin, destination, date]
    )
}

async function findById(id) {
    const flight = await db.query(`SELECT * FROM flights WHERE id=$1;`, [id])
    return flight.rows[0]
}

async function getFlights(origin, destination){
    const a = []
    let q = `
    SELECT f.id, c1.name AS origin, c2.name AS destination, f.date 
	FROM flights f
	JOIN cities c1 ON origin = c1.id
	JOIN cities c2 ON destination = c2.id
	WHERE 1=1
    `

    if (origin) {
        a.push(origin)
        q += `AND c1.name=$${a.length} `
    }

    if (destination) {
        a.push(destination)
        q += `AND c2.name=$${a.length} `
    }

    const result = await db.query(q, a)
    return result.rows

}


export const flightsRepository = {
    create,
    findById,
    getFlights
};