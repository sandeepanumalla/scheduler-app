export let getTeachers = async () => {
  let response = await fetch(`http://localhost:5000/teachers/get`);
  let data = await response.json();
  return data;
};

export let getSchedules = async (body) => {
  let response = await fetch(`http://localhost:5000/schedules/get`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  let data = await response.json();
  return data;
};
