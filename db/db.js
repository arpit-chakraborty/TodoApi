import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {Pool} = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'TODO',
    password: process.env.DB_PASS,
    port: 5432
});

export default pool;

//CREATE TABLE todos (id SERIAL PRIMARY KEY, text TEXT NOT NULL, completed BOOLEAN DEFAULT false);