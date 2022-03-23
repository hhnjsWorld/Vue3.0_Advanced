<script>
import { ref, reactive,toRefs } from "vue";
export default {
  setup() {
    /* 对象类型的数据,单独响应ref的话很麻烦, */
    const a = reactive({ name: "{}", title: "响应" });
    /* 变成响应式数据 */
    const nameRef = ref(a.name);
    const change = () => {
      nameRef.value = "ref响应";
    };

    /* toRefs下的对象所有数据完成响应 */
     const b = reactive({ name: "{}", title: "响应" });
    /* 变成响应式数据 */
    const change2 = () => {
      b.name = '响应1'
      b.title = '响应2'
    };

    return { change, nameRef, change2, ...toRefs(b) };
  },
};
</script>
<template>
  <!-- ref解决响应式数据 -->
  <button @click="change">{{ nameRef }}</button>
  <!-- 展开语法配合toRefs响应式数据 -->
  <button @click="change2">{{ title }}</button>
</template>
<style scoped lang="scss"></style>
