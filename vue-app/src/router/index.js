import Vue from 'vue';
import VueRouter from 'vue-router';
import Attack from '../views/Attack.vue';
import Home from '../views/Home.vue';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/attack',
    name: 'Attack',
    component: Attack
  },
  {
    path: '/myBoard',
    name: 'MyBoard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyBoard.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
