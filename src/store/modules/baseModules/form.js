import StoreUtils from "../../../utils/BaseUtils/StoreUtils";

export const namespaced = true;

export const state = {
  stage: 0,
  formBody: {}
};

export const getters = {
  getFormStage: state => {
    return state.stage;
  },
  getFormBody: state => {
    return state.formBody;
  }
};

export const mutations = {
  INCREASE_FORM_STAGE_BY_ONE(state) {
    state.stage += 1;
  },
  DECREASE_FORM_STAGE_BY_ONE(state) {
    state.stage -= 1;
  },
  SET_FORM_STAGE_TO(state, payload) {
    state.stage = parseInt(payload);
  },
  INCREASE_FORM_STAGE_BY(state, payload) {
    state.stage += parseInt(payload);
  },
  RESET_FORM_STAGE(state) {
    state.stage = 0;
  },

  BUILD_FORM_BODY(state, payload) {
    state.formBody = { ...state.formBody, ...payload };
  },
  RESET_FORM_BODY(state) {
    state.formBody = {};
  },
};

export const actions = {
  resetForm() {
    StoreUtils.commit("form/RESET_FORM_STAGE");
    StoreUtils.commit("form/RESET_FORM_BODY");
  },
  goBackToPreviousStage() {
    StoreUtils.commit("form/DECREASE_FORM_STAGE_BY_ONE");
  }
};
