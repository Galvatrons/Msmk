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


import 'vant/lib/index.css';
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
