const { getTeachers } = require('../controller/teacher');

let router = require('express').Router();

router.get("/get", getTeachers);
// router.get("/get/appointments")
// router.post("/book/schedule",)

module.exports = router;