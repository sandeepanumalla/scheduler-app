import React, { useEffect, useRef, useState } from "react";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Weekly = ({ takePrev, takeNext }) => {
  const [currentDate, setcurrentDate] = useState(new Date().getDate());
  const [currentYear, setcurrentYear] = useState(new Date().getFullYear());
  const [currentDateDay, setCurrentDateDay] = useState(new Date().getDay());
  const [firstDayOfLastWeek, setfirstDayOfLastWeek] = useState();
  const [firstDayOfNextWeek, setfirstDayOfNextWeek] = useState();
  const [currentMonth, setcurrentMonth] = useState(new Date().getMonth());
  const arr = [];

  const previous = usePrevious(takePrev);
  const next = usePrevious(takeNext);

  function arrangeWeek(arr){
    let increment = currentDate;
      let lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
     // console.log("29", lastDayOfMonth);
      if (currentDateDay > 0) {
        let decrement = currentDate - 1;
        for (let i = currentDateDay - 1; i >= 0; i--) {
          arr[i] = decrement;
          decrement--;
        }
      }
      for (let i = currentDateDay; i < 7; i++) {
      //  console.log("last day" + lastDayOfMonth);
        console.log("current month" + currentMonth);
        if (lastDayOfMonth === increment) {
          if (currentMonth === 12) {
            let newYear = currentYear + 1;
            setcurrentYear(newYear);
            setcurrentMonth(1);
          } else {
            arr[i] = lastDayOfMonth;
            let newMonth = currentMonth + 1;
            setcurrentMonth(newMonth);
          }
        }
        arr[i] = increment;
        increment++;
      }
      let lastElement = arr[arr.length - 1];
      if (currentMonth === 1) {
        let year = currentYear - 1;
        let lastDate = new Date(year, 12, 0);
        if (lastDate === lastElement) {
          setfirstDayOfNextWeek(1);
        } else {
          setfirstDayOfNextWeek(lastElement);
        }
      } else {
        let lastDateOfMonth = new Date(currentYear,currentMonth, 0);
        console.log(lastDateOfMonth);
        if (lastElement === lastDateOfMonth) {
          setfirstDayOfNextWeek(lastElement);
        } else {
          setfirstDayOfNextWeek(1);
        }

        setfirstDayOfLastWeek(arr[0]);
      }
      return arr;
  }

  useEffect(() => {
    if (previous !== takePrev) {
    } else if (next !== takeNext) {
    } else {
    //   let increment = currentDate;
    //   let lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    //  // console.log("29", lastDayOfMonth);
    //   if (currentDateDay > 0) {
    //     let decrement = currentDate - 1;
    //     for (let i = currentDateDay - 1; i >= 0; i--) {
    //       arr[i] = decrement;
    //       decrement--;
    //     }
    //   }
    //   for (let i = currentDateDay; i < 7; i++) {
    //   //  console.log("last day" + lastDayOfMonth);
    //     console.log("current month" + currentMonth);
    //     if (lastDayOfMonth === increment) {
    //       if (currentMonth === 12) {
    //         let newYear = currentYear + 1;
    //         setcurrentYear(newYear);
    //         setcurrentMonth(1);
    //       } else {
    //         arr[i] = lastDayOfMonth;
    //         let newMonth = currentMonth + 1;
    //         setcurrentMonth(newMonth);
    //       }
    //     }
    //     arr[i] = increment;
    //     increment++;
    //   }
    //   let lastElement = arr[arr.length - 1];
    //   if (currentMonth === 1) {
    //     let year = currentYear - 1;
    //     let lastDate = new Date(year, 12, 0);
    //     if (lastDate === lastElement) {
    //       setfirstDayOfNextWeek(1);
    //     } else {
    //       setfirstDayOfNextWeek(lastElement);
    //     }
    //   } else {
    //     let lastDateOfMonth = new Date(currentYear,currentMonth, 0);
    //     console.log(lastDateOfMonth);
    //     if (lastElement === lastDateOfMonth) {
    //       setfirstDayOfNextWeek(lastElement);
    //     } else {
    //       setfirstDayOfNextWeek(1);
    //     }

    //     setfirstDayOfLastWeek(arr[0]);
    //   }
    console.log(arrangeWeek(arr));
    }
  }, [takeNext, takePrev, next, previous]);

  console.log(arr);
  return (
    <div className="weekly_container">
      <div>{JSON.stringify(...arr)}</div>
    </div>
  );
};

export default Weekly;
