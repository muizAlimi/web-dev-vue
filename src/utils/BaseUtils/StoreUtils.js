import store from "../../store/store";

class StoreUtils {
  static actions = {
    loader: {
      showBlockingLoader: "loader/showBlockingLoader",
      showNonBlockingLoader: "loader/showNonBlockingLoader",
      showTableLoader: "loader/showTableLoader",
      showComponentLoader: "loader/showComponentLoader"
    },
    notification: {
      addNotificationSlide: "notification/addNotificationSlide",
      removeNotificationSlide: "notification/removeNotificationSlide",
      showNotificationModal: "notification/showNotificationModal",
      closeNotificationModal: "notification/closeNotificationModal"
    },
    router: {
      setActiveRoute: "router/setActiveRoute"
    },
    auth: {
      LOGIN: "auth/login",
      REGISTER: "auth/createProfile",
      FORGOT_PASSWORD: "auth/forgotPassword",
      INIT_APP: "auth/initApp",
      LOGOUT: "auth/logOut"
    },
    user: {
      SET_USER_INFO: "user/setUserInfo"
    },
    company: {
      SET_NEW_COMPANY: "company/setNewCompany"
    }
  };

  static getters = {
    router: {
      GET_ACTIVE_ROUTE: "router/getActiveRoute"
    },
    auth: {},
    user: {
      GET_USER_EMAIL: "userAccount/getUserEmail",
      GET_USER_REG_PAYLOAD: "user/getUserRegPayload"
    },
    form: {
      GET_FORM_BODY: "form/getFormBody"
    },
    table: {
      GET_TABLE_DATA: "table/getTableData"
    }
  };

  static dispatch(actionToDispatch, payload) {
    return store.dispatch(actionToDispatch, payload, { root: true });
  }

  static commit(mutationToCommit, payload) {
    return store.commit(mutationToCommit, payload, { root: true });
  }

  static rootGetters(getterToGet, payload) {
    if (payload) {
      return store.getters[getterToGet](payload);
    } else {
      return store.getters[getterToGet];
    }
  }
}

export default StoreUtils;
