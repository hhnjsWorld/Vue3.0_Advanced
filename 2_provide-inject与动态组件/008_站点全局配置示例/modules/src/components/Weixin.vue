<template>
  <!-- 利用公共的card样式做文章 -->
  <card>
    <template #weChat> 微信 </template>
    <div>
      <label>
        <x-input title="id" v-model="config.weixin.appid" />
        <!-- {{appName}} -->
        <x-input title="加友方式" v-model="config.weixin.secret" />
        <x-input title="普通输入框" v-model="appName" />
        <!-- 文本域的区域 -->
        <x-textarea title="公众号" v-model="config.weixin.weChatName" />
        <x-textarea title="普通文本域" v-model="key" />
        {{ key }}
      </label>
    </div>
  </card>
</template>

<script>
export default {
  /* 和site同理 通过爷孙传递 */
  inject: ["config"],
  data() {
    return {
      appName: "hhn",
      key: "kskskksksadkadjas",
    };
  },
  components: {},
};
</script>

<style scoped lang="scss">

</style>
