<template>
  <div class="wsy_box">
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left">
          <van-icon name="arrow-left" @click="onClickLeft" />
        </div>
        <div class="head_title">信息填写</div>
        <div class="head_icon"></div>
      </div>
    </div>
    <div class="wsy_info_box">
      <div class="box" @click="toSetNickName()">
        <div class="left">
          <span>用户名</span>
          <span>{{ this.$store.state.wsy_mobile }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <div class="box" @click="toSetSex()">
        <div class="left">
          <span>性别</span>
          <span>{{ this.$store.state.wsy_sex }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <div class="box" @click="datePopup()">
        <div class="left">
          <span>出生日期</span>
          <span>{{ this.$store.state.wsy_Date }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <div class="box" @click="sitePopup()">
        <div class="left">
          <span>所在城市</span>
          <span>{{ this.$store.state.wsy_Site }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <div class="box" @click="toSetSubject">
        <div class="left">
          <span>学科</span>
          <span>{{ this.$store.state.wsy_Subject }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <div class="box" @click="setClass">
        <div class="left">
          <span>年级</span>
          <span>{{ this.$store.state.wsy_Class }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
    </div>
    <div class="submit">
      <van-button color="#EB6100" block @click='toindex()'>提交信息</van-button>
    </div>
    <van-popup v-model="datePopupIsShow" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        @confirm="setDate"
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
    <van-popup v-model="sitePopupIsShow" position="bottom" :style="{ height: '40%' }">
      <van-picker show-toolbar title @confirm="setSite" :columns="columns" />
    </van-popup>
    <van-popup v-model="classPopupIsShow" position="bottom" :style="{ height: '40%' }">
      <van-picker
        title
        show-toolbar
        :columns="classColumns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      datePopupIsShow: false, //时间选择器弹出层显隐状态
      sitePopupIsShow: false, //地区选择器弹出层显隐状态
      classPopupIsShow: false, //班级选择器弹出层显隐状态
      columns: [],
      classColumns: [
        "小学一年级",
        "小学二年级",
        "小学三年级",
        "小学四年级",
        "小学五年级",
        "小学六年级",
        "初一",
        "初二"
      ]
    };
  },
  created() {},
  mounted() {
    axios.get("site.json").then(({ data }) => {
      this.columns = data;
    });
  },
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
    onClickLeft() {
      this.$router.back(1);
    },
    // 个人昵称
    toSetNickName() {
      this.$router.push("/wsySetNickName");
    },
    // 修改性别
    toSetSex() {
      this.$router.push("/wsySetSex");
    },
    // 出生日期弹出层显隐
    datePopup() {
      this.datePopupIsShow = true;
    },
    // 设置地区弹出层显隐
    sitePopup() {
      this.sitePopupIsShow = true;
    },
    // 设置班级弹出层显隐
    setClass() {
      this.classPopupIsShow = true;
    },
    // 设置出生日期
    setDate(value) {
      this.$store.commit('changeDate',this.formatDate(value.getTime())) 
      this.datePopupIsShow = false;
    },
    formatDate(date) {
      var date = new Date(date);
      var YY = date.getFullYear() + "-";
      var MM =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      return YY + MM + DD;
    },
    // 设置地址
    setSite(value) {
      this.$store.commit('changeSite',value.join(""))
      this.sitePopupIsShow = false;
    },
    // 修改学科
    toSetSubject() {
      this.$router.push("/wsySetSubject");
    },
    // 修改年纪
    onConfirm(value, index) {
        this.$store.commit('changeClass',value)

      this.classPopupIsShow = false;
    },
    onChange(picker, value, index) {
      //   Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      this.classPopupIsShow = false;
    },
    // 跳转到首页
    toindex(){
      this.$router.push("/lwh_main");
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_box {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
}
.header_container {
  width: 100%;
  height: 0.48rem;
  padding: 0 0.05rem;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 0.1rem;
  .header_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .head_left {
      width: 0.27rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.2rem;
    }
    .head_title {
      font-size: 0.18rem;
      color: rgb(49, 49, 49);
    }
    .head_icon {
      width: 0.27rem;
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 0.2rem;
      }
    }
  }
}
.wsy_info_box {
  width: 100%;
  padding: 0 0.2rem;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 0.8rem;
}
.box {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #ffffff;
  border-bottom: 0.01rem rgb(238, 238, 238) solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .left {
    display: flex;
    justify-content: space-between;
    width: 90%;
    > :nth-child(1) {
      font-size: 0.18rem;
      color: #595959;
    }
    > :nth-child(2) {
      font-size: 0.18rem;
      color: #8c8c9b;
    }
  }
  > .right {
    width: 5%;
    display: flex;
    align-items: center;
  }
}
.submit {
  width: 100%;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
</style>
