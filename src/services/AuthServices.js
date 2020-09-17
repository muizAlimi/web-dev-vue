import BaseService from "./BaseService";
import AppUtils from "../utils/BaseUtils/AppUtils";

class AuthServices extends BaseService {
  createProfile(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.auth.CREATE_PROFILE,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }

  adminLogin(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.auth.ADMIN_LOGIN,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }

  register(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.auth.REGISTER,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }

  logIn(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.auth.LOGIN,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }
}

export default AuthServices;
