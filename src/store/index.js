import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let state = {
  login_user: {},
  headerTitle: "Home Page",
  activeIndex: 1,
};

let mutations = {
  setLoggedinUser(state, payload) {
    state.login_user = payload;
  },
  setHeaderTitle(state, payload) {
    state.headerTitle = payload;
  },
  setActiveIndex(state, payload) {
    state.activeIndex = payload;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  getters: {},
  modules: {},
});
