import { db } from "../database/db.connection.js"

async function cityName(cityName) {
    const cities = await db.query(`SELECT * FROM cities WHERE name=$1;`, [cityName])
    return cities.rows[0]
}

async function create(cityName){
    await db.query(`INSERT INTO cities (name) VALUES ($1);`, [cityName])
}

async function findById(id) {
    const cities = await db.query(`SELECT * FROM cities WHERE id=$1;`, [id])
    return cities.rows[0]
}


export const cityRepository = {
    cityName,
    create,
    findById
}