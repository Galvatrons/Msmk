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
      return import('../views/yzCourse/course.vue')
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
  // 讲师详情
  {
    path: '/teacher',
    name: 'teacher',
    component: function () {
      return import('../views/wsy_component/WsyTeacherInfo')
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
      return import('../views/lwh_views/lwh_exercise.vue')
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
    path: "/wyl-sms",
    name: "Wyl-sms",
    component: () => import('../components/wylComponents/Wyl-sms.vue')
  },
  //找回密码
  {
    path: "/wyl-pass",
    name: "Wyl-pass",
    component: () => import('../components/wylComponents/Wyl-pass.vue')
  },

  //课程详情
  {
    path: "/yz_courseDetail",
    name: "yz_courseDetail",
    component: () => import('../views/yzCourse/courseDetail.vue')
  },
  {
    path: "/yzTeacherDetail",
    name: "yzTeacherDetail",
    component: () => import("../views/yzCourse/yzTeacherDetail")
  },
  {
    path: "/yzStudyDetail",
    name: "yzStudyDetail",
    component: () => import("../views/yzCourse/yzStudyDetail")
  },
  {
    path: "/yzStudyCalendar",
    name: "yzStudyCalendar",
    component: () => import("../views/yzCourse/yzStudyCalendar")
  },

  //我的页面学习币
  {
    path:"/wyl-my-currency",
    name:"Wyl-my-currency",
    component: () => import('../components/wylComponents/Wyl-my-currency.vue')
  },
  //我的页面余额明细
  {
    path:"/wyl-my-ye",
    name:"Wyl-my-ye",
    component: () => import('../components/wylComponents/Wyl-my-ye.vue')
  },
  //我的页面特色课跳转
  {
    path:"/wyl-my-study",
    name:"Wyl-my-study",
    component: () => import('../components/wylComponents/Wyl-my-study.vue')
  },
 //我的页面关注跳转
 {
  path:"/wyl-concern",
  name:"Wyl-concern",
  component: () => import('../components/wylComponents/Wyl-concern.vue')
},
//我的页面我的收藏
{
  path:"/wyl-collect",
  name:"Wyl-collect",
  component: () => import('../components/wylComponents/Wyl-collect.vue')
},
//我的-课程订单
{
  path:"/wyl-Kc",
  name:"Wyl-Kc",
  component: () => import('../components/wylComponents/Wyl-Kc.vue')
},
//我的-会员订单
{
  path:"/wyl-Hy",
  name:"Wyl-Hy",
  component: () => import('../components/wylComponents/Wyl-Hy.vue')
},
//我的-约课订单
{
  path:"/wyl-Yk",
  name:"Wyl-Yk",
  component: () => import('../components/wylComponents/Wyl-Yk.vue')
},
  // 学习日历
  {
    path:"/StudyCalendar",
    name:"StudyCalendar",
    component:()=> import("../views/wsy_component/StudyCalendar.vue")
  }
 
]

const router = new VueRouter({
  routes
})

export default router
