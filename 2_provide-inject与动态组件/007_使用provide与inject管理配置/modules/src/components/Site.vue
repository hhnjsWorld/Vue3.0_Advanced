<template>
  <!-- 利用公共的card样式做文章 -->
  <card>
    <template #weChat> 站点信息 </template>
    <div>
      <label>
        <x-input title="微信号" v-model="appName" />
        <!-- {{appName}} -->
        <x-input title="密钥" v-model="key" />
        <!-- 文本域的区域 -->
        <x-textarea title="密钥" v-model="key" />

        <!-- 测验一下是不是 利用 inject接收过来了 -->
        {{ config }}

      </label>
    </div>
  </card>
</template>

<script>
export default {
    /* 利用inject接受过来 */
  inject:['config'],
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
