require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || null,
    user: process.env.USER || undefined,
    host: process.env.SERVER || undefined,
    database: process.env.DATABASE || undefined,
    password: process.env.PASSWORD || undefined,
    port: process.env.PG_PORT || undefined,
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
