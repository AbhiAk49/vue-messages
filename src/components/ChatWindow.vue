<template>
  <div class="chat-window">
    <div class="chat-window-header">
      <h3 v-if="other_user.firstName">
        {{ other_user.firstName + " " + other_user.lastName }}<br />
      </h3>
    </div>
    <conversation-area></conversation-area>
    <compose-section
      v-on:message-sent="onMessageSent"
      v-on:adding="adding"
    ></compose-section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ConversationArea from "./ConversationArea.vue";
import ComposeSection from "./ComposeSection.vue";
export default {
  name: "ChatWindow",
  components: {
    ConversationArea,
    ComposeSection,
  },
  computed: {
    ...mapGetters(["current_user", "other_user"]),
  },
  methods: {
    ...mapActions(["addMessagesAsync"]),
    onMessageSent(data) {
      const message = {
        id: new Date().getTime(),
        from: this.current_user,
        message: data.message,
        date: new Date().toISOString(),
      };
      this.addMessagesAsync(message);
    },
    adding() {
      console.log("addding");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chat-window {
  background-color: #fff;
  margin: 20px;
  width: 100%;
  height: 100%;
  max-height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  border-radius: 13px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  > .chat-window-header {
    width: 100%;
    padding: 20px 15px;
    border-bottom: solid 1px #cfcfcf;
    box-sizing: border-box;
  }
}

@media (min-width: 500px) {
  .chat-window {
    width: 500px;
  }
}
</style>
