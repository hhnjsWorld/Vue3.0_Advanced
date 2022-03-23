<template>
  <div ref="el">{{pass}}</div>
</template>

<script>
export default {
  // name: '',
  props: ["pass",'ref'],
  data() {
    return {
      hn: "大哥大",
    };
  },
  /* 第一个生命周期 */
  /* 没出生 */
  beforeCreate() {
    console.log(`%c子组件beforeCreate  + ${this.hn}`, "color:red"); //读取不到
    console.log(this.$refs.el); //undefine
  },
  /* 出生  */
  /* 使用比较频繁的生命周期 */
  created() {
    console.log(`%c子组件created  + ${this.hn}`, "color:red"); //读取到了
    console.log(this.$refs.el); //undefine
  },
  /* 挂载前 */
  beforeMount() {
    console.log(`%c子组件beforeMount  + ${this.hn}`, "color:red"); //读取到了
    console.log(this.$refs.el); //undefine
  },
  /* 挂载中 */
  mounted() {
    console.log(`%c子组件mounted  + ${this.hn}`, "color:red"); //读取到了
    console.log(this.$refs.el); //挂载了DOM
  },
};
</script>

<style scoped lang="scss"></style>
