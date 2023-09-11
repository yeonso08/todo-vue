import axios from "axios";

export default function getToDos() {
  const url = "https://dummyjson.com/todos";
  return axios.get(url);
}
