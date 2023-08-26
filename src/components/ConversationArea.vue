<template>
  <div>
    <div class="chat-window-body">
      <div class="chat_messages">
        <template v-for="message_data in formatMessages(this.messages)">
          <message-box
            :key="message_data.id"
            :message="message_data.message"
            :is_own="message_data.is_own"
            :img="message_data.image"
            :username = "message_data.username"
          ></message-box>
        </template>
      </div>
      <div ref="endMessage" id="endMessage"></div>
    </div>
  </div>
</template>

<script>
import MessageBox from "./MessageBox.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ConversationArea",
  data: function () {
    return {
      loadFirst: false,
    };
  },
  components: {
    MessageBox,
  },
  computed: {
    ...mapGetters(["current_user", "messages", "other_user"]),
  },
  watch: {
    messages() {
      this.$nextTick().then(() => {
        this.scrollToLast();
      });
    },
  },
  methods: {
    ...mapActions(["setUserAsync", "setMessagesAsync", "addMessagesAsync"]),
    formatMessages(messages) {
      return messages.map((msg) => {
        return {
          id: msg.id,
          message: msg.message,
          is_own: msg.from.id === this.current_user.id,
          image: msg.from.thumbnail,
          username: msg.from.firstName + ' ' + msg.from.lastName
        };
      });
    },
    scrollToLast() {
      const elem = document.querySelector("#endMessage");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted: function () {
    this.scrollToLast();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chat-window-body {
  height: 100%;
  display: flex;
  overflow: auto;
  display: flex;
  flex-direction: column;
  max-height: 77vh;
  .chat_messages {
    width: 100%;
    padding: 20px 15px;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
}
</style>
