export const namespaced = true;

const defaultNotificationModalBody = {
  type: "error", //error, success, warning
  mode: "default", // default, yes-no
  title: "",
  message: "",
  noAction: () => {},
  noActionTitle: "",
  yesAction: () => {},
  yesActionTitle: ""
};

export const state = {
  notifications: [],
  test: "",
  showNotificationModal: false,
  notificationModalBody: defaultNotificationModalBody
};

let nextId = 1;

export const getters = {};

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++
    });
    nextId = nextId++;
  },

  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove
    );

    for (let i = 0; i < state.notifications.length; i++) {
      if (state.notifications[i].id === notificationToRemove.id) {
        state.notifications.splice(i, 1);
      }
    }
  },

  SHOW_NOTIFICATION_MODAL(state) {
    state.showNotificationModal = true;
  },
  CLOSE_NOTIFICATION_MODAL(state) {
    state.showNotificationModal = false;
  },
  SET_NOTIFICATION_MODAL_BODY(state, payload) {
    state.notificationModalBody = payload;
  },
  RESET_NOTIFICATION_MODAL_BODY(state) {
    state.notificationModalBody = defaultNotificationModalBody;
  }
};
export const actions = {
  closeNotificationModal({ commit }) {
    commit("CLOSE_NOTIFICATION_MODAL");
    commit("RESET_NOTIFICATION_MODAL_BODY");
  },

  showNotificationModal({ commit }, notificationModalBody) {
    commit("SHOW_NOTIFICATION_MODAL");
    commit("SET_NOTIFICATION_MODAL_BODY", notificationModalBody);
  },

  addNotificationSlide({ commit }, notification) {
    // console.log("notification =>", notification);

    commit("PUSH", notification);
  },
  removeNotificationSlide({ commit }, notificationToRemove) {
    commit("DELETE", notificationToRemove);
  }
};
