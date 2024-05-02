import { createMemoryHistory, createRouter } from 'vue-router'

import LoginForm from '../components/LoginForm.vue'

const routes = [
  { path: '/', component: LoginForm },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router