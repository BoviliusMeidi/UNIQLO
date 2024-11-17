require('dotenv').config();
const { Pool } = require('pg');

const initialPool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'postgres'
});

const createDatabaseAndTables = async () => {
  try {
    const dbName = process.env.DB_DATABASE;

    const dbCheckQuery = `SELECT 1 FROM pg_database WHERE datname = $1`;
    const dbCheckResult = await initialPool.query(dbCheckQuery, [dbName]);

    if (dbCheckResult.rowCount === 0) {
      await initialPool.query(`CREATE DATABASE ${dbName}`);
      console.log(`Database "${dbName}" created successfully.`);
    } else {
      console.log(`Database "${dbName}" already exists.`);
    }

    const pool = new Pool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: dbName
    });
    await pool.end();
  } catch (err) {
    console.error("Error creating database or tables:", err);
  } finally {
    await initialPool.end();
  }
};

const poolPromise = createDatabaseAndTables();

module.exports = poolPromise;