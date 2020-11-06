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
      <!-- 头像设置 -->
      <div class="box" @click="show_head = true">
        <div class="left">
          <input
            type="file"
            ref="file"
            style="display: none"
            @change="lwh_inpu()"
          />
          <span>头像</span>
          <img :src="lwh_info.avatar" alt="" />
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <!-- 昵称设置 -->
      <div class="box" @click="toSetNickName()">
        <div class="left">
          <span>昵称</span>
          <span>{{ lwh_info.nickname }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <!-- 手机号设置 -->
      <div class="box">
        <div class="left">
          <span>手机号</span>
          <span>{{ lwh_info.mobile }}</span>
        </div>
        <div class="right"></div>
      </div>
      <!-- 设置性别 -->
      <div class="box" @click="toSetSex()">
        <div class="left">
          <span>性别</span>
          <span v-if="lwh_info.sex == 0">男</span>
          <span v-if="lwh_info.sex == 1">女</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <!-- 设置出生日期 -->
      <div class="box" @click="datePopup()">
        <div class="left">
          <span>出生日期</span>
          <span>{{ lwh_info.birthday }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <!-- 设置所在城市 -->
      <div class="box" @click="sitePopup()">
        <div class="left">
          <span>所在城市</span>
          <span>{{
            `${lwh_info.province_name},${lwh_info.city_name},${lwh_info.district_name}`
          }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <div class="box" @click="toSetSubject">
        <div class="left">
          <span>学科</span>
          <span>{{ xk }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
      <div class="box" @click="setClass">
        <div class="left">
          <span>年级</span>
          <span>{{ xj }}</span>
        </div>
        <div class="right">
          <van-icon color="#CACACA" size="24px" name="arrow" />
        </div>
      </div>
    </div>
    <!-- 设置生日 -->
    <van-popup
      v-model="datePopupIsShow"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-datetime-picker
        @confirm="setDate"
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
    <van-popup
      v-model="sitePopupIsShow"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-area
        @confirm="lwh_cs"
        @change="lwh_ct"
        @cancel="sitePopupIsShow = false"
        :area-list="lwh_city"
        :columns-num="3"
        :value="lwh_info.district_id+''"
      />
    </van-popup>

    <!-- 年级弹出层 -->
    <van-popup
      v-model="classPopupIsShow"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-picker
        title
        show-toolbar
        value-key="name"
        :columns="classColumns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
    <!-- 头像弹出层 -->
    <van-popup v-model="show_head" position="bottom" :style="{ height: '25%' }">
      <ul class="lwh_headImg">
        <li @click="lwh_tog()">拍照</li>
        <li @click="lwh_tog()">从手机相册选择</li>
        <li @click="show_head = false">取消</li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      lwh_info: [],
      show_head: false,
      minDate: new Date(1980, 0, 1),
      maxDate: new Date(2021, 10, 1),
      currentDate: new Date(),
      datePopupIsShow: false, //时间选择器弹出层显隐状态
      sitePopupIsShow: false, //地区选择器弹出层显隐状态
      classPopupIsShow: false, //班级选择器弹出层显隐状态
      columns: [],
      classColumns: [],
      xj: "",
      xk: "",
      lwh_city: {
        province_list: {},
        city_list: {},
        county_list: {},
      },
    };
  },
  created() {},
  mounted() {
    this.lwh_Ajax();
    this.sitePopdow();
    // this.sitePopshi(110000);
    // this.sitePopqu(110100);
    this.lwh_class();
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
    async lwh_Ajax() {
      let { data } = await this.$http.get(
        "https://www.365msmk.com/api/app/userInfo?"
      );
      this.lwh_info = data.data;
      this.xj = data.data.attr[0].attr_value;
      this.xk = data.data.attr[1].attr_value;
      console.log(data);
    },
    //年级选择
    async lwh_class() {
      let { data } = await this.$http.get(
        "https://www.365msmk.com/api/app/module/attribute/1?"
      );
      console.log(data.data[0].value);
      this.classColumns = data.data[0].value;
    },
    // 头像上传
    lwh_tog() {
      this.$refs.file.click();
    },
    async lwh_inpu() {
      console.log(1);
      let from = new FormData();
      from.append("file", event.target.files[0]);
      console.log(from.get("file"));
      // 请求数据将from数据转换成线上地址
      let { data } = await this.$http.post(
        "https://www.365msmk.com/api/app/public/img",
        from
      );
      //将转换好的数据上传到服务器
      let { data: req } = await this.$http.put(
        "https://www.365msmk.com/api/app/user",
        {
          avatar: data.data.path,
        }
      );
      this.lwh_Ajax();
      this.show_head = false;
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
    // 省级地区数据获取
    async sitePopdow() {
      let { data } = await this.$http.get(
        "https://www.365msmk.com/api/app/sonArea/0"
      );

      this.lwh_city.province_list = this.lwh_citys(data.data);

      let { data: req } = await this.$http.get(
        `https://www.365msmk.com/api/app/sonArea/${this.lwh_info.province_id?this.lwh_info.province_id:data.data[0].id}`
      );
      this.lwh_city.city_list = this.lwh_citys(req.data);

      let { data: res } = await this.$http.get(
        `https://www.365msmk.com/api/app/sonArea/${this.lwh_info.city_id?this.lwh_info.city_id:req.data[0].id}`
      );

      this.lwh_city.county_list = this.lwh_citys(res.data);
    },
    // 城市数据返回封装
    lwh_citys(arr) {
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
        obj[arr[i].id] = arr[i].area_name;
      }
      return obj;
    },
    // 设置班级弹出层显隐
    setClass() {
      this.classPopupIsShow = true;
    },
    // 设置出生日期
    async setDate(value) {
      var dt = new Date(value); //yyy---mm-dd
      var y = dt.getFullYear(); //得到年份
      var m = dt.getMonth() + 1; //得到月份
      var d = dt.getDate(); //得到日期 // return y + '-' + m + '-' + d
      let { data } = await this.$http.put(
        "https://www.365msmk.com/api/app/user",
        {
          birthday: `${y}-${m}-${d}`,
        }
      );
      if (data.code == 201) {
        Toast("信息更新成功");
      }
      console.log(data.code);
      this.lwh_Ajax();
      this.datePopupIsShow = false;
    },
    async lwh_ct(con, val, index) {
      console.log(val);
      switch (index) {
        case 0:
          let { data: req } = await this.$http.get(
            `https://www.365msmk.com/api/app/sonArea/${val[index].code}`
          );
          this.lwh_city.city_list = this.lwh_citys(req.data);
          let { data: res } = await this.$http.get(
            `https://www.365msmk.com/api/app/sonArea/${req.data[0].id}`
          );

          this.lwh_city.county_list = this.lwh_citys(res.data);
          break;
          case 1:
        
          let { data } = await this.$http.get(
            `https://www.365msmk.com/api/app/sonArea/${val[index].code}`
          );
          this.lwh_city.county_list = this.lwh_citys(data.data);
          
          break;
          default:
          break;
      }
    },
    async lwh_cs(val) {
      let { data } = await this.$http.put(
        "https://www.365msmk.com/api/app/user",
        {
          province_id: val[0].code,
          city_id: val[1].code,
          district_id: val[2].code,
        }
      );
      this.sitePopupIsShow = false;
      this.lwh_Ajax();
    },
    // 修改学科
    toSetSubject() {
      this.$router.push("/wsySetSubject");
    },
    // 修改年纪
    async onConfirm(value) {
      let { data } = await this.$http.put(
        "https://www.365msmk.com/api/app/user",
        {
          user_attr: `[{"attr_id":1,"attr_val_id":${value.id}},{"attr_id":2,"attr_val_id":7}]`,
        }
      );
      console.log(data, value);
      this.classPopupIsShow = false;
    },
    onChange(picker, value, index) {
      //   Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      this.classPopupIsShow = false;
    },
  },
  filters: {},
  computed: {},
  watch: {},
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
  height: 0.62rem;
  line-height: 0.62rem;
  background: #ffffff;
  border-bottom: 0.01rem rgb(238, 238, 238) solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    > :nth-child(1) {
      font-size: 0.16rem;
      color: #595959;
    }
    > :nth-child(2) {
      font-size: 0.16rem;
      color: #8c8c9b;
    }
    > img {
      width: 0.36rem;
      height: 0.36rem;
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
.lwh_headImg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.1rem 0.15rem;
  box-sizing: border-box;
  justify-content: space-between;
  > li {
    font-weight: 300;
    font-size: 0.18rem;
    width: 100%;
    height: 0.45rem;
    border-bottom: 0.01rem solid #f5f5f5;
    line-height: 0.45rem;
    text-align: center;
  }
  > :nth-of-type(3) {
    border: none;
  }
}
</style>
