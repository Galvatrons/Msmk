<template>
  <div>
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left" @click="onBack">
          <van-icon name="arrow-left" />
        </div>
        <div class="head_title">信息填写</div>
        <div class="head_icon"></div>
      </div>
    </div>
    <div class="messageWrapper">
      <div class="messageSlide">
        <span>昵称</span>
        <div class="messItem" @click="onNickname">
          <span> {{ yzLoginMess.nickname }}</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="messageSlide">
        <span>性别</span>
        <div class="messItem" @click="onAge">
          <span>{{ yz_Age }}</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="messageSlide">
        <span>出生日期</span>
        <div class="messItem" @click="onDate">
          <span> {{ yz_Date }}</span>
          <van-icon name="arrow" />
        </div>
      </div>

      <div class="messageSlide">
        <span>所在城市</span>
        <div class="messItem" @click="onCity">
          <span> 请选择</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="messageSlide">
        <span>学科</span>
        <div class="messItem" @click="onSubject">
          <div class="subject_wrapper">
            <span v-for="(item, index) in yz_Subject" :key="index">{{
              item.title
            }}</span>
          </div>
          <span></span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="messageSlide">
        <span>年级</span>
        <div class="messItem" @click="onGrade">
          <span>{{ yz_Grade }}</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="button_wrapper">
        <button @click="onSubmit">提交信息</button>
      </div>
    </div>

    <!-- 日期面板 -->
    <van-action-sheet v-model="dateShow">
      <div class="content">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </div>
    </van-action-sheet>
    <!-- 地面板 -->
    <van-action-sheet v-model="cityShow">
      <van-area
        title="标题"
        :area-list="areaList"
        @confirm="onCityConfirm"
        @change="onChangeCity"
      />
    </van-action-sheet>
    <!-- 年级面板 -->
    <van-action-sheet v-model="gradeShow">
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="onGradeConfirm"
      />
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yz_Mess: this.$store.state.yz_Mess,
      dateShow: false,
      cityShow: false,
      gradeShow: false,
      phone: "1598965486",
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      // 地址数据
      columns: [
        "小学一年级",
        "小学二年级",
        "小学三年级",
        "小学四年级",
        "小学五年级",
        "小学六年级",
        "初一",
        "初二",
        "初三",
        "高一",
        "高二",
        "高三",
      ],
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {},
      },
    };
  },
  mounted() {
    // this.$http.get("/app/module/attribute/1").then((res) => {
    //   console.log(res);
    // });
    this.getCityData();
    console.log(this.areaList);
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    // 获取城市数据
    getCityData() {
      this.$http.get("/api/app/sonArea/0?").then((res) => {
        console.log(res.data.data);
        // this.areaList.province_list = res.data.data
        let obj = {};
        for (let i = 0; i < res.data.data.length; i++) {
          obj[res.data.data[i].id] = res.data.data[i].area_name;
        }
        console.log(obj);
        this.areaList.province_list = obj;
      });
      
    },
    // 改变省或市或区的时候触发事件
    onChangeCity(picker, data, index) {
      console.log(picker, data, index);
      if (index == 0) {
        this.$http.get(`/api/app/sonArea/${data[index].code}?`).then((res) => {
          console.log(res);
          let obj = {};
          for (let i = 0; i < res.data.data.length; i++) {
            obj[res.data.data[i].id] = res.data.data[i].area_name;
          }
          console.log(obj);
          this.areaList.city_list = obj;
        });
      } else if (index == 1) {
        this.$http.get(`/api/app/sonArea/${data[index].code}?`).then((res) => {
          console.log(res);
          let obj = {};
          for (let i = 0; i < res.data.data.length; i++) {
            obj[res.data.data[i].id] = res.data.data[i].area_name;
          }
          console.log(obj);
          this.areaList.county_list = obj;
        });
      }
    },
    onNickname() {
      this.$router.push("/yzSetname");
    },
    onAge() {
      this.$router.push("/yzSetage");
    },
    onDate() {
      this.dateShow = true;
    },
    onCity() {
      this.cityShow = true;
    },
    onSubject() {
      this.$router.push("/yzSetsubject");
    },
    // 点击城市选择确定按钮
    onCityConfirm(value) {
      console.log(value);
    },
    onGrade() {
      this.gradeShow = true;
    },
    // 确认时间
    onConfirm(value) {
      var date = new Date(value);
      var timeStr = `${date.getFullYear()}年${date.getMonth() +
        1}月${date.getDate()}日`;
      console.log(timeStr);
      this.$store.commit("yz_Date", timeStr);
      this.dateShow = false;
    },
    onCancel() {
      this.dateShow = false;
    },
    onGradeConfirm(value, index) {
      console.log(value);
      this.$store.commit("yz_Grade", value);
      this.gradeShow = false;
    },
    onSubmit() {
      this.$router.push("/lwh_main");
    },
  },
  computed: {
    yz_Age() {
      return this.$store.state.yz_Age;
    },
    yz_Date() {
      return this.$store.state.yz_Date;
    },
    yz_Subject() {
      return this.$store.state.yz_Subject;
    },
    yz_Grade() {
      return this.$store.state.yz_Grade;
    },
    yzLoginMess() {
      return this.$store.state.yzLoginMess;
    },
  },
  filters: {
    phoneFilter(value) {
      var value1 = value.slice(3, 7);
      var valStr = value.replace(value1, "****");
      return valStr;
    },
  },
};
</script>

<style lang="scss" scoped>
.header_container {
  width: 100%;
  height: 0.48rem;
  border-bottom: 0.001rem solid rgb(238, 238, 238);
  padding: 0 0.05rem;
  box-sizing: border-box;
  background-color: white;
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
      align-items: center;
      font-size: 0.23rem;
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
      font-size: 0.3rem;
    }
  }
}
.messageWrapper {
  width: 100%;
  height: 100%;
  background-color: rgb(235, 235, 235);
  padding-top: 0.1rem;
  .messageSlide {
    width: 100%;
    height: 0.6rem;
    background-color: white;
    border-bottom: 0.001rem solid rgb(241, 241, 241);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.18rem;
    padding: 0 0.15rem;
    box-sizing: border-box;
    color: gray;
    .messItem {
      height: 100%;
      display: flex;
      align-items: center;
      .subject_wrapper {
        span {
          margin-right: 0.05rem;
          font-size: 0.14rem;
          color: gray;
        }
      }
      span {
        margin-right: 0.1rem;
        font-size: 0.14rem;
        color: gray;
      }
    }
  }
  .button_wrapper {
    width: 100%;
    height: 1rem;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 90%;
      height: 0.5rem;
      border-radius: 0.07rem;
      border: none;
      background-color: orange;
      color: white;
    }
  }
}
</style>
