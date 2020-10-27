import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: '',
    
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }

  {
    path: '/',
    name: '/',
    component: function () {
      return import('../views/wsy_component/index')
    }
  },
  {
    path: '/oto',
    name: 'oto',
    component: function () {
      return import('../views/wsy_component/Oto')
    }
  },
  {
    path: '/search',
    name: 'search',
    component: function () {
      return import('../views/wsy_component/Search')
    }
  },
  // 学习日历
  {
    path: '/study-calendar',
    name: 'studyCalendar',
    component: function () {
      return import('../views/wsy_component/StudyCalendar')
    }
  },
  // 教师详情
  {
    path: '/course-detail',
    name: 'courseDetail',
    component: function () {
      return import('../views/wsy_component/CourseDetail')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
