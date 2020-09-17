export const namespaced = true;

export const state = {
  tableData: []
};

export const getters = {
  getTableData: state => {
    return state.tableData;
  }
};

export const mutations = {
  SET_TABLE_DATA(state, payload) {
    state.tableData = payload;
  }
};

export const actions = {};
