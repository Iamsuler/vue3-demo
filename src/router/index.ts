import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/dashboard/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Dashboard,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
