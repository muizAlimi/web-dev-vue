import AuthServices from "../../services/AuthServices";
const authService = new AuthServices();
import RouterUtils from "../../utils/BaseUtils/RouterUtils";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
import LoaderUtils from "../../utils/BaseUtils/LoaderUtils";
import NotificationUtils from "../../utils/BaseUtils/NotificationUtils";
import AppUtils from "../../utils/BaseUtils/AppUtils";

export const namespaced = true;

export const state = {
  businessId: "",
  token: "Key ...hfhfgfhfjhfj9484874734..kdkhd2345jdfkdj36472*Khgioojss222..."
  // token: "Token 400f363acbc6b33bc60c8b273cabc9e6790d81d0"
};

export const getters = {
  getAuthToken: state => {
    return state.token;
  },
  getAuthBusinessId: state => {
    return state.businessId;
  }
};

export const mutations = {
  SET_AUTH_TOKEN(state, payload) {
    state.token = `Token ${payload}`;
  },
  RESET_AUTH_TOKEN(state) {
    state.token = `Key ...hfhfgfhfjhfj9484874734..kdkhd2345jdfkdj36472*Khgioojss222...`;
  },
  SET_AUTH_BUSINESS_ID(state, payload) {
    state.businessId = payload;
  }
};

export const actions = {
  adminLogin(undefined, payload) {
    let successAction = responseData => {
      StoreUtils.dispatch("auth/successfulLogin", {
        userInfo: responseData,
        role: AppUtils.parameters.user.roles.CHOOSE_LIFE_ADMIN
      });
    };

    return authService.adminLogin(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  },

  successfulLogin(undefined, { userInfo, role }) {
    StoreUtils.commit("auth/SET_AUTH_TOKEN", userInfo.token);
    StoreUtils.commit("user/SET_USER_INFO", userInfo);
    StoreUtils.commit("user/SET_USER_ROLE", role);
    RouterUtils.changeBaseRouteTo(RouterUtils.routes.DASHBOARD);
  },

  register(undefined, { formBody1, formBody2 }) {
    let payload = {
      ...formBody1,
      ...formBody2
    };
    let successAction = () => {
      let notificationModalBody = {
        type: NotificationUtils.type.SUCCESS, //error, success, warning
        mode: NotificationUtils.mode.YES, // default, yes-no
        title: "",
        message:
          "Your initial registration has been successfully competed!\n" +
          "A Choose Life representative will contact you to complete your \n" +
          "registration and to begin onboarding your organization.",
        noAction: () => {
          NotificationUtils.closeNotificationModal();
        },
        noActionTitle: "No",
        yesAction: () => {
          NotificationUtils.closeNotificationModal();
        },
        yesActionTitle: "Continue"
      };
      NotificationUtils.showNotificationModal(notificationModalBody);
    };
    return authService.register(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  },

  logIn(undefined, payload) {
    let successAction = responseData => {
      let userRole = responseData.user_role;
      StoreUtils.dispatch("auth/successfulLogin", {
        userInfo: responseData,
        role: userRole
      });
    };
    return authService.logIn(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  },

  logOut() {
    StoreUtils.commit("auth/RESET_AUTH_TOKEN");
    let userRole = StoreUtils.rootGetters("user/getUserRole");
    if (
      userRole === AppUtils.parameters.user.roles.COMPANY_ADMIN ||
      userRole === AppUtils.parameters.user.roles.COMPANY_USER
    ) {
      RouterUtils.changeBaseRouteTo(RouterUtils.routes.auth.LOGIN);
    }
    if (
      userRole === AppUtils.parameters.user.roles.CHOOSE_LIFE_ADMIN ||
      userRole === AppUtils.parameters.user.roles.CHOOSE_LIFE_USER
    ) {
      RouterUtils.changeBaseRouteTo(RouterUtils.routes.auth.ADMIN_LOGIN);
    }
  },

  createProfile(undefined, { formBody1, formBody2 }) {
    let payload = {
      ...formBody1,
      ...formBody2,
      business_id: StoreUtils.rootGetters("auth/getAuthBusinessId")
    };

    let successAction = () => {
      RouterUtils.changeBaseRouteTo(RouterUtils.routes.auth.LOGIN);
    };

    return authService.createProfile(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  }
};
