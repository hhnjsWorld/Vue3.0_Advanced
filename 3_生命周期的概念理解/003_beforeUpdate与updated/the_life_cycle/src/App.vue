<template>
  <div ref="el">父节点</div>
  <!-- {{ hn }} -->
  <button @click="show = !show">控制</button>
  <child v-if="show" ref="son" />
</template>

<script>
import child from "./components/Child.vue";
export default {
  // name: '',
  components: {
    child,
  },
  data() {
    return {
      hn: "大哥大",
      show: true,
    };
  },
  /* 第一个生命周期 */
  /* 没出生 */
  beforeCreate() {
    console.log(`父组件beforeCreate ` + this.hn); //读取不到
  },
  /* 出生  */
  /* 使用比较频繁的生命周期 */
  created() {
    console.log(`父组件create` + this.hn); //读取到了
    // setTimeout(() => {
    //   this.hn = "更新";
    // }, 2000);
  },
  /* 挂载前 */
  beforeMount() {
    console.log(`父组件beforeMount` + this.hn); //读取到了
  },
  /* 挂载上了子的dom并完成 */
  mounted() {
    console.log(`父组件mounted` + this.hn); //读取到了
    console.log(this.$refs.el); //挂载了DOM
  },
  beforeUpdate() {
    console.log(`父组件beforeUpdate` + this.hn);
    // console.log(this.$refs.el); //更新前
    console.log(this.$refs.son);
  },
  updated() {
    console.log(`父组件updated我在后面` + this.hn); //读取到了
    // console.log(this.$refs.el); //更新DOM
     console.log(this.$refs.son);
  },
};
</script>

<style scoped lang="scss"></style>
