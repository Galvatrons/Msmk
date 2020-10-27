import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: '/',
    redirect: "/lwh_main",
  },
  // 登录路由
  {
    path: '/lwh_long',
    name: "Wyl-Login",
    component: () => import('../components/Wyl-Login.vue')
  },
  // // 课程路由
  // {
  //   path: '/lwh_course',
  //   name: 'lwh_course',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/lwh_views/lwh_course.vue')
  //   }
  // },
  // 课程页面
  {
    path: '/lwh_course',
    name: 'lwh_course',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/yzCourse/course.vue')
    },
  },
  // 首页路由
  {
    path: '/lwh_main',
    name: 'lwh_main',
    component: function () {
      return import('../views/wsy_component/index')
    }
  },
  // 约课路由
  {
    path: '/lwh_york',
    name: 'lwh_york',
    component: () => import('../components/Wyl-myask.vue')
  },
  // 我的路由
  {
    path: '/lwh_my',
    name: 'lwh_my',
    component: () => import('../components/Wyl-Main.vue')
  },
  // 练习路由
  {
    path: '/lwh_exercise',
    name: 'lwh_exercise',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/lwh_views/lwh_exercise.vue')
    }
  },
  // 搜索页面
  {
    path: '/search',
    name: 'search',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/yzCourse/search.vue')
    },
  },
  // 注册页
  {
    path: "/wyl-sms",
    name: "Wyl-sms",
    component: () => import('../components/Wyl-sms.vue')
  },
  //找回密码
  {
    path: "/wyl-pass",
    name: "Wyl-pass",
    component: () => import('../components/Wyl-pass.vue')
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
