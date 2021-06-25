let express = require("express");
let app = express();
let teachers = require("./routes/teacher");
let schedules = require("./routes/schedules");
let cors = require("cors");
let port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/teachers", teachers);
app.use("/schedules", schedules);

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
