import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from "vuex-persist"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lwh_flag: true,
<<<<<<< HEAD
    filterId: ""
=======
    wsy_isClose:false,   //控制立即登录弹框状态
    wsy_isHint:true
>>>>>>> 9da85dcd5cbd97c2a195c87295bc6e1edd75639d
  },
  mutations: {
    lwh_btn(s, v) {
      s.lwh_flag = v
    },
<<<<<<< HEAD
    filterId(state, id) {
      state.filterId = id
      console.log(state.filterId);
=======
    wsy_Close(state,bool){
      state.wsy_isClose = bool
    },
    wsy_Hint(state,bool){
      console.log(bool);
      state.wsy_isHint = bool
>>>>>>> 9da85dcd5cbd97c2a195c87295bc6e1edd75639d
    }
  },
  actions: {
  },
  getters:{
    
  },
  modules: {
  },
  plugins: [
    new VuexPersist({
      storage: window.localStorage
    }).plugin
  ]
})
