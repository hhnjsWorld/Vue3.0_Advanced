<template>
  <button>-</button>
  {{ num }}
  <button @click="add">+</button>
</template>

<script>
/* import { ref } from "vue" 包装一下 使得非响应式数据 编程 响应式数据 */
import { ref } from "vue";
export default {
  /* setup语法糖 使用组合api */
  /*组合式的api composition api 组合api */

  setup() {
    /* ref() 包装一下 使得非响应式数据 编程 响应式数据 (意指模板内的数据可以变化)*/
    let num = ref(2);//基本数据类型要被包装成对象的形式才以这样写ref(2)
    //新式写法
/*做一个增加*/
    let add =()=>{
      console.log('add通过setup语法糖已执行');
       console.log(num);
      num.value++
     
    }
    /* 没有 return 无法显示 或者 执行出结果,必须加上 */
    return { num,add };
  },
  // name: "",
  //   data() {
  //     return {
  //         num:2
  //     };
  //   },

  /* 旧式写法 */
  // methods: {
  //   add() {
      
  //     this.num++;
  //     console.log(this.num);
  //   },
  // },
};
</script>

<style scoped lang="scss"></style>
