<template>
<!-- 利用公共的card样式做文章 -->
  <card>
    <template #weChat> 微信 </template>
    <div>
      <label>
       <x-input title="微信号" v-model='appName'/>
        <!-- {{appName}} -->
       <x-input title="密钥" v-model='key'/>
      
      </label>

    </div>
  </card>
</template>

<script>
  export default {
    
    data() {
      return {
        appName:'hhn',
        key:'kskskksksadkadjas'
      };
    },
    components: {},
  };
</script>

<style scoped lang="scss">
 
</style>