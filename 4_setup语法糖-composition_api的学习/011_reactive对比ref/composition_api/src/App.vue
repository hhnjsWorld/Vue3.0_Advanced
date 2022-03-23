<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    /* 1.基本数据类型被对象包装 */
    const a = ref(99);
    function basic() {
      return (a.value = 100);
    }
    /* 2.数组类型的数据 */
    const b = reactive([]);
    function array() {
      return b.push("数组");
    }
    /* 3.对象类型的数据 */
    const c = reactive({ name: "{}" });
    function object() {
      return (c.name = "对象");
    }
    /* 对象在ref中的理解 */
    const d = ref({ name: "{ref}" });
    // function object2() {
    //   d.value = {};
    //   return (d.value.name = "ref响应式");
    // }
    let object2 = () => {
      d.value = {};
			d.value.name='ref响应式'
    };
    return {
      /* 基本 */
      a,
      basic,
      /* 数组 */
      b,
      array,
      /* 对象 */
      c,
      object,
      /* 对象ref响应式 */
      d,
      object2,
    };
  },
};
</script>
<template>
  <button @click="basic">{{ a }}</button>
  <hr />
  <button @click="array">{{ b }}</button>
  <hr />
  <button @click="object">{{ c.name }}</button>
  <hr />
  <button @click="object2">{{ d.name }}</button>
</template>
<style scoped lang="scss"></style>
