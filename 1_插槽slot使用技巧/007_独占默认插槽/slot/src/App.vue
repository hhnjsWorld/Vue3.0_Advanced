<template>
 <!-- 利用slot做删除 完整简约版本 仅限默认 -->
  <!-- <lesson v-for="lesson of lessons" :key="lesson.id" :pass="lesson"  #default="{ slotId }"> -->
  <lesson v-for="lesson of lessons" :key="lesson.id" :pass="lesson"  >
    <!-- 包多个template使用 多个模板 -->
   <template #icon>
     <div>💋</div>
   </template>
   <template #default="{ slotId }">
     <button @click="leave(slotId)">slot做的删除</button>
   </template>
      
  </lesson>
</template>

<script>


import lessons from './data'
import Lesson from './components/lesson.vue'
export default {
  components: {
    Lesson
  },
  data() {
    return {
      lessons
    }
  },
  methods: {
    
    /* 利用slot做删除 */
    leave(slotId) {
      
      // console.log(lesson);
      /* 自定义id等于 数据id */
      const index = this.lessons.findIndex(l => l.id == slotId)
      console.log(slotId);
      this.lessons.splice(index, 1)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>