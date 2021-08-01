import React, { useEffect, useState } from "react";
import { getSchedules } from "../apis/get";

const ScheduleModal = ({ isOpen, letMeCloseModal, date, teacherId }) => {
  //
  let getData = async () => {
    // let { TeacherId } = teacherId;
    if (teacherId != null) {
      let data = await getSchedules({ date, teacherId });
      //let data = await response.json();
      console.log("got data", data);
    } else {
      console.log("please select teacher first");
    }
  };

  useEffect(() => {
    if (isOpen) {
      getData();
    }
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <>
          <>
            {teacherId == null ? (
              <>
                <div className="modal">
                  <h3>Please select the teacher first</h3>
                  <div></div>
                </div>
                <div
                  className="modal_container"
                  onClick={() => {
                    letMeCloseModal(false);
                  }}
                ></div>
              </>
            ) : (
              <>
                <div className="modal">
                  <h3>Today's Schedule</h3>
                  <div></div>
                </div>
                <div
                  className="modal_container"
                  onClick={() => {
                    letMeCloseModal(false);
                  }}
                ></div>
              </>
            )}
          </>
        </>
      ) : null}
    </>
  );
};

export default ScheduleModal;
