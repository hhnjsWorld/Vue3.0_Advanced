<template>
  <!-- 利用公共的card样式做文章 -->
  <card>
    <template #weChat> 站点信息 </template>
    <div>
      <label>
        <!-- 通过爷孙数据穿透 的方式获取config里面的数据  inject:['config'],-->
        <x-input title="网站名称" v-model="config.site.title" />
        <!-- {{appName}} -->
        <!-- <x-input title="密钥" v-model="key" /> -->
        <!-- 文本域的区域 -->
        <x-textarea title="站点介绍" v-model="config.site.desc" />

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
 
};
</script>

<style scoped lang="scss"></style>
