<template>
  <div class="chat-window-footer">
    <textarea
      id="chat_input"
      placeholder="Type your message here..."
      v-model="text_message"
      :rows="rowSize"
      @keypress.enter.prevent="sent"
    ></textarea>
    <button id="send" @click="sent">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path fill="#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ComposeSection",
  data: function () {
    return {
      rowSize: 1,
      text_message: "",
    };
  },
  methods: {
    sent() {
      this.$nextTick().then(() => (this.text_message = ""));
      this.$emit("message-sent", {
        message: this.text_message,
      });
    },
  },
  mounted: function () {
    const textArea = document.getElementById("chat_input");
    textArea.addEventListener("input", autoResize, false);

    function autoResize() {
      if (this.scrollHeight > 40 && this.scrollHeight < 70) {
        this.style.height = this.scrollHeight + "px";
      }
    }
  },
  beforeDestroy: function () {
    const textArea = document.getElementById("chat_input");
    textArea.removeEventListener("input");
  },
};
</script>

<style scoped lang="scss">
.chat-window-footer {
  width: 100%;
  padding: 20px 15px;
  border-top: solid 1px #cfcfcf;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  > #chat_input {
    color: #2f2f2f;
    font-family: Raleway, sans-serif;
    font-size: 16px;
    background-color: #d2d2d2;
    width: 100%;
    height: 40px;
    max-height: 120px;
    border: none;
    padding: 10px 15px;
    resize: none;
    box-sizing: border-box;
    border-radius: 12px 8px;
    transition: 0.3s background-color;
    &:focus {
      background-color: #efefef;
    }
  }
  > #send {
    width: 60px;
    background: none;
    border: none;
    margin-left: 12px;
    padding: 5px;
    cursor: pointer;
    //border-radius: 50%;
  }
}
</style>
