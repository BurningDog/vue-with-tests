import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export const state = {
  donutsTotal: 0,
  people: []
};

export const actions = {
  loadPeople({ commit }) {
    Axios.get("http://localhost:3000/people").then(res => {
      commit("UPDATE_PEOPLE", res.data);
    });
  }
};

export const mutations = {
  UPDATE_PEOPLE(state, people) {
    state.people = people;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
