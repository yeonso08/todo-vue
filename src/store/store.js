import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    toDos: [
      { id: 0, content: "scratch" },
      { id: 1, content: "English" },
    ],
    newTodoContent: "",
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.toDos.push(payload);
    },
  },
  actions: {
    ADD_TODO({ commit }, payload) {
      commit("ADD_TODO", payload);
    },
  },
});
