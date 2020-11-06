import Vue from 'vue'
import VueRouter from 'vue-router'
import obj from "./aaa"

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: '/',
    redirect: "/lwh_main",
    meta:{
      title:"首页"
    }
  },
  // 登录路由
  {
    path: '/Wyl-Login',
    name: "Wyl-Login",
    component: () => import('../components/wylComponents/Wyl-Login.vue'),
    meta:{
      title:"登录"
    }
  },
  // 课程页面
  {
    path: '/lwh_course',
    name: 'lwh_course',
    component: function () {
      return import('../views/yzCourse/course.vue')
    },
    meta:{
      title:"特色课"
    }
  },
  // 首页路由
  {
    path: '/lwh_main',
    name: 'lwh_main',

    component: function () {
      return import('../views/wsy_component/index')
    },
    meta:{
      title:"首页"
    }
  },
  // 讲师详情
  {
    path: '/teacher',
    name: 'teacher',
    component: function () {
      return import('../views/wsy_component/WsyTeacherInfo')
    },
    meta:{
      title:"讲师详情"
    }
  },
  // 讲师详情2
  {
    path:"/yzTeahcerInfo",
    name:"yzTeahcerInfo",
    component: function () {
      return import('../views/yzCourse/yzTeahcerInfo.vue')
    },
    meta:{
      title:"讲师详情"
    }
  },
  // 一对一
  {
    path: '/oto',
    name: 'oto',
    component: function () {
      return import('../views/wsy_component/Oto')
    },
    meta:{
      title:"一对一辅导"
    }
  },
  // 约课路由
  {
    path: '/lwh_york',
    name: 'lwh_york',
    component: () => import('../components/wylComponents/Wyl-myask.vue'),
    meta:{
      title:"约课"
    }
  },
  // 我的路由
  {
    path: '/lwh_my',
    name: 'lwh_my',
    component: () => import('../components/wylComponents/Wyl-Main.vue'),
    meta:{
      title:"我的"
    }
  },
  // 练习路由
  {
    path: '/lwh_exercise',
    name: 'lwh_exercise',
    component: function () {
      return import('../views/lwh_views/lwh_exercise.vue')
    },
    meta:{
      title:"练习"
    }
  },
  // 搜索页面
  {
    path: '/search',
    name: 'search',
    component: function () {
      return import('../views/yzCourse/search.vue')
    },
    meta:{
      title:"搜索"
    }
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
    meta:{
      title:"精品课"
    }
  },
  // 注册页
  {
    path: "/wyl-sms",
    name: "Wyl-sms",
    component: () => import('../components/wylComponents/Wyl-sms.vue'),
    meta:{
      title:"注册"
    }
  },
  //找回密码
  {
    path: "/wyl-pass",
    name: "Wyl-pass",
    component: () => import('../components/wylComponents/Wyl-pass.vue'),
    meta:{
      title:"找回密码"
    }
  },

  //课程详情
  {
    path: "/yz_courseDetail",
    name: "yz_courseDetail",
    component: () => import('../views/yzCourse/courseDetail.vue'),
    meta:{
      title:"课程详情"
    }
  },
  {
    path: "/yzTeacherDetail",
    name: "yzTeacherDetail",
    component: () => import("../views/yzCourse/yzTeacherDetail"),
    meta:{
      title:"讲师详情"
    }
  },
  {
    path: "/yzStudyDetail",
    name: "yzStudyDetail",
    component: () => import("../views/yzCourse/yzStudyDetail"),
    meta:{
      title:"学习"
    }
  },
  {
    path: "/yzStudyCalendar",
    name: "yzStudyCalendar",
    component: () => import("../views/yzCourse/yzStudyCalendar"),
    meta:{
      title:"学习日历"
    }
  },

  //我的页面学习币
  {
    path: "/wyl-my-currency",
    name: "Wyl-my-currency",
    component: () => import('../components/wylComponents/Wyl-my-currency.vue'),
    meta:{
      title:"我的学习币"
    }
  },
  //我的页面余额明细
  {
    path: "/wyl-my-ye",
    name: "Wyl-my-ye",
    component: () => import('../components/wylComponents/Wyl-my-ye.vue'),
    meta:{
      title:"我的余额"
    }
  },
  //我的页面特色课跳转
  {
    path: "/wyl-my-study",
    name: "Wyl-my-study",
    component: () => import('../components/wylComponents/Wyl-my-study.vue'),
    meta:{
      title:"特色课"
    }
  },
 //我的页面关注跳转
 {
  path:"/wyl-concern",
  name:"Wyl-concern",
  component: () => import('../components/wylComponents/Wyl-concern.vue'),
  meta:{
    title:"我的关注"
  }
},
//我的页面我的收藏
{
  path:"/wyl-collect",
  name:"Wyl-collect",
  component: () => import('../components/wylComponents/Wyl-collect.vue'),
  meta:{
    title:"我的收藏"
  }
},
//我的-课程订单
{
  path:"/wyl-Kc",
  name:"Wyl-Kc",
  component: () => import('../components/wylComponents/Wyl-Kc.vue'),
  meta:{
    title:"我的订单"
  }
},
//我的-会员订单
{
  path:"/wyl-Hy",
  name:"Wyl-Hy",
  component: () => import('../components/wylComponents/Wyl-Hy.vue'),
  meta:{
    title:"我的会员"
  }
},
//我的-约课订单
{
  path:"/wyl-Yk",
  name:"Wyl-Yk",
  component: () => import('../components/wylComponents/Wyl-Yk.vue'),
  meta:{
    title:"我的约课"
  }
},
  // 学习日历
  {
    path: "/StudyCalendar",
    name: "StudyCalendar",
    component: () => import("../views/wsy_component/StudyCalendar.vue"),
    meta:{
      title:"学习日历"
    }
  },
  // 提交订单页面
  {
    path: "/Purchase",
    name: "Purchase",
    component: () => import("../views/wsy_component/WsyPurchase.vue"),
    meta:{
      title:"提交订单"
    }
  },
  // 课程学习页面
  {
    path: "/study-detail",
    name: "study-detail",
    component: () => import("../views/wsy_component/WsyStudyDetail.vue"),
    meta:{
      title:"学习"
    }
  },
  // 设置密码页面
  {
    path:"/wsySetPass",
    name:"WsySetPass",
    component: () => import("../components/Wsy_setPass.vue"),
    meta:{
      title:"设置密码"
    }
  },
  {  //修改个人信息
    path:"/wsySetMyInfo",
    name:"WsySetMyInfo",
    component: () => import("../views/wsy_component/WsySetMyInfo.vue"),
    meta:{
      title:"修改个人信息"
    }
  },
  { //修改个人昵称
    path:"/wsySetNickName",
    name:"WsySetMyNickName",
    component: () => import("../views/wsy_component/WsySetNickName.vue"),
    meta:{
      title:"修改个人昵称"
    }
  },
  { //修改性别
    path:"/wsySetSex",
    name:"WsySetSex",
    component: () => import("../views/wsy_component/WsySetSex.vue"),
    meta:{
      title:"修改性别"
    }
  },
  { //修改学科
    path:"/wsySetSubject",
    name:"WsySetSubject",
    component: () => import("../views/wsy_component/WsySetSubject.vue"),
    meta:{
      title:"修改学科"
    }
  },
  { //预约课程
    path:"/wsyOto-plan",
    name:"otoPlan",
    component:()=> import("../views/wsy_component/WsyOtoPlan.vue"),
    meta:{
      title:"预约课程"
    }
    // component: () => import("../views/wsy_component/WsyStudyDetail.vue")
  },
  //登陆页面
  {
    path: "/yzLogin",
    name: "yzLogin",
    component: () => import("../views/yzCourse/yzLogin.vue"),
    meta: {
      title: "登陆"
    }
  },
  // 找回密码页面
  {
    path: "/yzForgetpass",
    name: "yzForgetpass",
    component: () => import("../views/yzCourse/yzForgetpass.vue"),
    meta: {
      title: "找回密码"
    }
  },
  // 注册页面
  {
    path: "/yzRegister",
    name: "yzRegister",
    component: () => import("../views/yzCourse/yzRegister.vue"),
    meta: {
      title: "注册"
    }
  },
  // 设置密码页面
  {
    path: "/SetPassword",
    name: "SetPassword",
    component: () => import("../views/yzCourse/SetPassword.vue"),
    meta: {
      title: "设置密码"
    }
  },
  // 信息填写页
  {
    path: "/yzMessage",
    name: "yzMessage",
    component: () => import("../views/yzCourse/yzMessage.vue")
  },
  // 修改昵称页面
  {
    path: "/yzSetname",
    name: "yzSetname",
    component: () => import("../views/yzCourse/yzSetname.vue")
  },
  // 修改年龄页面
  {
    path: "/yzSetage",
    name: "yzSetage",
    component: () => import("../views/yzCourse/yzSetage.vue")
  },
  // 修改学科页面
  {
    path: "/yzSetsubject",
    name: "yzSetsubject",
    component: () => import("../views/yzCourse/yzSetsubject.vue")
  },
  // 修改密码页面
  {
    path: "/yzAmendPass",
    name: "yzAmendPass",
    component: () => import("../views/yzCourse/yzAmendPass.vue")
  },
  // 设置页面
  {
    path: "/yzSetting",
    name: "yzSetting",
    component: () => import("../views/yzCourse/yzSetting")
  },
  // 修改密码页面
  {
    path: "/yzChangePass",
    name: "yzChangePass",
    component: () => import("../views/yzCourse/yzChangePass")
  },
  // 订单详情
  {
    path:"/yzOrderDetail",
    name:"yzOrderDetail",
    component: () => import("../views/yzCourse/yzOrderDetail")
  },
  obj
]

const router = new VueRouter({
  routes
})

//设置路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to要去的页面 from从哪里来 next放行
//   document.title = to.meta.title
//   next()


//   let token = sessionStorage.getItem("token")
//   if (to.name == "yz_courseDetail"
//     || to.name == 'yzTeacherDetail'
//     || to.name == "lwh_my") {
//     if (token) {
//       next()
//     } else {
//       next("/yzLogin")
//     }
//   } else {
//     next()
//   }
// })

export default router