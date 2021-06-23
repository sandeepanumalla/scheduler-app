let mysql = require('mysql');

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sandeep99!",
    database: "new_schema"
})

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log("db is connectioned")
})

module.exports = db;