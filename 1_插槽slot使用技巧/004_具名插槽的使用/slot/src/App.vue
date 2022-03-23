<template>
  <div>
    <card>
      <!--1.v-slot:可以传输  -->
      <template v-slot:header>社区小贴</template>
      <template v-slot:main>好人</template>
      <!--2.#是简写  -->
      <template #footer>小吉波</template>
    </card>
  </div>
</template>

<script>

import Card from './components/Card.vue'
import hnButton from './components/Button.vue'
export default {
  components: {
    Card,
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
      console.log(content);

    }
  },
}
</script>

<style lang="scss" scoped>
</style>