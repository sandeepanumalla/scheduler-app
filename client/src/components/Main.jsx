import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import Teachers from "./Teachers";
import "./style.css";
import Modal from "./Modal";
import ScheduleModal from "./ScheduleModal";
import Weekly from "./calendar/Weekly";

const Main = () => {
  let [filter, setfilter] = useState("monthly");
  let [month, setMonth] = useState();
  let [year, setYear] = useState();
  let [date, setDate] = useState();
  let [selected, setSelected] = useState();
  let [modal, setModal] = useState(false);
  let [scheduleModal, setScheduleModal] = useState();
  let [prev, setPrev] = useState();
  let [next, setNext] = useState();

  useEffect(() => {
    console.log(month, year);
  }, [month, year]);

  function viewCalendar() {
    if (filter === "monthly") {
      return (
        <Calendar
          letMeSetModal={setModal}
          giveDate={setDate}
          takeMonth={month}
          takeYear={year}
          filter={filter}
        />
      );
    } else if (filter === "weekly") {
      return <Weekly takePrev={prev} takeNext={next}></Weekly>;
    } else if (filter === "daily") {
      return <h1>This is daily</h1>;
    } else {
      return <h1>{JSON.stringify(filter)}</h1>;
    }
  }

  return (
    <>
      <Header
        letSetModal={setScheduleModal}
        giveMonth={setMonth}
        giveYear={setYear}
        setFilter={setfilter}
        takePrev={setPrev}
        takeNext={setNext}
      />
      <ScheduleModal
        letMeCloseModal={setScheduleModal}
        isOpen={scheduleModal}
        teacherId={selected}
        date={`${year}:${month}:${month}`}
      />
      <Modal
        takeFullDate={{ date, month, year }}
        letMeCloseModal={setModal}
        shouldOpen={modal}
        teacher={selected}
      />

      <div className="main_container">
        <div className="teachers">
          <Teachers giveSelected={setSelected} />
        </div>
        <div className="calendar">
          {filter && viewCalendar()}

          <button className="add_button">+</button>
        </div>
      </div>
    </>
  );
};

export default Main;
