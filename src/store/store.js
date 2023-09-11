import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    toDos: [
      { id: 0, content: "크크크크크크" },
      { id: 1, content: "카카카카카카카" },
    ],
  },
});
