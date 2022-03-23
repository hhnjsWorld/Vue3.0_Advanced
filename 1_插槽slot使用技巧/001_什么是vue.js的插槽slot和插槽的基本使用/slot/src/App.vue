<template>
  <div>
    <h2>根</h2>
    <!-- slot插槽创建一个组件 另外一个组件再注入 -->
    <card>
      <input type="text" value="hhn" />
     
      <hn-button></hn-button>
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

    }
  },
}
</script>

<style lang="scss" scoped>
</style>