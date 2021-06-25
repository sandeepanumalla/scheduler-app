import React from "react";
import "./style.css";
const Modal = ({ shouldOpen, letMeCloseModal, takeFullDate }) => {
  let { date, month, year } = takeFullDate;
  let arr = [];
  for (let i = 1; i <= 12; i++) {
    arr.push(i);
  }
  return (
    <>
      {shouldOpen ? (
        <>
          <div className="modal">
            <div className="form">
              <div>
                <label>Title:</label>
                <input type="text"></input>
              </div>
              <div>
                <label>Task:</label>
                <input type="text"></input>
              </div>
              <div>
                <label>Date:</label>
                <input
                  type="text"
                  value={date + "-" + (month + 1) + "-" + year}
                  disabled={true}
                ></input>
              </div>
              <div className="time_container">
                <div>
                  <div>
                    <label>Hours:</label>
                    <input
                      className="time"
                      min="0"
                      max="12"
                      type="Number"
                    ></input>
                  </div>
                  <div>
                    {" "}
                    <label>Minutes</label>
                    <input
                      className="time"
                      min="0"
                      max="60"
                      type="Number"
                    ></input>
                  </div>
                </div>
                <div>
                  <div>
                    <label>seconds</label>
                    <input
                      className="time"
                      min="0"
                      max="60"
                      type="Number"
                    ></input>
                  </div>
                  <div>
                    <label>period</label>
                    <select>
                      <option value={"AM"}>AM</option>
                      <option value={"PM"}>PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <button>Submit</button>
                <button>View Schedules</button>
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
