<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <span
      @click="removeNotification(notification)"
      class="notification-bar-close"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path
          d="M28.2 24L47.1 5.1c1.2-1.2 1.2-3.1 0-4.2 -1.2-1.2-3.1-1.2-4.2 0L24 19.7 5.1 0.9c-1.2-1.2-3.1-1.2-4.2 0 -1.2 1.2-1.2 3.1 0 4.2l18.9 18.9L0.9 42.9c-1.2 1.2-1.2 3.1 0 4.2C1.5 47.7 2.2 48 3 48s1.5-0.3 2.1-0.9l18.9-18.9L42.9 47.1c0.6 0.6 1.4 0.9 2.1 0.9s1.5-0.3 2.1-0.9c1.2-1.2 1.2-3.1 0-4.2L28.2 24z"
        />
      </svg>
    </span>
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NotificationUtils from "../../../utils/BaseUtils/NotificationUtils";

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  mounted() {
    this.timeout = setTimeout(() => NotificationUtils.removeNotificationSlide(this.notification), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    notificationTypeClass() {
      return `-notification-${this.notification.type}`;
    }
  },
  methods: {
    ...mapActions("notification", ["removeNotificationSlide"]),
    removeNotification(_notification) {
      NotificationUtils.removeNotificationSlide(_notification)
        // StoreUtils.dispatch(StoreUtils.actions.notification.remove, _notification)
    }
  }
};
</script>

<style scoped>
  /* NotificationUtils */
  .notification-bar {
    margin: 0 0 10px 0;
    padding: 10px 15px;
    border-radius: 5px;
    width: 180px;
    font-weight: 500;
  }
  .notification-bar.-notification-success {
    background-color: #d6f3e9;
    border: 1px solid #c6eee0;
    color: #1b654a;
  }
  .notification-bar.-notification-warning {
    color: #7d5e28;
    background-color: #fcf0db;
    border: 1px solid #fbeacd;
  }
  .notification-bar.-notification-error {
    color: #7f3737;
    background-color: #fde1e1;
    border: 1px solid #fcd5d5;
  }

  .notification-bar .notification-bar-close {
    position: absolute;
    right: 15px;
    height: 10px;
    display: block;
    top: 15px;
    cursor: pointer;
  }
  .notification-bar.-notification-success .notification-bar-close {
    fill: #78ac99;
  }
  .notification-bar.-notification-error .notification-bar-close {
    fill: #be8c8c;
  }

  .notification-bar .notification-bar-close:hover {
    fill: #ffffff;
  }
  .notification-bar .notification-bar-close svg {
    height: 8px;
    width: 8px;
    display: block;
  }
  .notification-bar p {
    margin-bottom: 0;
    margin-right: 15px;
    font-size: 12px;
  }
  /* NotificationUtils END */
</style>
