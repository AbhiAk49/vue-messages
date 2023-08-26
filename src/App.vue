<template>
  <div id="app">
    <div class="flexbox">
      <AppHome />
    </div>
  </div>
</template>

<script>
import AppHome from "./pages/Home";
import { mapActions, mapGetters } from "vuex";
import { currentUser, otherUser, conversation } from "@/utils.js/mockapi";

export default {
  name: "App",
  components: {
    AppHome,
  },
  computed: {
    ...mapGetters(["current_user", "messages", "other_user"]),
  },
  methods: {
    ...mapActions(["setUserAsync", "setMessagesAsync", "addMessagesAsync"]),
  },
  mounted() {
    this.setUserAsync({
      value: JSON.parse(currentUser),
      type: "user",
    });
    this.setUserAsync({
      value: JSON.parse(otherUser),
      type: "other",
    });
    this.setMessagesAsync(conversation);
  },
};
</script>

<style lang="scss">
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li,
button {
  padding: 0;
  margin: 0;
}

html,
body,
.flexbox {
  width: 100%;
}

body {
  color: #4bb56a;
  font-family: Raleway, sans-serif;
  font-size: 16px;
}

.flexbox {
  background-color: #4bb56a;
  display: flex;
  justify-content: center;
  align-items: center;
}

button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button {
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}

.msg-tooltip {
  color: rgb(34, 34, 34);
  .tooltip-arrow {
    z-index: 2;
  }
  background-color: rgba(255, 255, 255, 0.296);
  box-shadow: inset;
  padding: 4px;
  border-radius: 4px;
}
</style>
