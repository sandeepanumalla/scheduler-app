let mysql = require("mysql");
require("dotenv").config();
// let db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Sandeep99!",
//     database: "new_schema"
// })

var db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  database: process.env.MYSQL_ADDON_DB,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("db is connected");
});

module.exports = db;
