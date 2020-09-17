import AuthServices from "../../services/AuthServices";
import LoaderUtils from "../../utils/BaseUtils/LoaderUtils";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
import RouterUtils from "../../utils/BaseUtils/RouterUtils";
const authService = new AuthServices();

export const namespaced = true;

export const state = {
  userOptions: {
    requestId: "",
    categoryId: "",
    insuranceCompanyId: "",
    username: ""
  }
};

export const getters = {
  getUserOptions: state => {
    return state.userOptions;
  },
  getRequestId: state => {
    return state.userOptions.requestId;
  },
  getCategoryId: state => {
    return state.userOptions.categoryId;
  },
  getInsuranceCompanyId: state => {
    return state.userOptions.insuranceCompanyId;
  },
  getUsername: state => {
    return state.userOptions.username;
  }
};

export const mutations = {
  SET_USER_OPTIONS(state, payload) {
    state.userOptions = payload;
  }
};

export const actions = {
  login() {
    let formBody = StoreUtils.rootGetters(StoreUtils.getters.form.GET_FORM_BODY)
    console.log("formbody =>", formBody);
    let payload = {
      userID: formBody.userID,
      password: formBody.password
    };
    let successAction = responseData => {
      //Save user info to the store
      StoreUtils.commit("user/SET_USER_INFO", responseData);

      //Route the User to the Dashboard
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
    };

    authService.login(payload, successAction, LoaderUtils.types.BLOCKING);
  },
  registrationInit(){
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    let payload = {
      email: formBody.email,
      firstName: formBody.firstName,
      lastName: formBody.lastName
    };
    let successAction = responseData => {
      StoreUtils.commit("form/INCREASE_FORM_STAGE_BY_ONE");
      let responsePayload = {
        uniqueRef: responseData.uniqueRef,
        email: formBody.email
      };
      StoreUtils.commit("user/SET_USER_REG_PAYLOAD", responsePayload);
    };

    authService.registrationInit(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  },
  registrationComplete(){
    let formBody = StoreUtils.rootGetters(
        StoreUtils.getters.form.GET_FORM_BODY
    );

    let userRegPayload = StoreUtils.rootGetters(StoreUtils.getters.user.GET_USER_REG_PAYLOAD);

    let payload = {
      username: formBody.username,
      token: formBody.token,
      password: formBody.password,
      email: formBody.email,
      uniqueRef: userRegPayload.uniqueRef
    };
    let successAction = responseData => {
      //Save user info to the store
      StoreUtils.commit("user/SET_USER_INFO", responseData);

      //Route the User to the Dashboard
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
    };

    authService.registrationComplete(
        payload,
        successAction,
        LoaderUtils.types.BLOCKING
    );
  }
};
