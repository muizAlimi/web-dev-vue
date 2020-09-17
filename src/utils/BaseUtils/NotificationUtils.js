import StoreUtils from "./StoreUtils";

class NotificationUtils {
  static type = {
    ERROR: "error",
    SUCCESS: "success",
    WARNING: "warning"
  };
  static mode = {
    DEFAULT: "default",
    YES: "yes",
    YES_NO: "yes-no"
  };
  static addNotificationSlide(message, notificationType) {
    const notification = {
      type: notificationType,
      message:
        notificationType === NotificationUtils.type.ERROR
          ? `Error - ${message}`
          : message
    };
    StoreUtils.dispatch(
      StoreUtils.actions.notification.addNotificationSlide,
      notification
    );
  }

  static removeNotificationSlide(notification) {
    StoreUtils.dispatch(
      StoreUtils.actions.notification.removeNotificationSlide,
      notification
    );
  }

  static showNotificationModal(notificationModalBody) {
    // perform some checks and set default values

    StoreUtils.dispatch(
      StoreUtils.actions.notification.showNotificationModal,
      notificationModalBody
    );
  }

  static closeNotificationModal() {
    StoreUtils.dispatch(StoreUtils.actions.notification.closeNotificationModal);
  }
}
export default NotificationUtils;
