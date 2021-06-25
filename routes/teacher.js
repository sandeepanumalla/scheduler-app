const { getTeachers } = require("../controller/teacher");

let router = require("express").Router();

router.get("/get", getTeachers);

module.exports = router;
