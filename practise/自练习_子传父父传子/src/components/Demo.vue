<template>
  <div>
    <div>
      <!-- <input type="text" v-model="pass"  /> -->
      <textarea
        v-model="content"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      
     <span>子{{ content }}</span> 
    </div>
  </div>
</template>

<script>
export default {
  props: ["pass", "modelValue"],
  emits: ["update:modelValue"],//v-vmodel
  data() {
    return {
      content: this.modelValue,
    };
  },
  /* 原理解析 */
  // methods: {
  //   update(v) {
  //     console.log(v);
  //   },
  // },
  /* 最好用watch */
  watch: {
    content(v) {
      console.log(v);
      this.$emit("update:modelValue", this.content);
      
    },
  },
};
</script>

<style scoped lang="scss">
span{
  color:blue
}
</style>
