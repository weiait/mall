import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ 'views/category/Category.vue')
  },
  {
    path: '/shopCart',
    name: 'ShopCart',
    component: () => import('views/shopcart/Shopcart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/profile/Profile')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
