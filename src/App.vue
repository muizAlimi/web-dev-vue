<template>
  <div id="app">
    <NotificationContainer />
    <Loading v-if="loader.blockingLoader" />
    <transition name="slide-fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import NotificationContainer from "./components/Utility/Notification/NotificationContainer";
  import Loading from "./components/Utility/Loading";

  export default {
    name: "app",
    components: {
      NotificationContainer,
      Loading
    },
    computed: {
      ...mapState(["loader"])
    }
  };
</script>

<style>
  a {
    cursor: pointer;
  }
  .slide-fade-enter {
    opacity: 0;
    transform: translateY(10px);
  }
  .slide-fade-enter-to {
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave {
  }
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
</style>
