<template>
  <main>
    <!-- 定义高亮样式比较显眼 -->
    <!-- :class='{active:component.name==currentComponent}' 样式高亮 变量 -->
    <div
      v-for="(component, index) of components"
      :key="index"
      @click="currentComponent = component.name"
      :class="{ active: component.name == currentComponent }"
    >
      {{ component.title }}
    </div>
    {{ currentComponent }}
    <!-- 查看一下是否完成了双向绑定 -->
    <!-- {{config}} -->
  </main>
  <!-- component :is=""  点击取组件-->
  <component :is="currentComponent" />
  <!-- 实验 -->
  <input v-model="student" />
  {{ student }}
</template>

<script>
import weixin from "./components/Weixin.vue";
import site from "./components/Site.vue";
import { computed } from "vue";
import config from "./config.js";
export default {
  // name: '',
  components: {
    weixin,
    site,
  },
  /* 通过provide 传输和 inject接收 */

  // provide:{webName:'穿透传递1'},

  /* 作为函数传参 才能读取到data里 的参数 */
  provide() {
    return {
      /* 计算属性是响应式的 */
      /* 注意:对象的形式传递 */
      webName: computed(() => this.student),
      /* 引入进来的config,再传递出去 */
      config:this.config,
    };
  },

  data() {
    return {
      config,
      student: "穿透传递-爷孙",
      currentComponent: "weixin",
      components: [
        {
          title: "微信管理",
          name: "weixin",
        },
        {
          title: "网站信息",
          name: "site",
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
    transition: 0.5s;
    /* 管理样式变量 */
    &.active {
      background: lightblue;
    }
  }
}
</style>
