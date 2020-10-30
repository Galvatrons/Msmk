import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from "vuex-persist"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lwh_flag: true,
    filterId: "",
    wsy_isClose: true,   //控制立即登录弹框状态
    wsy_isHint: true,
    yz_Mess: [],
    yz_Age: "",
    yz_Date: "",
    yz_Subject: [],
    yz_Grade: "",
    yzLoginMess: {},

  },
  mutations: {
    lwh_btn(s, v) {
      s.lwh_flag = v
    },
    filterId(state, id) {
      state.filterId = id
      console.log(state.filterId);
    },
    wsy_Close(state, bool) {
      state.wsy_isClose = bool
    },
    wsy_Hint(state, bool) {
      console.log(bool);
      state.wsy_isHint = bool
    },
    yz_Mess(state, item) {
      state.yz_Mess = item
    },
    yz_Age(state, item) {
      state.yz_Age = item
      console.log(state.yz_Age);
    },
    yz_Date(state, item) {
      state.yz_Date = item
    },
    yz_Subject(state, item) {
      state.yz_Subject = [...item]
      console.log(state.yz_Subject);
    },
    yz_Grade(state, item) {
      state.yz_Grade = item
    },
    yzLoginMess(state, item) {
      state.yzLoginMess = item
    },
  },
  actions: {
  },
  getters: {

  },
  modules: {
  },
  plugins: [
    new VuexPersist({
      storage: window.localStorage
    }).plugin
  ]
})
