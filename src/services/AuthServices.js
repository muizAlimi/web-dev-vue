import BaseService from "./BaseService";
import AppUtils from "../utils/BaseUtils/AppUtils";

class AuthServices extends BaseService {
  registrationComplete(
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
  ) {
    return this.makePostRequest(
        AppUtils.urls.auth.REGISTRATION_COMPLETE,
        payload,
        successAction,
        loaderType,
        errorType,
        showSuccessMessage,
        successCondition,
        getErrorMessage
    );
  }
  registrationInit(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.auth.REGISTRATION_INIT,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }

  login(
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
