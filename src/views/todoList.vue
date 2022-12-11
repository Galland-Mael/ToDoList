<template>
  <div class="title">Todo List</div>
  <todoComponent/>
</template>

<script>
import todoComponent from '@/components/todoComponent.vue'
export default {
  name: 'todoList',
  components: {
    todoComponent
  }
}
</script>

<style scoped>
.title{
  font-size: 1.5em;
}
</style>
