import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReactiveView.vue')
  },
  {
    path: '/props',
    name: 'props',
    component: () => import('../views/PropsView.vue')
  },
  {
    path: '/posts/:id',
    name: 'details',
    component: () => import('../views/DetailsView.vue'),
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
