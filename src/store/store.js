import Vue from "vue";
import Vuex from "vuex";

import * as router from "./modules/baseModules/router.js";
import * as loader from "./modules/baseModules/loader.js";
import * as notification from "./modules/baseModules/notification.js";
import * as table from "./modules/baseModules/table.js";
import * as form from "./modules/baseModules/form.js";

import * as todo from "./modules/todo.js";
import * as auth from "./modules/auth.js";
import * as expense from "./modules/expense.js";
import * as user from "./modules/user.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
    expense,
    auth,
    user,
    router,
    loader,
    notification,
    table,
    form
  },
  state: {},
  mutations: {},
  actions: {}
});
