<template>
  <button>-</button>
  {{ num }}
  <!-- <button @click="add">+</button> -->
</template>

<script>
export default {
  /* setup语法糖 使用组合api*/
  setup() {
    let num = 2;
    return { num };
  },
  // name: "",
  //   data() {
  //     return {
  //         num:2
  //     };
  //   },
  //  methods: {
  //      add(){
  //          console.log(this.num);
  //      }
  //  },
};
</script>

<style scoped lang="scss"></style>
