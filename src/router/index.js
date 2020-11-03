import Vue from 'vue'
import VueRouter from 'vue-router'
import Experience from '../views/Experience.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('../views/Education.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
