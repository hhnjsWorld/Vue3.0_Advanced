<template>
 <!-- 通过slot插槽默认的方式去接一下来自父组件的方法 -->
    <!-- 暴露在父组件当中  当然要通过不同的name去操作-->
  <div @click="isDel">
    {{ pass.title }}
    {{ pass.id }}
    <!-- 这个方法只能在默认slot中使用 一个slot搞定 -->
    <slot name="icon" />
    <slot  />
    
  </div>
</template>

<script>
export default {
  props: ['pass'],
  emits: ['del'],
  data() {
    return {
      color: " red"
      
    }
  },
  methods: {
    isDel() {
      this.$emit('del', this.pass)
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1px;
  padding: 10px;
  border: solid 1px red;
  
}
</style>