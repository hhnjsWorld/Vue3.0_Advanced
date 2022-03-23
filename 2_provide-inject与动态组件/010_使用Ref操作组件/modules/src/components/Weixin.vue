<template>
  <!-- 利用公共的card样式做文章 -->
  <card>
    <template #weChat> 微信 </template>
    <div>
      <label>
        <x-input title="id" v-model="config.weixin.appid" />
        <!-- {{appName}} -->
        <x-input title="加友方式" v-model="config.weixin.secret" />
      
        <!-- 文本域的区域 -->
        <x-textarea title="公众号" v-model="config.weixin.weChatName" />

        <!-- keep-alive缓存 需在根组件里添加keep-alive -->
       
        <x-textarea title="帅哥" v-model="own" />
       
        
     
        <!-- {{ key }} -->
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
      own:"大仙"
    };
  },
  /* 添加关于ref相关的 可以让根组建操作和数据*/
  methods: {
    show(){
      alert(this.own)
    }
  },
  components: {},
};
</script>

<style scoped lang="scss">

</style>
