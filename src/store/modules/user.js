export const namespaced = true;

export const state = {
  userInfo: {
    email:"boluokunaiya@gmail.com"
  },
  userRegPayload: {}
};

export const getters = {
  getUserEmail: state => {
    return state.userInfo.email;
  },
  getUserInfo: state => {
    return state.userInfo;
  },
  getUserRegPayload: state => {
    return state.userRegPayload;
  }
};

export const mutations = {
  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
  },
  SET_USER_REG_PAYLOAD(state, payload){
    state.userRegPayload = payload;
  }
};

export const actions = {};
