import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./filter";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vodal from "vodal";
Vue.component(Vodal.name, Vodal);
import "vodal/common.css";
import "vodal/rotate.css";

import VueFormulate from "@braid/vue-formulate";
import AppAutocompleteInput from "./components/App/Inputs/AppAutocompleteInput";
Vue.component("AppAutocompleteInput", AppAutocompleteInput);
Vue.use(VueFormulate, {
  library: {
    autocomplete: {
      classification: "text",
      component: "AppAutocompleteInput"
    }
  },

});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
