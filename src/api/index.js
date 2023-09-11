import axios from "axios";

export default function setToDos(payload) {
  const url = "https://dummyjson.com/todos/add";
  return axios.post(url, payload);
}
