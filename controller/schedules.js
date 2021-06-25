const db = require("../connection/connection");

exports.addSchedule = async (req, res) => {
  let { teacherId, fromDate, Till, task, Title } = await req.body;

  console.log(await req.body);
  let checkQuery = `SELECT * FROM bh8skktn4hxrdqcocv5b.schedule_table WHERE TeacherId = ${teacherId} and fromDate <= "${fromDate}" AND Till > "${fromDate};"`;
  console.log(checkQuery);
  db.query(checkQuery, (err, result) => {
    if (err) {
      console.log("this is error, ", err);
    } else {
      console.log(result.length);
      if (result.length == 0) {
        let insertQuery = `INSERT INTO bh8skktn4hxrdqcocv5b.schedule_table values (default, ${teacherId}, "${fromDate}", "${Till}", "${task}", "${Title}");`;
        db.query(insertQuery, (err, result) => {
          if (err) {
            console.log(err);
            return res.status(401).json("error in adding schedule");
          } else {
            return res.status(200).json(result);
          }
        });
      } else {
        return res
          .status(400)
          .json(
            "schedule for same time alrady booked.please choose another time"
          );
      }
    }
  });
};

exports.getSchedules = async (req, res) => {
  let { date, teacherId } = req.body;
  let getQuery = `select * from bh8skktn4hxrdqcocv5b.schedule_table
    where TeacherId = ${teacherId} and fromDate >= "${date}";`;
  db.query(getQuery, (err, result) => {
    if (err) {
      res.status(401).json("err in getting schedules");
    } else {
      res.json(result);
    }
  });
};
