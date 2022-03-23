<template>
  <!-- 利用公共的card样式做文章 -->
  <card>
    <template #weChat> 微信 </template>
    <div>
      <label>
        <x-input title="微信号" v-model="appName" />
        <!-- {{appName}} -->
        <x-input title="密钥" v-model="key" />
        <!-- 文本域的区域 -->
        <x-textarea title="密钥" v-model="key" />
        {{ key }}
      </label>
    </div>
  </card>
</template>

<script>
export default {
  // inject: ["config"],
  data() {
    return {
      appName: "hhn",
      key: "kskskksksadkadjas",
    };
  },
  components: {},
};
</script>

<style scoped lang="scss"></style>
