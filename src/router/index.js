import { createRouter, createWebHistory } from '@ionic/vue-router';
import SignUpPage from '../views/SignUpPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: SignUpPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
