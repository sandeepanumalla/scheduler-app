import React, { useEffect, useState } from "react";

import "./style.css";
const Header = ({ setFilter, giveYear, giveMonth }) => {
  const [localfilters, setLocalFilters] = useState("monthly");
  let date = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [day, setDay] = useState(date.getDate());
  let [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  let handleFilter = (e) => {
    setFilter(e.target.value);
    setLocalFilters(e.target.value);
  };

  useEffect(() => {
    if (month < 0) {
      let d = new Date();
      d.setMonth(11);
      //
      setMonth(d.getMonth());

      setYear(year - 1);
    } else if (month > 11) {
      let d = new Date();
      d.setMonth(0);
      //
      setMonth(d.getMonth());
      setYear(year + 1);
    }
    giveMonth(month);
    giveYear(year);
  }, [month]);

  return (
    <div className="header_container">
      {localfilters == "daily" ? (
        <p>
          {day} {months[month]} {year}
        </p>
      ) : (
        <p>
          {months[month]} {year}
        </p>
      )}

      <div className="btns">
        <button
          onClick={() => {
            return setMonth(month - 1);
          }}
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            return setMonth(month + 1);
          }}
        >
          {">"}
        </button>
      </div>
      <div className="filters">
        <select
          onChange={(e) => {
            handleFilter(e);
          }}
          name="list"
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
