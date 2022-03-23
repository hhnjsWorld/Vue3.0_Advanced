<template>
  <label>
    <div>{{ title }}</div>
    <input />
  </label>
</template>

<script>
export default {
  //   name: "",
  /* 复习之前的  modelValue 进行传递数据*/
  props: ["title", "modelValue"],
  components: {},
  data() {
    return {
         title:'微信号'
    };
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
    margin-right:10px ;
  }
  input{
      border: 2px solid #ddd;
      padding:5px 10px ;
      color: #666;
      outline: none;
  }
}
</style>
