import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/todoList',
    name: 'todoList',
    component: () => import(/* webpackChunkName: "about" */ '../views/todoList.vue')
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import(/* webpackChunkName: "about" */ '../views/calculator.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
