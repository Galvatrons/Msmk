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
// 全局指令引入
import "./assets/directive"
Vue.config.productionTip = false

// axios全局定义
Vue.prototype.$http = request

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


router.beforeEach((to, from, next) => {
  let wsy_str = '/StudyCalendar/teacher'
  if (wsy_str.includes(to.path)) {
    store.commit("wsy_Close", true)
    store.commit('lwh_btn', true)
    return false
  }
  let lwh_str = "/lwh_course/lwh_main/lwh_york/lwh_exercise/lwh_my"
  if (lwh_str.includes(to.path)) {
    store.commit('lwh_btn', true)
    next(true)

  } else {
    store.commit('lwh_btn', false)
    next(true)

  }

})


import 'vant/lib/index.css';
new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')