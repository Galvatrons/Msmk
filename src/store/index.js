import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from "vuex-persist"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lwh_flag: true,
    filterId: ""
  },
  mutations: {
    lwh_btn(s, v) {
      s.lwh_flag = v
    },
    filterId(state, id) {
      state.filterId = id
      console.log(state.filterId);
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
