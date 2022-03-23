<template>
  <!-- 传递过去的是一个Number类型 -->
  <count :init="2" @change="changeHandle" ref="countComponent" />
  <br />
 
  {{ changeHandle()}}
  <!-- {{ count }} -->

</template>

<script>
import count from "./components/Count.vue";
/* DOM挂载之后 */
import { ref, onMounted } from "vue";
export default {
  components: { count },
  setup() {
    // let count = ref(0);
    const countComponent = ref();
    /* 挂载后 读取到 子的数据 */
    /* 子挂载完全体 这个生命周期可以读到三个传递过来的方法啊 数据啊 */
    onMounted(() => {
      console.log(countComponent.value.add);
      console.log(countComponent.value.sub);
      console.log(countComponent.value.num);
    });

    // const changeHandle = (v) => (count.value = v);

    /* 下面这个方式直接读取到 子组件里面的数据 子组件就不用传值了 */
    const changeHandle = (v) => (countComponent.value?.num);//value?指的是 是否有num传输过来 不加?的话默认没有

    /* 返回出去 */
    return { /*  count, */ changeHandle, countComponent };
  },
};
</script>

<style scoped lang="scss"></style>
