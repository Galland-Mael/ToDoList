import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/todoList',
    name: 'todoList',
    component: () => import(/* webpackChunkName: "about" */ '../views/todoList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
