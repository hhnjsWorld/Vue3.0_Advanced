<template>
  <Lesson v-for="lesson of lessons" :key="lesson.id" :pass="lesson" />
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

  },
}
</script>

<style lang="scss" scoped>
</style>