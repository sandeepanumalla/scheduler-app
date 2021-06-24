import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import Teachers from "./Teachers";

import "./style.css";

const Main = () => {
  let [filter, setfilter] = useState();
  let [month, setMonth] = useState();
  let [year, setYear] = useState();
  let [selected, setSelected] = useState();

  useEffect(() => {
    console.log(month, year);
  }, [month, year]);
  return (
    <>
      <Header giveMonth={setMonth} giveYear={setYear} setFilter={setfilter} />

      <div className="main_container">
        <div className="teachers">
          <Teachers giveSelected={setSelected} />
        </div>
        <div className="calendar">
          <Calendar takeMonth={month} takeYear={year} filter={filter} />
        </div>
        <button>open modal</button>
      </div>
    </>
  );
};

export default Main;
