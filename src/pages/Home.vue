<template>
  <div class="home">
    <chat-window/>
  </div>
</template>

<script>
import ChatWindow from "../components/ChatWindow";
export default {
  name: "AppHome",
  components: {
    ChatWindow,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
