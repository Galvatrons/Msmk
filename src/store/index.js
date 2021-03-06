import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from "vuex-persist"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lwh_flag: true,
    filterId: "",
    wsy_isClose:false,   //控制立即登录弹框状态
    wsy_isHint:false,
    wsy_isVerify:false,  //控制确认充值弹框状态
    wsy_isVerifyB:false,  //控制去充值弹框状态
    wsy_mobile:"15076978269",
    wsy_sex:"保密",
    wsy_Date:"请选择",
    wsy_Site:"请选择",
    wsy_Subject:"请选择",
    wsy_Class:"请选择",
    lwh_list:[{course_type:0,order_by:0,attr_val_id:""}],

    yz_Mess: [],
    yz_Age: "",
    yz_Date: "",
    yz_Subject: [],
    yz_Grade: "",
    yzLoginMess: {},
    wsyFlag:false,  //留言组件显隐状态
    lwh_listnum:0,
    yzGradeId: "",
    yzClassify: "",
    fenleiWrapper: []
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
      state.wsy_isHint = bool
    },
    wsy_Verify(state, bool) {
      state.wsy_isVerify = bool
    },
    wsy_VerifyB(state, bool) {
      state.wsy_isVerifyB = bool
    },
    changeMobile(state,value){
      state.wsy_mobile = value
    },
    changeSex(state, value) {
      state.wsy_sex = value
    },
    changeDate(state, value) {
      state.wsy_Date = value
    },
    changeSite(state, value) {
      state.wsy_Site = value
    },
    changeSubject(state, value) {
      state.wsy_Subject = value
    },
    changeClass(state, value) {
      state.wsy_Class = value
    },
    lwh_saveBtn(s, v) {
      s.lwh_obj.map((i) => {
        if (i.tit == v.type) {
          i.cont = v.value
        }
      })
    },
    lwh_loadBtn(s, v) {
      s.lwh_load = v
    },
    lwh_add(s, v) {

      s.lwh_list[0].attr_val_id = v
    },
    lwh_ads(s, v) {
      s.lwh_list[0].order_by = v
    },
    lwh_adx(s, v) {
      s.lwh_list[0].course_type = v
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
    wsyShowLeave(state,bool){
      state.wsyFlag = bool
    },
    lwh_numList(s,v){
      s.lwh_listnum=v
    },
    // 年级id
    yzGradeId(state, id) {
      state.yzGradeId = id
    },
    // 学科id
    yzClassify(state, id) {
      state.yzClassify = id
    },
    fenleiBox1(state, item) {
      state.fenleiWrapper = item
    },
    fenleiBox2(state, item) {
      state.fenleiWrapper = item
    },
    fenleiBox3(state,item){
      state.fenleiWrapper = item
    }
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
