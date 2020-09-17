import Axios from "axios";
import { baseUrlCors } from "../app.config";
import LoaderUtils from "../utils/BaseUtils/LoaderUtils";
import NotificationUtils from "../utils/BaseUtils/NotificationUtils";
import ErrorUtils from "../utils/BaseUtils/ErrorUtils";
import StoreUtils from "../utils/BaseUtils/StoreUtils";


class BaseService {
  apiClient = Axios.create({
    baseURL: baseUrlCors,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "No"
    },
    timeout: 30000
  });

  static basePayload() {
    return {
      source: "WEB"
    };
  }

  constructor() {
    this.initAPIClient();
  }

  initAPIClient() {
    this.apiClient.interceptors.request.use(config => {
      // const token = StoreUtils.rootGetters("auth/getAuthToken");
      // if (token != null) {
      //   config.headers.Authorization = token;
      // }
      return config;
    });
    this.apiClient.interceptors.response.use(response => {
      return response;
    });
  }

  async makePostRequest(
    url,
    payload,
    successAction = () => {},
    loaderType = LoaderUtils.types.BLOCKING,
    errorType = ErrorUtils.types.SLIDE,
    showSuccessMessage = true,
    successCondition = response => {
      return response.responsecode === "00";
    },
    getErrorMessage = response => {
      return response.responsemessage;
    }
  ) {
    let loader = this.validateLoaderType(loaderType);
    LoaderUtils.showLoading(true, loader);
    let apiResponse = await this.apiClient.post(url, JSON.stringify(payload));
    LoaderUtils.showLoading(false, loader);
    // console.log("apiResponse ==>", apiResponse);

    if (successCondition(apiResponse.data)) {
      if (showSuccessMessage) {
        NotificationUtils.addNotificationSlide(
          apiResponse.data.responsemessage,
          NotificationUtils.type.SUCCESS
        );
      }
      successAction(apiResponse.data);
    } else {
      ErrorUtils.showApiCallError(getErrorMessage(apiResponse.data), errorType);
    }
    return apiResponse.data;
  }

  async makeGetRequest(
    url,
    successAction = () => {},
    loaderType = LoaderUtils.types.BLOCKING,
    errorType = ErrorUtils.types.SLIDE,
    showSuccessMessage = true,
    successCondition = response => {
      return response.responsecode === "00";
    },
    getErrorMessage = response => {
      return response.responsemessage;
    }
  ) {
    let loader = this.validateLoaderType(loaderType);
    LoaderUtils.showLoading(true, loader);
    let apiResponse = await this.apiClient.get(url);
    LoaderUtils.showLoading(false, loader);
    // console.log("apiResponse ==>", apiResponse);

    if (successCondition(apiResponse.data)) {
      if (showSuccessMessage) {
        NotificationUtils.addNotificationSlide(
          apiResponse.data.responsemessage,
          NotificationUtils.type.SUCCESS
        );
      }
      successAction(apiResponse.data);
    } else {
      ErrorUtils.showApiCallError(getErrorMessage(apiResponse.data), errorType);
    }
    return apiResponse.data;
  }

  validateLoaderType(type) {
    if (type === undefined || type === "") {
      return LoaderUtils.types.BLOCKING;
    } else {
      return type;
    }
  }
}

export default BaseService;
