export let getTeachers = async () => {
  let response = await fetch(`http://localhost:5000/teachers/get`);
  let data = await response.json();
  return data;
};
