<template>
  <button @click="sub">-</button>
  {{ num }}
  <button @click="add">+</button>
</template>

<script>
/* import { ref } from "vue" 包装一下 使得非响应式数据 编程 响应式数据 */
import { ref, watch, watchEffect } from "vue";
export default {
  /* setup语法糖 使用组合api */
  /*组合式的api composition api 组合api */

  setup() {
    /* ref() 包装一下 使得非响应式数据 编程 响应式数据 (意指模板内的数据可以变化)*/
    let num = ref(2); //基本数据类型要被包装成对象的形式才以这样写ref(2)
    //新式写法
    /* 做一个增加 */
    let add = () => {
      console.log("add通过setup语法糖已执行");
      console.log(num);
      num.value++;
    };

    /* 同理做一个减少 */
    let sub = () => {
      num.value--;
    };
    /* watch在setup语法糖的使用 */
    // watch(num,(v)=>{
    //   /* 加强记忆 setup语法糖规避掉了this 而用.value之类的形似代替 */
    //   if (v < 0) /* this. */num.value = 0
    // })

    /* 通过watchEffect监听 */
    /* 应用于响应式数据的时候自动执行  */
    watchEffect(() => {
      // console.log('abc');
      console.log(num.value);
      if (num.value < 0) /* this. */ num.value = 0;
    });
    /* 监听值返回失效 */
    // const stop = watchEffect(() => {
    //   // console.log('abc');
    //   console.log(num.value);
    //   if (num.value < 0) /* this. */ num.value = 0;
    // });
    // stop();

    /* 没有 return 无法显示 或者 执行出结果,必须加上 */
    return { num, add, sub };
  },

  // name: "",
  //   data() {
  //     return {
  //         num:2
  //     };
  //   },

  /* ------------旧式写法----------- */
  // methods: {
  //   add() {

  //     this.num++;
  //     console.log(this.num);
  //   },
  // },
  /* 监听值得变化 */
  // watch: {
  //   num(v) {
  //     if (v < 0) this.num = 0

  //   },
  // },
};
</script>

<style scoped lang="scss"></style>
