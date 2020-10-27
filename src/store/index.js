import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lwh_flag: true
  },
  mutations: {
    lwh_btn(s, v) {

      s.lwh_flag = v
    }
  },
  actions: {
  },
  modules: {
  }
})
