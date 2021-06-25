const { getSchedules, addSchedule } = require("../controller/schedules");

let router = require("express").Router();

router.post("/get", getSchedules);
router.post("/book", addSchedule);

module.exports = router;
