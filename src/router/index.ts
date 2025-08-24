import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(), // 브라우저 히스토리 모드
  routes,
})

export default router
