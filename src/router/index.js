import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // 课程页面
  {
    path: '/course',
    name: 'course',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/yzCourse/course.vue')
    },
  },
  // 搜索页面
  {
    path: '/search',
    name: 'search',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/yzCourse/search.vue')
    },
  },
]

const router = new VueRouter({
  routes
})

export default router
