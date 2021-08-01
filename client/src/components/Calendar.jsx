import React, { useEffect, useState } from "react";
import { getSchedules } from "../apis/get";
import "./style.css";

const Calendar = ({ takeMonth, takeYear, letMeSetModal, giveDate }) => {
  let [firstDay, setFirstDay] = useState();
  let [totalDays, setTotalDays] = useState();
  let [emptyblocks, setEmptyBlocks] = useState();
  let [days, setDays] = useState();

  let handleClick = (i, month, year) => {
    giveDate(i);
    letMeSetModal(true);
  };
  let now = new Date();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    let now = new Date();
    let firstDayOfMonth = new Date(takeYear, takeMonth, 1);
    let totalDaysInMonth = new Date(takeYear, takeMonth + 1, 0).getDate();
    setFirstDay(firstDayOfMonth);
    setTotalDays(totalDaysInMonth);
    let emptyblocks = firstDayOfMonth.getDay();
    setEmptyBlocks(emptyblocks);
  }, [takeYear, takeMonth]);

  let arr = [];
  for (let i = 1; i <= totalDays + emptyblocks; i++) {
    arr.push(i);
  }
  //setDays(arr);

  return (
    <>
      <div className="weeks">
        {weekDays.map((day) => (
          <p>{day}</p>
        ))}
      </div>
      <div className="blocks_container">
        {arr.map((i, index) => {
          return i > emptyblocks ? (
            <div
              onClick={() => {
                handleClick(i - emptyblocks, takeMonth, takeYear);
              }}
              className={
                i - emptyblocks === now.getDate() &&
                takeMonth === now.getMonth() &&
                takeYear === now.getFullYear()
                  ? `check_box today`
                  : `check_box`
              }
              key={index}
            >
              {i - emptyblocks}
            </div>
          ) : (
            <div
              onClick={() => {
                handleClick();
              }}
              key={index}
              className="not_check_box"
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Calendar;
