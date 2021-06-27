import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend  from 'components/Recommend'
import Singer  from 'components/Singer'
import Search  from 'components/Search'
import Collect  from 'components/Collect'

Vue.use(VueRouter)


const routes = [
  { path: '/recommend',component: Recommend },
  { path: '/singer',component: Singer },
  { path: '/search',component: Search },
  { path: '/collect',component: Collect },
  { path: '/',redirect:'/recommend' }
]

const router = new VueRouter({
  routes
})

export default router

