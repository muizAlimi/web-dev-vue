import StoreUtils from "./StoreUtils";
import router from "../../router/router";

class ValidatorUtils {
  static changeBaseRouteTo(targetRoute) {
    StoreUtils.dispatch(StoreUtils.actions.router.setActiveRoute, targetRoute);
    router.push({
      name: targetRoute
    });
  }

  static changeInnerRouteTo(targetRoute) {
    router.push({
      name: targetRoute
    });
  }
}
export default ValidatorUtils;
