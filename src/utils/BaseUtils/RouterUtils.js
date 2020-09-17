import StoreUtils from "./StoreUtils";
import router from "../../router/router";

class RouterUtils {
  static routes = {
    DASHBOARD: "dashboard",
    auth: {
      LOGIN: "login",
      REGISTRATION: "registration"
    },
    expense:{
      CREATE: "create",
      GET: "get"
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
