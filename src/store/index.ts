import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    siteInfo: {
      href: '',
      title: '',
      keywards: [],
      description: '',
      icon: '',
      timestamp: 0,
      sortWeight: 0,
    },
    siteList: [],
    sites: [],
  },
  mutations: {
    SET_SITES(state, payload) {
      state.sites = payload;
    },
  },
  actions: {},
  getters: {
    sites: (state) => state.sites.sort((a: any, b: any) => b.sortWeight - a.sortWeight),
    tags: (state) => [
      ...new Set(
        state.sites.reduce((tol, item: any) => tol.concat(item.tags || []), [])
      ),
    ],
  },
  plugins: [createPersistedState()],
});
