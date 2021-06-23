let app = require('express')();
//let app = express();
let teachers = require('./routes/teacher');
let cors = require('cors');
let port = process.env.PORT || 5000;

app.use("/teachers", teachers);

app.listen(port, () => {
    console.log(`port is running on ${port}`)
})