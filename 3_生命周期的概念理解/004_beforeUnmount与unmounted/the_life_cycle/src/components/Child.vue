<template>
  <div ref="el">{{ pass }}</div>
</template>

<script>
export default {
  // name: '',
  props: ["pass"],
  data() {
    return {
      hn: "儿子",
      timeId: null,
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
    // console.log(this.$refs.el); //undefine
    this.timeId = setInterval(() => {
      console.log('胡海宁');
    }, 500);
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
  /* 卸载前 */
  beforeUnmount() {
    console.log(`%c子组件beforeUnmount  + ${this.hn}`, "color:red"); //读取到了
    console.log(this.$refs.el); //挂载了DOM
  },
  /* 卸载后 */
  unmounted() {
    console.log(`%c子组件unmounted  + ${this.hn}`, "color:red"); //读取到了
    console.log(this.$refs.el); //挂载了DOM
    clearInterval(this.timeId)
  },
};
</script>

<style scoped lang="scss"></style>
