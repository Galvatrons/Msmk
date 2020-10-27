import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // 登录页
  {
    path:"/",
    name:"Wyl-Login",
    component: () => import('../components/Wyl-Login.vue')
  },
  // 注册页
  {
    path:"/wyl-sms",
    name:"Wyl-sms",
    component: () => import('../components/Wyl-sms.vue')
  },
  //找回密码
  {
    path:"/wyl-pass",
    name:"Wyl-pass",
    component: () => import('../components/Wyl-pass.vue')
  },
  //约客记录
  {
    path:"/wyl-myask",
    name:"Wyl-myask",
    component: () => import('../components/Wyl-myask.vue')
  },
  //我的页面
  {
    path:"/wyl-Main",
    name:"Wyl-Main",
    component: () => import('../components/Wyl-Main.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
