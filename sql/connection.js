const mysql = require("mysql");
require("dotenv").config();

console.log(process.env.DB_PASSWORD);
class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "127.0.0.1",
        user: "root",
        password: "root",
        database: "mydb",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
