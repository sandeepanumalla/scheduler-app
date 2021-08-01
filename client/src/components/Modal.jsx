import React, { useState } from "react";
import { setSchedule } from "../apis/set";
import "./style.css";
const Modal = ({ shouldOpen, letMeCloseModal, takeFullDate, teacher }) => {
  let { date, month, year } = takeFullDate;
  let [title, setTitle] = useState();
  let [task, setTask] = useState();
  let [from, setFrom] = useState();
  let [till, setTill] = useState();

  let handleSubmit = async () => {
    let { date, month, year } = takeFullDate;
    if (from && till) {
      let fromDate = year + ":" + month + ":" + date + " " + from.from + ":00";
      let Till = year + ":" + month + ":" + date + " " + till.till + ":00";
      const { TeacherId } = teacher;
      let Title = title;
      let teacherId = TeacherId;
      let data = await setSchedule({ teacherId, fromDate, Till, task, Title });
    } else {
      console.log(" from is undefined ");
    }

    //teacherId, fromDate, Till, task, Title
    // console.log(finalDate);

    // console.log("ressponse ", console.log(data));
  };
  return (
    <>
      {shouldOpen ? (
        <>
          <div className="modal">
            <div className="form">
              {teacher ? (
                <div className="title_container">
                  <label>For:</label>
                  <input
                    disabled="true"
                    value={teacher.Teacher}
                    type="text"
                  ></input>
                </div>
              ) : (
                <div>Please select teacher first</div>
              )}
              <div className="title_container">
                <label>Title:</label>
                <input
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                ></input>
              </div>
              <div className="task_container">
                <label>Task:</label>
                <input
                  onChange={(e) => {
                    setTask(e.target.value);
                  }}
                  type="text"
                ></input>
              </div>
              <div className="time_container">
                <label>From: </label>
                <input
                  type="text"
                  value={date + "-" + (month + 1) + "-" + year}
                  disabled={true}
                ></input>
                <input
                  style={{ display: "flex", justifyContent: "center" }}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  onClick={() => {
                    console.log("clicked");
                  }}
                  className="time"
                  type="text"
                ></input>
              </div>
              <div className="time_container">
                <label>Till: </label>
                <input
                  type="text"
                  value={date + "-" + (month + 1) + "-" + year}
                  disabled={true}
                ></input>
                <input
                  style={{ display: "flex", justifyContent: "center" }}
                  onChange={(e) => {
                    setTill(e.target.value);
                  }}
                  className="time"
                  type="time"
                ></input>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Submit
                </button>
              </div>
              <p>{JSON.stringify(takeFullDate)}</p>
            </div>
          </div>
          <div
            className="modal_container"
            onClick={() => {
              letMeCloseModal(false);
            }}
          ></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

//
// <div className="time_container">
//                 <div>
//                   <div>
//                     <label>Hours:</label>

//                   </div>
//                   <div>
//                     {" "}
//                     <label>Minutes</label>
//                     <input
//                       onChange={(e) => {
//                         setTime({ ...time, minutes: e.target.value });
//                       }}
//                       className="time"
//                       min="0"
//                       max="60"
//                       type="Number"
//                     ></input>
//                   </div>
//                 </div>
//                 <div>
//                   <div>
//                     <label>seconds</label>
//                     <input
//                       onChange={(e) => {
//                         setTime({ ...time, seconds: e.target.value });
//                       }}
//                       className="time"
//                       min="0"
//                       max="60"
//                       type="Number"
//                     ></input>
//                   </div>
//                   <div>
//                     <label>period</label>
//                     <select
//                       onChange={(e) => {
//                         setTime({ ...time, period: e.target.value });
//                       }}
//                     >
//                       <option value={"AM"}>AM</option>
//                       <option value={"PM"}>PM</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
