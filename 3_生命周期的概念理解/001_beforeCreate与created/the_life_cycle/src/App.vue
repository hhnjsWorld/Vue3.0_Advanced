<template>
<div ref="el">1223</div>
</template>

<script>
import life from "./components/Life.vue";

export default {
  // name: '',
  components: {
    // life,
  },
  data() {
    return {
      hn: "大哥大",
    };
  },
  /* 第一个生命周期 */
  /* 没出生 */
  beforeCreate() {
    console.log(`beforeCreate `+this.hn);//读取不到
    console.log(this.$refs.el);//undefine
  },
  /* 出生  */
  /* 使用比较频繁的生命周期 */
  created() {
    console.log(`create`+this.hn);//读取到了
    console.log(this.$refs.el);//undefine
    
  },
};
</script>

<style scoped lang="scss"></style>
