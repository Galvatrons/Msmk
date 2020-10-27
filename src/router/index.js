import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
  // 课程页面
  {
    path: '/course',
    name: 'course',
=======

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
<<<<<<< HEAD
  // }

  {
    path: '/',
    name: '/',
=======
  // },
  // 课程页面
  {
    path: '/lwh_course',
    name: 'lwh_course',
>>>>>>> ab29c76e91578a7b4ca6a4ce791fd06dafc71068
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/yzCourse/course.vue')
    },
  },
<<<<<<< HEAD
  // 搜索页面
=======
  // 首页路由
  {
    path: '/lwh_main',
    name: 'lwh_main',
>>>>>>> 16b7a3e4804516b0e2fe8fba73e5899cfb46e0c0
    component: function () {
      return import('../views/wsy_component/index')
    }
  },
<<<<<<< HEAD
  {
    path: '/oto',
    name: 'oto',
    component: function () {
      return import('../views/wsy_component/Oto')
    }
  },
=======
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
>>>>>>> 16b7a3e4804516b0e2fe8fba73e5899cfb46e0c0
>>>>>>> ab29c76e91578a7b4ca6a4ce791fd06dafc71068
  {
    path: '/search',
    name: 'search',
    component: function () {
<<<<<<< HEAD
      return import(/* webpackChunkName: "about" */ '../views/yzCourse/search.vue')
    },
  },
=======
<<<<<<< HEAD
      return import('../views/wsy_component/Search')
    }
  },
=======
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
  
>>>>>>> 16b7a3e4804516b0e2fe8fba73e5899cfb46e0c0
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
>>>>>>> ab29c76e91578a7b4ca6a4ce791fd06dafc71068
]

const router = new VueRouter({
  routes
})

export default router
