import axios from "axios";

export const ToDoAPI = {
  setToDos(payload) {
    const url = "https://dummyjson.com/todos/add";
    return axios.post(url, payload);
  },

  getToDos() {
    const url = "https://dummyjson.com/todos";
    return axios.get(url);
  },
};
