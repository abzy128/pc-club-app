import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'

const routes = [
  { path: '/', component: Main},
  { path: '/login', component: Login},
  { path: '/register', component: Register},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router