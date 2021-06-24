import React from "react";

const filter = () => {
  return (
    <>
      <select name="list">
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
        <option value="daily">Daily</option>
      </select>
    </>
  );
};

export default filter;
