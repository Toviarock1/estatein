import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "estatein",
  password: "Bighead123.",
  port: 5432,
});

pool.connect();

export default pool;
