import StoreUtils from "./StoreUtils";

class LoaderUtils {
  static types = {
    BLOCKING: "loader/showBlockingLoader",
    NONBLOCKING: "loader/showNonBlockingLoader",
    TABLE: "loader/showTableLoader",
    COMPONENT: "loader/showComponentLoader",
    NONE: "none"
  };

  static showLoading(status, loaderType) {
    if (loaderType !== this.types.NONE) {
      StoreUtils.dispatch(loaderType, status);
    }
  }
}

export default LoaderUtils;
