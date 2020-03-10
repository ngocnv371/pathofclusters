import Vue from "vue";
import Vuex from "vuex";
import passives from "../data/passives";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: ""
  },
  mutations: {
    setFilter(state, filter) {
      state.filter = filter;
    }
  },
  actions: {
    async setFilter(context, filter) {
      context.commit("setFilter", filter);
    }
  },
  getters: {
    filter(state) {
      return state.filter;
    },
    filteredPassives(state) {
      if (!state.filter) {
        return passives;
      }
      const filter = state.filter.toLocaleLowerCase();
      const items = passives.filter(
        p =>
          p.name.toLocaleLowerCase().includes(filter) ||
          p.stats.toLocaleLowerCase().includes(filter)
      );
      return items;
    }
  }
});
