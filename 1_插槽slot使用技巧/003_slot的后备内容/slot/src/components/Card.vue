<template>
  <div>
    <h2>card</h2>
    <div style="color:red" @click="show(pass)">
      <slot  /> {{pass}}
    </div>
  </div>
</template>

<script>
export default {
  // props:['pass'],
  /* 对象法 */
  ['props']: {
    pass: {
      type: String,
      default: '按键'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    /* 父和子都定义了一个show的方法 这样打印出来会显示 */
    /* 插槽写在了哪个组件当中，其作用域就作用在哪个组件 */
    /* 使用的都是父组件里的  */
    show(pass) {
      console.log(`子组件调用${pass}`);

    }
  },
}
</script>

<style lang="scss" scoped>
</style>
