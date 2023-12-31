import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'topic-page',
      component: () => import('../views/TopicView.vue')
    },
    {
      path: '/news/:id',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    }
  ]
})

export default router
