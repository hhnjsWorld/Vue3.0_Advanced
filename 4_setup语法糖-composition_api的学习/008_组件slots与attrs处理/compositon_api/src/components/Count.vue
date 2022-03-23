<template>
<!-- slot插槽获取[1] -->
  <component :is="defaults[1]"></component>
  <button @click="sub">-</button>

  <!--一. ⭐$attrs的方法的style传递 -->
  <!-- 1.利用$attrs读取父组件里面的style -->
  <!-- <span :style="$attrs.style"> {{ num }} </span> -->
  <!-- 二.2.利用被解构的attrs传递 -->
  <span :style="$attrs.style">{{ num }}</span>

  <button @click="add">+</button>
  <!-- 接收非props或者其他接收类型 -->
  <!-- {{$attrs}} -->
<!-- slot插槽获取[2] -->
  <component :is="defaults[2]"></component>
</template>

<script>
/* import { ref } from "vue" 包装一下 使得非响应式数据 编程 响应式数据 */
import { ref, watch, watchEffect } from "vue";
export default {
  /* 传递的是一个props的数值类型 */
  props: {
    init: { type: Number, default: 3 },
  },
  /* 子传父 事件 */
  emits: ["change"],
  /* 手动处理自定义属性 $attrs的手动 */
  inheritAttrs: false,

  /* setup语法糖 使用组合api */
  /*组合式的api composition api 组合api */

  setup(props, context) {
    console.log(context, "context");
    /* 解构一下 */
    /*二.⭐attrs被解构的方法 */
    /* 三.slots被捕获的默认插槽 */
    const { emit, expose, attrs, slots } = context;
    const defaults = slots.default(); //default默认的返回出去
    /* ref() 包装一下 使得非响应式数据 编程 响应式数据 (意指模板内的数据可以变化)*/
    let num = ref(props.init); //接收到父子传递的表达式 //基本数据类型要被包装成对象的形式才以这样写ref(2)
    //新式写法
    /* 做一个增加 */
    let add = () => {
      console.log("add通过setup语法糖已执行");
      console.log(num);
      num.value++;
      /* 和常规的子传父差不多 */
      emit("change" /* num.value */);
    };

    /* 同理做一个减少 */
    let sub = () => {
      num.value--;
      emit("change" /* num.value */);
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
      // console.log(num.value);
      if (num.value < 0) /* this. */ num.value = 0;

      emit("change" /*  num.value */); //变化的内容传递出去
    });
    /* 监听值返回失效 */
    // const stop = watchEffect(() => {
    //   // console.log('abc');
    //   console.log(num.value);
    //   if (num.value < 0) /* this. */ num.value = 0;
    // });
    // stop();

    /* 只暴露一个数据 */
    expose({ num });

    /* 没有 return 无法显示 或者 执行出结果,必须加上 */
    return { num, add, sub, attrs, defaults }; //总结：返回出去的这些功能 能在expose里面能找到的
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
