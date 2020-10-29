import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lwh_flag: true,
    wsy_isClose:false,   //控制立即登录弹框状态
    wsy_isHint:true
  },
  mutations: {
    lwh_btn(s, v) {
      s.lwh_flag = v
    },
    wsy_Close(state,bool){
      state.wsy_isClose = bool
    },
    wsy_Hint(state,bool){
      console.log(bool);
      state.wsy_isHint = bool
    }
  },
  actions: {
  },
  modules: {
  }
})
