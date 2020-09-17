import StoreUtils from "./StoreUtils";
import router from "../../router/router";

class RouterUtils {
  static routes = {
    auth: {
      LOGIN: "login",
      ADMIN_LOGIN: "admin-login",
      REGISTER: "register",
      FORGOT_PASSWORD: "resetprofile"
    },
    rewards: {},
    reports: {},

    DASHBOARD: "dashboard",
    company: {
      ALL_COMPANIES: "all-companies"
    },
    employee: {
      ADD_EMPLOYEE: "employee"
    }
  };
  static changeBaseRouteTo(targetRoute) {
    StoreUtils.dispatch(StoreUtils.actions.router.setActiveRoute, targetRoute);
    router.push({
      name: targetRoute
    });
  }

  static changeRouteTo(targetRoute) {
    router.push({
      name: targetRoute
    });
  }
  static changeActivePageTo(targetRoute) {
    StoreUtils.dispatch(StoreUtils.actions.router.setActiveRoute, targetRoute);
  }
  static changeRouteUrlTo(targetUrl) {
    router.push(targetUrl);
  }
}
export default RouterUtils;
