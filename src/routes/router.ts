import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import { useUserTokenStore } from '../store/UserTokenStore'
import { storeToRefs } from 'pinia'

const routes = [
  { path: '/', component: Main, meta: {auth: true}},
  { path: '/login', component: Login, meta: {auth: false}},
  { path: '/register', component: Register, meta: {auth: false}},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const UserTokenStore:any = useUserTokenStore();

  if(to.meta.auth && UserTokenStore.userToken === ''){
    next('/login')
  } else if(!to.meta.auth && UserTokenStore.userToken !== ''){
      next('/')} else{
        next()
    }
})

export default router