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

  updateToDOs(payload) {
    const url = `https://dummyjson.com/todos/${payload.id}`;
    return axios.put(
      url,
      {
        completed: payload.isCompleted,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  },

  deleteToDOs(id) {
    const url = `https://dummyjson.com/todos/${id}`;
    return axios.delete(url);
  },
};
