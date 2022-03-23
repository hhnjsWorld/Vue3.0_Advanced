<template>
  <demo :pass="content" v-model="passIn" />
 <span> 根{{passIn}}</span>
</template>

<script>
import demo from "./components/Demo.vue";

export default {
  // name: '',
  components: {
    demo,
  },
  data() {
    return {
      passIn:'默认',
      content: "",
    };
  },
};
</script>


<style scoped lang="scss">
span{
  color: red;
}
</style>
