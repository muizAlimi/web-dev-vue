<template>
  <div class="notification-container">
    <slide-x-right-transition group :duration="1200">
      <NotificationSlide
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </slide-x-right-transition>

    <!--    Notification Modal-->
    <NotificationModal />
  </div>
</template>

<script>
import NotificationSlide from "./NotificationSlide";
import { mapState } from "vuex";
import { SlideXRightTransition } from "vue2-transitions";
import NotificationModal from "./NotificationModal";

export default {
  components: {
    NotificationModal,
    NotificationSlide,
    SlideXRightTransition
  },
  computed: mapState("notification", ["notifications"])
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 99999;
}
</style>
