import ExpenseService from "../../services/ExpenseService";
import LoaderUtils from "../../utils/BaseUtils/LoaderUtils";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
import RouterUtils from "../../utils/BaseUtils/RouterUtils";

const expenseService = new ExpenseService();

export const namespaced = true;

export const state = {};

export const getters = {
  getUserOptions: state => {
    return state.userOptions;
  }
};

export const mutations = {
  SET_USER_OPTIONS(state, payload) {
    state.userOptions = payload;
  }
};

export const actions = {
  fetchExpense() {
    let payload = {
      email: StoreUtils.rootGetters("user/getUserEmail")
    };

    let successAction = responseData => {
      StoreUtils.commit("table/SET_TABLE_DATA", responseData.expense);
      let loaderType = LoaderUtils.types.TABLE;
    };

    expenseService.fetchExpense(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  },
  createExpense() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    console.log("formbody =>", formBody);
    let payload = {
      category: formBody.category,
      description: formBody.description,
      cost: formBody.cost,
      email: formBody.email
    };
    let successAction = responseData => {
      //Save user info to the store
      StoreUtils.commit("user/SET_USER_INFO", responseData);

      //Route the User to the Dashboard
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
    };

    expenseService.createExpense(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  }
};
