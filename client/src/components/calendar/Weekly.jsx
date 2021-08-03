import React, { useEffect, useRef, useState } from "react";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Weekly = ({ takePrev, takeNext }) => {
  let [state, setstate] = useState({
    arr: [],
    obj: {
      firstDay: "",
      lastDay: "",
      monthOfFirstDay: "",
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      currentDay: new Date().getDate(),
      day: new Date().getDay(),
    },
  });
  let { arr, obj } = state;

  useEffect(() => {
    let lastDay = obj.firstDay + 7;

    setstate((obj.lastDay = lastDay));
  }, []);

  const previous = usePrevious(takePrev);
  const next = usePrevious(takeNext);

  function arrangeWeek(arr, obj, operation) {
    let newObj;
    if (operation === "next") {
      let { currentMonth, firstDay, lastDay, currentYear } = obj;
      let lastDayOfCurrentMonth = new Date(
        currentYear,
        currentMonth,
        0
      ).getDate();
      console.log("last day of current month", lastDayOfCurrentMonth);
      if (lastDay === lastDayOfCurrentMonth) {
        if (currentMonth === 12) {
          currentYear = currentYear + 1;
          currentMonth = 1;
          lastDay = 1;
        } else {
          currentMonth = currentMonth + 1;
          lastDay = 1;
        }

        // also check the month that if it is december or not to increment the new year
      } else {
        lastDay++;

        for (let i = 0; i < 7; i++) {
          if (lastDay > lastDayOfCurrentMonth) {
            if (currentMonth === 12) {
              currentYear = currentYear + 1;
              currentMonth = 1;
              lastDay = 1;
            } else {
              currentMonth = currentMonth + 1;
              lastDay = 1;
            }

            // also check the month that if it is december or not to increment the new year
          }
          arr.push(lastDay++);
        }
        return {
          arr,
          newObj: {
            firstDay: arr[0],
            lastDay: arr[arr.length - 1],
            currentMonth: currentMonth,
            currentYear: currentYear,
          },
        };
      }
    } else if (operation === "previous") {
      let { firstDay, lastDay, currentMonth, currentYear } = obj;

      let currentDay = lastDay - 1;

      for (let i = 6; i >= 0; i--) {
        if (currentDay < 0) {
          if (currentMonth === 1) {
            currentMonth = 12;
            currentYear = currentYear - 1;
            currentDay = new Date(currentYear, currentMonth, 0).getDate();
          } else {
            currentDay = new Date(currentYear, currentMonth, 0).getDate();
          }
        }
        arr[i] = currentDay--;
      }
      return {
        arr,
        newObj: {
          firstDay: arr[0],
          lastDay: arr[arr.length - 1],
          currentMonth,
          currentYear,
        },
      };
    } else {
      let { day, currentDay, firstDay, lastDay, currentMonth, currentYear } =
        obj;
      let newCurrentDay = currentDay - 1;

      for (let i = day; i < 7; i++) {
        arr[i] = currentDay++;
      }
      //currentDay = currentDay - 1;
      for (let i = day - 1; i >= 0; i--) {
        if (newCurrentDay < 1) {
          if (currentMonth === 1) {
            currentMonth = 12;
            currentYear = currentYear - 1;
          } else {
            currentMonth = currentMonth - 1;
            newCurrentDay = new Date(currentYear, currentMonth, 0).getDate();
          }
        }
        arr[i] = newCurrentDay;
        newCurrentDay--;
      }
      return {
        arr,
        obj: {
          firstDay: arr[0],

          lastDay: arr[arr.length - 1],
          currentYear,
          currentMonth,
        },
      };
    }
  }

  useEffect(() => {
    if (previous !== takePrev) {
    } else if (next !== takeNext) {
    } else {
      //setstate(arrangeWeek(arr, obj));
      let { firstDay, lastDay } = obj;

      // setstate({...state,firstDay:firstDay})
      console.log(arrangeWeek(arr, obj));
    }
  }, [takeNext, takePrev, next, previous]);

  console.log(arr);
  return (
    <div className="weekly_container">
      <div>This is weekly</div>
    </div>
  );
};

export default Weekly;
