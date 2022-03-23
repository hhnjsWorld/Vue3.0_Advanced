<template>
  <main>
    <div v-for="(component, index) of components" :key="index" @click="currentComponent = component.name">
      {{ component.title }}
    </div>
    {{ currentComponent }}
    <!-- component :is=""  点击取组件-->
  </main>
  <component :is="currentComponent" />
</template>

<script>
  import weixin from "./components/Weixin.vue";
  import pay from "./components/Pay.vue";

  export default {
    // name: '',
    components: {
      weixin,
      pay,
    },
    data() {
      return {
        currentComponent: "weixin",
        components: [{
            title: "微信管理",
            name: "weixin",
          },
          {
            title: "支付管理",
            name: "pay",
          },
        ],
      };
    },
  };
</script>

<style scoped lang="scss">
  main {
    display: flex;

    div {
      border: 1px solid salmon;
      padding: 20px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>