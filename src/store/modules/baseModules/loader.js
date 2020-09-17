export const namespaced = true;

export const state = {
  blockingLoader: false,
  nonBlockingLoader: false,
  tableLoader: true,
  componentLoader: false,
  loaders: {
    BLOCKING: "loader/showBlockingLoader",
    NONBLOCKING: "loader/showNonBlockingLoader",
    TABLE: "loader/showTableLoader",
    COMPONENT: '"loader/showComponentLoader"'
  }
};
export const getters = {
  getLoader: state => loaderString => {
    switch (loaderString) {
      case state.loaders.BLOCKING:
        return state.loaders.BLOCKING;
      case state.loaders.NONBLOCKING:
        return state.loaders.NONBLOCKING;
      case state.loaders.TABLE:
        return state.loaders.TABLE;
      case state.loaders.COMPONENT:
        return state.loaders.COMPONENT;
      default:
        return state.loaders.BLOCKING;
    }
  }
};

export const mutations = {
  SET_BLOCKING_LOADER(state, status) {
    state.blockingLoader = status;
  },
  SET_NON_BLOCKING_LOADER(state, status) {
    state.nonBlockingLoader = status;
  },
  SET_TABLE_LOADER(state, status) {
    state.tableLoader = status;
  },
  SET_COMPONENT_LOADER(state, status) {
    state.componentLoader = status;
  }
};
export const actions = {
  showBlockingLoader({ commit }, status) {
    commit("SET_BLOCKING_LOADER", status);
  },
  showNonBlockingLoader({ commit }, status) {
    commit("SET_NON_BLOCKING_LOADER", status);
  },
  showTableLoader({ commit }, status) {
    commit("SET_TABLE_LOADER", status);
  },
  showComponentLoader({ commit }, status) {
    commit("SET_COMPONENT_LOADER", status);
  }
};
