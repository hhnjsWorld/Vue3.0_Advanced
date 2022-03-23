<template>
  <!-- 传递过去的是一个Number类型 -->
  <count :init="2" @change="changeHandle" />
  <br />
  {{ count }}
</template>

<script>
import count from "./components/Count.vue";
import { ref } from "vue";
export default {
  components: { count },
  setup() {
    let count = ref(0);
    const changeHandle = (v) => count.value = v;

/* 返回出去 */
    return { count,changeHandle };
  },
};
</script>

<style scoped lang="scss"></style>
