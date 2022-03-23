<template>
  <!-- <api /> -->
  <!-- 传递过去的是一个Number类型 -->
  <count :init='9'/>
</template>

<script>
// import api from "./components/Api.vue";
import count from "./components/Count.vue";

export default {
  components: {
    // api,
    count
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
