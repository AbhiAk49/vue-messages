import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  user: {},
  other: {},
  messages: [],
};

const mutations = {
  set_user(state, { value, type }) {
    switch (type) {
      case "user": {
        state.user = value;
        break;
      }
      case "other": {
        state.other = value;
        break;
      }
      default: {
        throw new Error("invalid type");
      }
    }
  },
  set_messages(state, messages) {
    state.messages = messages;
  },
  add_message(state, message) {
    state.messages.push(message);
  },
};

const actions = {
  setUserAsync({ commit }, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit("set_user", data);
        resolve();
      }, 500);
    });
  },
  setMessagesAsync({ commit }, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit("set_messages", JSON.parse(data));
        resolve();
      }, 500);
    });
  },
  addMessagesAsync({ commit }, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit("add_message", data);
        resolve();
      }, 500);
    });
  },
};

const getters = {
  current_user: (state) => state.user,
  messages: (state) => state.messages,
  other_user: (state) => state.other,
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
