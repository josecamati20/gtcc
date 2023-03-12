import mysql from "mysql";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "tcc",
  password: "",
});

export default pool;
