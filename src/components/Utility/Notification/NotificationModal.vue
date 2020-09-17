<template>
  <div class="notification-modal" :class="notificationModalTypeClass">
    <vodal
      :show="notification.showNotificationModal"
      :height="400"
      :width="400"
      animation="zoom"
      @hide="closeNotificationModal"
    >
      <div class="notification-modal-inner">
        <p class="notification-modal-title text-center">
          {{ notification.notificationModalBody.title }}
        </p>
        <p class="notification-modal-message text-center">
          {{ notification.notificationModalBody.message }}
        </p>

        <div class="notification-modal-actions">
          <p
            v-if="notification.notificationModalBody.mode === 'default'"
            class="notification-modal-action text-center"
          >
            <button
              @click="closeNotificationModal"
              class="btn btn-success btn-tragedy only"
            >
              close
            </button>
          </p>

          <p
            v-if="notification.notificationModalBody.mode === 'yes'"
            class="notification-modal-action text-center"
          >
            <button
              @click="notification.notificationModalBody.yesAction"
              class="btn btn-success btn-tragedy only"
            >
              {{ notification.notificationModalBody.yesActionTitle }}
            </button>
          </p>

          <div
            v-if="notification.notificationModalBody.mode === 'yes-no'"
            class="row"
          >
            <div class="col-6">
              <p class="notification-modal-action text-center">
                <button
                  @click="notification.notificationModalBody.noAction"
                  class="btn btn-success btn-tragedy-alt twin"
                >
                  {{ notification.notificationModalBody.noActionTitle }}
                </button>
              </p>
            </div>
            <div class="col-6">
              <p class="notification-modal-action text-center">
                <button
                  @click="notification.notificationModalBody.yesAction"
                  class="btn btn-success btn-tragedy twin"
                >
                  {{ notification.notificationModalBody.yesActionTitle }}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </vodal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationUtils from "../../../utils/BaseUtils/NotificationUtils";

export default {
  name: "NotificationModal",
  computed: {
    ...mapState(["notification"]),
    notificationModalTypeClass() {
      return `-notification-${this.notification.notificationModalBody.type}`;
    }
  },
  methods: {
    closeNotificationModal(_notification) {
      NotificationUtils.closeNotificationModal();
    }
  }
};
</script>

<style scoped>
/*Notification Modal*/
.notification-modal {
}
.notification-modal.-notification-success {
  background-color: #d6f3e9;
  border: 1px solid #c6eee0;
  color: #1b654a;
}
.notification-modal.-notification-warning {
  color: #7d5e28;
  background-color: #fcf0db;
  border: 1px solid #fbeacd;
}
.notification-modal.-notification-error {
  color: #7f3737;
  background-color: #fde1e1;
}
.notification-modal .vodal-dialog {
  border-radius: 12px !important;
  padding: 0 !important;
}
.notification-modal .notification-modal-inner {
  padding: 20px;
}
.notification-modal .notification-modal-title {
  margin-top: 10px;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 20px;
}
.notification-modal .notification-modal-message {
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 25px;
}

.notification-modal .notification-modal-actions {
}
.notification-modal .notification-modal-action {
}
.notification-modal .notification-modal-action button {
}
.notification-modal .notification-modal-action button.only {
}
.notification-modal .notification-modal-action button.twin {
}
/*Notification Modal END*/
</style>
