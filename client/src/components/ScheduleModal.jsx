import React, { useState } from "react";

const ScheduleModal = ({ isOpen, letMeCloseModal }) => {
  return (
    <>
      {isOpen ? (
        <>
          <div className="modal">This is modal</div>
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

export default ScheduleModal;
