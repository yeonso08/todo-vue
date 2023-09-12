import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    toDos: [
      { id: 0, todo: "leave" },
      { id: 1, todo: "Go Home" },
      { id: 2, todo: "Take a rest at home" },
    ],
    newTodoContent: "",
  },
  mutations: {
    ADD_TODO(state, payload) {
      const lastTodo = state.toDos[state.toDos.length - 1];
      const newId = lastTodo ? lastTodo.id + 1 : 0;
      state.toDos.push({ ...payload, id: newId });
    },
    DELETE_TODO(state, id) {
      state.toDos = state.toDos.filter(toDo => toDo.id !== id);
    },
  },
  actions: {
    ADD_TODO({ commit }, payload) {
      commit("ADD_TODO", payload);
    },
    DELETE_TODO({ commit }, id) {
      commit("DELETE_TODO", id);
    },
  },
});
