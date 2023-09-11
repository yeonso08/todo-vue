import axios from "axios";

function setToDos(payload) {
  const url = "https://dummyjson.com/all/add";
  return axios.post(url, payload);
}

function getToDos() {
  const url = "https://dummyjson.com/todos";
  return axios.get(url);
}

export default { setToDos, getToDos };
