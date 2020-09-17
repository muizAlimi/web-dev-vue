import TodoService from "../../services/TodoService";
import LoaderUtils from "../../utils/BaseUtils/LoaderUtils";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
import RouterUtils from "../../utils/BaseUtils/RouterUtils";

const todoService = new TodoService();

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
  fetchTodoList() {
    let payload = {};

    let successAction = responseData => {
      StoreUtils.commit("table/SET_TABLE_DATA", responseData);
      let loaderType = LoaderUtils.types.TABLE;
    };

    todoService.fetchTodoList(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  },
  deleteTodo() {
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

    todoService.fetchTodoList(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  }
};
