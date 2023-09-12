import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    toDos: [
      { id: 0, todo: "scratch" },
      { id: 1, todo: "English" },
    ],
    newTodoContent: "",
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.toDos.push(payload);
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
