<template>
  <div class="message-box" :class="is_own ? 'my' : 'other'">
    <div :class="is_own ? 'thumbnail-my' : 'thumbnail-other'">
      <div
        v-tooltip="{ content: username, classes: ['msg-tooltip'] }"
        class="circular--portrait"
        :class="is_own ? 'my-profile' : 'other-profile'"
      >
        <img :src="img" />
      </div>
    </div>
    <div class="message" :class="is_own ? 'my-message' : 'other-message'">
      <!-- {{ message }} -->
      <span v-for="(line, lineNumber) of message.split('\n')" :key="lineNumber">
        {{ line }}<br />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: {
    message: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed",
    },
    is_own: {
      type: Boolean,
      default: true,
    },
    username: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.message-box {
  width: 100%;
  padding: 20px 0px;
  margin-top: auto;
  display: flex;
  box-sizing: border-box;
  align-items: end;
}

.my {
  flex-direction: row-reverse;
}

.other {
  flex-direction: row;
}

.thumbnail-other {
  margin-right: 12px;
}
.thumbnail-my {
  margin-left: 12px;
}
.message {
  max-width: 60%;
  padding: 8px;
  margin: 2px 0;
  overflow: hidden;
  border-radius: 8px;
  transition: height 0.3s ease-in-out;
  overflow-wrap: anywhere;
  word-wrap: anywhere;
  white-space: pre-line;
  &.hide {
    height: 0;
  }
  .text {
    width: 100%;
    overflow-wrap: anywhere;
    word-wrap: anywhere;
  }
}
.my-message {
  color: #fff;
  background-color: #006ae3;
  align-self: flex-end;
}
.other-message {
  background-color: #e2e2e2;
}
.circular--portrait {
  position: relative;
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
  }
}

.my-profile {
  color: #afafaf;
  align-self: flex-end;
}
.other-profile {
  color: #afafaf;
  align-self: flex-start;
}
</style>
