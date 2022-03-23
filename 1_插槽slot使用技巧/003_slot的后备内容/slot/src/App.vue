<template>
  <div>
    <!-- slot插槽创建一个组件 另外一个组件再注入 -->
    <!-- 想应用于子组件怎么办 还是利用props -->
    <!-- 结合之前学习的内容和  default显示默认值 和  表达式值-->
    <card  >
      <hnButton >{{content}}</hnButton>
      <div></div>
      <!-- 传达的是我父的信息 -->
      <!-- <div @click="show(content)">插槽</div> -->
    </card>
  </div>
</template>

<script>

import card from './components/Card.vue'
import hnButton from './components/Button.vue'
export default {
  components: {
    card,
    hnButton
  },
  data() {
    return {
      content: '父组件的content'
    }
  },
  methods: {
    /* 父和子都定义了一个show的方法 这样打印出来会显示 */
    /* 插槽写在了哪个组件当中，其作用域就作用在哪个组件 */
    /* 使用的都是父组件里的  */
    show(content) {
      console.log(this.content);

    }
  },
}
</script>

<style lang="scss" scoped>
</style>