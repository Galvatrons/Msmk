import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// Vant按需引入
import './assets/vantImport'
// axios引入
import request from "./util/request"
// rem引入
import "./assets/rem"
Vue.config.productionTip = false

// axios全局定义
Vue.prototype.$http = request


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


import 'vant/lib/index.css';
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
