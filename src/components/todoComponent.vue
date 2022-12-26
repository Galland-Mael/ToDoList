<template>
  <div class="todoListContainer">
    <input class="dimension input textIndent background" type="text" placeholder="add todo" v-model="todoName "
           @keyup.enter="addTodo">
    <ul>
      <li class="dimension background list flex" v-for="todo in filteredTodos" :key="todo.name"
          :class="{completed: todo.completed,editing: todo===edit}">
        <input class="marginLeft" type="checkbox" v-model="todo.completed">
        <span class="textIndent text flex">{{ todo.name }}</span>
        <box-icon class="trash" name='trash' type='solid' color='#7d0c0c' @click="removeTodo(todo.name)"></box-icon>
      </li>
      <li class="area background list flex">
        <a class="split flex" :class="{underline: filter==='completed'}" href="#" @click.prevent="filter ='completed'">
          <span class="split flex">completed</span>
        </a>
        <span class="separator">|</span>
        <a class="split flex" :class="{underline: filter==='todo'}" href="#" @click.prevent="filter ='todo'">
          <span
            class="split flex">to do</span>
        </a>
        <span class="separator">|</span>
        <a class="split flex" :class="{underline: filter==='all'}" href="#" @click.prevent="filter ='all'">
          <span
            class="split flex">all</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todoComponent',
  data () {
    return {
      todos: [{
        name: 'mon premier todo',
        completed: true
      }],
      todoName: '',
      filter: 'all',
      edit: null
    }
  },
  methods: {
    addTodo () {
      if (this.todoName !== '') {
        this.todos.push({
          name: this.todoName,
          completed: false
        })
        this.todoName = ''
      }
    },
    removeTodo (name) {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].name === name) {
          this.todos.splice(i, 1)
          return
        }
      }
    }
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      if (this.filter === 'todo') {
        return this.todos.filter(todo => !todo.completed)
      }
      if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    }
  }
}
</script>

<style scoped>
@import "/src/CSS/todoList.css";
</style>
