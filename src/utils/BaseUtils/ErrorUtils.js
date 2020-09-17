import StoreUtils from "./StoreUtils";
import NotificationUtils from "./NotificationUtils";

class ErrorUtils {
  static types = {
    SLIDE: "slide",
    MODAL_DEFAULT: "modalDefault",
    BOTH: "both",
    RETURN: "return"
  };

  static showApiCallError(errorMessage, errorType) {
    let notificationModalBody = {
      type: NotificationUtils.type.ERROR,
      mode: NotificationUtils.mode.DEFAULT,
      title: "Error",
      message: errorMessage
    };

    switch (errorType) {
      case this.types.SLIDE:
        NotificationUtils.addNotificationSlide(
          errorMessage,
          NotificationUtils.type.ERROR
        );
        return;
      case this.types.MODAL_DEFAULT:
        NotificationUtils.showNotificationModal(notificationModalBody);
        return;
      case this.types.BOTH:
        NotificationUtils.addNotificationSlide(
          errorMessage,
          NotificationUtils.type.ERROR
        );
        NotificationUtils.showNotificationModal(notificationModalBody);
        return;
      case this.types.RETURN:
        return errorMessage;
      default:
        NotificationUtils.addNotificationSlide(
          errorMessage,
          NotificationUtils.type.ERROR
        );
        return;
    }
  }
}

export default ErrorUtils;
