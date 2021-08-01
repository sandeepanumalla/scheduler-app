let db = require("../connection/connection");

exports.getTeachers = async (req, res) => {
  let getTeacher = "SELECT * from bh8skktn4hxrdqcocv5b.teachers;";
  db.query(getTeacher, (err, result) => {
    if (err) {
      return res.status(400).json("error in fetching teachers from db");
    } else {
      return res.status(200).json(result);
    }
  });
};