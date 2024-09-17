const db = require('./postgress');

const createDatabase = async (dbName) => {
    try {
        // Check if the database exists
        const res = await db.query(
            `SELECT 1 FROM pg_database WHERE datname = $1;`,
            [dbName]
        );

        if (res.rows.length === 0) {
            // Database doesn't exist, so create it
            await db.query(`CREATE DATABASE ${dbName};`);
            console.log("Database created.");
        } else {
            console.log("Database already exists.");
        }
    } catch (err) {
        console.error('Error: ', err);
    }
}

module.exports = createDatabase