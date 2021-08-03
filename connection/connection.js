let mysql = require("mysql");
require("dotenv").config();
// let db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Sandeep99!",
//     database: "new_schema"
// })
var db;
function handleDisconnect() {
  db = mysql.createConnection({
    host: process.env.MYSQL_ADDON_HOST,
    database: process.env.MYSQL_ADDON_DB,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
  });

  db.connect(function (err) {
    if (err) {
      console.log("error when connecting to db: ", err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log("db connected successfully");
    }
  });

  db.on("error", function (err) {
    console.log("db error", db);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = db;
