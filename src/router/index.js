import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: '/',
    redirect: "/lwh_main",
  },
  // 登录路由
  {
    path: '/Wyl-Login',
    name: "Wyl-Login",
    component: () => import('../components/wylComponents/Wyl-Login.vue')
  },
  {
    path: '/',
    name: '/',
  },
  // 课程页面
  {
    path: '/lwh_course',
    name: 'lwh_course',
    component: function () {
      return import( '../views/yzCourse/course.vue')
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
  // 一对一
  {
    path: '/oto',
    name: 'oto',
    component: function () {
      return import('../views/wsy_component/Oto')
    }
  },
  // 约课路由
  {
    path: '/lwh_york',
    name: 'lwh_york',
    component: () => import('../components/wylComponents/Wyl-myask.vue')
  },
  // 我的路由
  {
    path: '/lwh_my',
    name: 'lwh_my',
    component: () => import('../components/wylComponents/Wyl-Main.vue')
  },
  // 练习路由
  {
    path: '/lwh_exercise',
    name: 'lwh_exercise',
    component: function () {
      return import( '../views/lwh_views/lwh_exercise.vue')
    }
  },
  // 搜索页面
  {
    path: '/search',
    name: 'search',
    component: function () {
      return import('../views/yzCourse/search.vue')
    },
  },
// 特色课头部封装
  {
    path: '/yzHeader',
    name: 'yzHeader',
    component: function () {
      return import("../components/yzComponents/yzHeader.vue")
    },
  },
//首页精品课程详情
  {
    path: '/CourseDetail',
    name: 'CourseDetail',
    component: function () {
      return import("../views/wsy_component/CourseDetail.vue")
    },
  },
   // 注册页
   {
    path:"/wyl-sms",
    name:"Wyl-sms",
    component: () => import('../components/wylComponents/Wyl-sms.vue')
  },
  //找回密码
  {
    path:"/wyl-pass",
    name:"Wyl-pass",
    component: () => import('../components/wylComponents/Wyl-pass.vue')
  },
 
]

const router = new VueRouter({
  routes
})

export default router
