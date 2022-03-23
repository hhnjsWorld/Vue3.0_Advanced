<template>
  <div @click="isDel">
    {{ pass.title }}
    <!-- 通过slot插槽默认的方式去接一下来自父组件的方法 -->
    <!-- 暴露在父组件当中  当然要通过不同的name-->
    
    <slot name="one" content=" 好诗" title=" 大爷" />
    <slot />
    <slot name="two" :type="what" title=" 二爷" />
    <slot />
    <slot name="three" :id="pass.id" :title="pass.title" />
    <slot />
    
  </div>
</template>

<script>
export default {
  props: ['pass'],
  emits: ['del'],
  data() {
    return {
      what: "方式"
      
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