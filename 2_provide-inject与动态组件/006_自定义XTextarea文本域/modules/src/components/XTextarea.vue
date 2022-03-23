<template>
  <label>
    <div>{{ title }}</div>
    <!-- <input v-model="content" @update:modelValue="update" /> -->

    <!-- 传递行数  -->
    <textarea
      :rows="rows"
      v-model="content"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>
  </label>
</template>

<script>
export default {
  //   name: "",
  /* 复习之前的  modelValue 进行传递数据*/
  //   props: ["title", "modelValue", "rows"], //rows通过props改变行数
  /* 对象式的规定传输规则 */
  props: {
    title: String,
    modelValue: String,
    rows: {
      type: Number,
      /*默认行为为10行 */
      default: 3,
    },
  },
  /* 复习之前:update:modelValue 触发更新 */
  emits: ["update:modelValue"],
  /* 通过inject去接受 */
  inject: ["webName"],

  components: {},
  data() {
    return {
      /* 实现vue3双绑 */
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
label {
  display: flex;
  align-items: center;
  div {
    color: #666;
    font-size: 16px;
    margin-right: 10px;
    width: 100px;
    margin-bottom: 10px;
  }
  textarea {
    border: 2px solid rgb(63, 133, 36);
    padding: 5px 10px;
    color: #666;
    outline: none;
  }
}
</style>
