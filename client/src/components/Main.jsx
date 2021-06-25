import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import Header from "./Header";
import Teachers from "./Teachers";
import "./style.css";
import Modal from "./Modal";
import ScheduleModal from "./ScheduleModal";

const Main = () => {
  let [filter, setfilter] = useState();
  let [month, setMonth] = useState();
  let [year, setYear] = useState();
  let [date, setDate] = useState();
  let [selected, setSelected] = useState();
  let [modal, setModal] = useState(false);
  let [scheduleModal, setScheduleModal] = useState();

  useEffect(() => {
    console.log(month, year);
  }, [month, year]);

  return (
    <>
      <Header
        letSetModal={setScheduleModal}
        giveMonth={setMonth}
        giveYear={setYear}
        setFilter={setfilter}
      />
      <ScheduleModal
        letMeCloseModal={setScheduleModal}
        isOpen={scheduleModal}
      />
      <Modal
        takeFullDate={{ date, month, year }}
        letMeCloseModal={setModal}
        shouldOpen={modal}
      />

      <div className="main_container">
        <div className="teachers">
          <Teachers giveSelected={setSelected} />
        </div>
        <div className="calendar">
          <Calendar
            letMeSetModal={setModal}
            giveDate={setDate}
            takeMonth={month}
            takeYear={year}
            filter={filter}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
