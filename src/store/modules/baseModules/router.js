export const namespaced = true;

export const state = {
  activeRoute: "dashboard"
};

export const getters = {
  getActiveRoute: state => {
    return state.activeRoute;
  }
};

export const mutations = {
  SET_ACTIVE_ROUTE(state, payload) {
    state.activeRoute = payload;
  }
};
export const actions = {
  setActiveRoute({ commit }, payload) {
    // console.log("setActiveRoute ==>", payload)
    commit("SET_ACTIVE_ROUTE", payload);
  }
};
