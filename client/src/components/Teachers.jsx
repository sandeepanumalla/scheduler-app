import React, { useEffect, useState } from "react";
import { getTeachers } from "../apis/get";

const Teachers = ({ giveSelected }) => {
  const [teachers, setTeachers] = useState();
  const [selectedTeacher, setselectedTeacher] = useState();
  let getData = async () => {
    let data = await getTeachers();
    console.log("data", data);
    setTeachers(data);
    return data;
  };
  useEffect(() => {
    getData();
  }, []);
  //console.log("eajdf", teachers);
  return (
    <div>
      Teachers to schedule
      <ul>
        {teachers &&
          teachers.map((teacher, index) => {
            return (
              <li key={index}>
                {selectedTeacher &&
                selectedTeacher.TeacherId == teacher.TeacherId ? (
                  <button
                    key={index}
                    onClick={() => {
                      setselectedTeacher(teacher);
                      giveSelected(teacher);
                    }}
                    className="clicked"
                  >
                    {teacher.Teacher}
                  </button>
                ) : (
                  <button
                    key={index}
                    onClick={() => {
                      setselectedTeacher(teacher);
                      giveSelected(teacher);
                    }}
                  >
                    {teacher.Teacher}
                  </button>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Teachers;
