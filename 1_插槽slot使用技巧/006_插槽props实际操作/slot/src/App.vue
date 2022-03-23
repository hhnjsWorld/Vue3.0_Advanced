<template>
  <lesson v-for="lesson of lessons" :key="lesson.id" :pass="lesson" @del="del">
    <!-- 利用slot做删除 -->
    <template #default="{ slotId }">
      <button @click="leave(slotId)">slot做的删除</button>
    </template>

    <!-- 通过slot去传递给子组件的一个方法 -->
    <!-- <button @click=" remove(lesson)" >删除</button> -->
    <!-- 利用template包着 去接收 -->
    <!-- 只要content里的内容 -->
    <template #one="{ content }">
      {{ content }}
    </template>
    <template v-slot:two="{ type, title }">
      <!-- <button>删除</button> -->
      {{ type }}{{ title }}
    </template>
    <template v-slot:three="{ id, title }">
      <!-- <button>删除</button> -->
      <div style="flex:1;color:blue">&nbsp;&nbsp;&nbsp;{{ id }}{{ title }}</div>
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
    del(lesson) {
      // console.log('$emit删除法');
      // const index = this.lessons.findIndex(l => l.id == lesson.id)
      // this.lessons.splice(index, 1)
    },
    remove(lesson) {
      // console.log(lesson);
      // const index = this.lessons.findIndex(l => l.id == lesson.id)
      // this.lessons.splice(index, 1)
    },
    /* 利用slot做删除 */
    leave(slotId) {
      
      // console.log(lesson);
      const index = this.lessons.findIndex(l => l.id == slotId)
      console.log(slotId);
      this.lessons.splice(index, 1)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>