import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vant按需引入
import './assets/vantImport'
// axios引入
import request from "./util/request"
// rem引入
import "./assets/rem"
Vue.config.productionTip = false

// axios全局定义
Vue.prototype.$http = request

<<<<<<< HEAD
=======
router.beforeEach((to, from, next) => {
  let lwh_str="/lwh_course/lwh_main/lwh_york/lwh_exercise/lwh_my"
  next(true)
  console.log(lwh_str.includes(to.path))
  if(lwh_str.includes(to.path)){
    store.commit('lwh_btn',true)
  }else{
    store.commit('lwh_btn',false)
  }
})
>>>>>>> ab29c76e91578a7b4ca6a4ce791fd06dafc71068

import 'vant/lib/index.css';
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
