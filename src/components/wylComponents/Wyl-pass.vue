<template>
  <div>
    <!-- 头部导航 -->
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left">
          <van-icon name="arrow-left" @click="onClickLeft" />
        </div>
        <div class="head_title">找回密码</div>
        <div class="head_icon"></div>
      </div>
    </div>

    <!-- 输入框密码 -->
    <van-form>
      <div class="wsy_box">
        <div class="wsy_mobile wsy_input" :class="[wsy_Active == 1 ? 'wsy_active' : '']">
          <input
            type="text"
            v-model='mobile'
            @focus="wsy_inputFcous(1)"
            @blur="wsy_inputBlur()"
            placeholder="请输入手机号"
          />
          <div class="getCAPTCHA" v-show="!CAPTCHAFlag" @click="getCAPTCHA()">获取验证码</div>
          <div class="getCAPTCHAA" v-show="CAPTCHAFlag">获取验证码({{ wsy_second }})</div>
          <p class="wsy_toast" v-show="!wsy_mobileFlag">请输入正确的手机号码</p>
        </div>
        <div class="wsy_pass wsy_input" :class="[wsy_Active == 2 ? 'wsy_active' : '']">
          <input
            type="text"
            v-model="sms_code"
            @focus="wsy_inputFcous(2)"
            @blur="wsy_inputBlur()"
            placeholder="请输入验证码"
          />
          <p class="wsy_toast" v-show="!wsy_smsFlag">请输入验证码</p>
        </div>
        <div class="wsy_pass wsy_input" :class="[wsy_Active == 3 ? 'wsy_active' : '']">
          <input
            type="password"
            v-model="password"
            @focus="wsy_inputFcous(3)"
            @blur="wsy_inputBlur()"
            placeholder="请输入密码"
          />
          <p class="wsy_toast" v-show="!wsy_passFlag">请输入密码</p>
        </div>
        <!-- <div class="wsy_submit"> -->
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="linear-gradient(to right, rgb(255, 146, 71),rgb(253, 88, 3))"
        >确定</van-button>
        <!-- </div> -->
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  data() {
    return {
      mobile: "",
      sms_code:"",
      password: "",
      wsy_Active: null,
      wsy_mobileFlag: true,
      wsy_passFlag: true,
      wsy_smsFlag:true,
      wsy_flag: false,
      CAPTCHAFlag: false,
      wsy_second: 60
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(1);
    },
    // /输入框获取焦点事件
    wsy_inputFcous(num) {
      this.wsy_Active = num;
    },
    wsy_inputBlur() {
      this.wsy_Active = null;
      let mobileReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (mobileReg.test(this.mobile)) {
        this.wsy_mobileFlag = true;
      } else {
        this.wsy_mobileFlag = false;
      }
      if (this.sms_code.length == 0) {
        this.wsy_smsFlag = false;
      } else {
        this.wsy_smsFlag = true;
      }
      if (this.password.length == 0) {
        this.wsy_passFlag = false;
      } else {
        this.wsy_passFlag = true;
      }
      if (this.wsy_mobileFlag && this.wsy_passFlag && this.wsy_smsFlag) {
        this.wsy_flag = true;
      }
    },
     async getCAPTCHA() {
      let mobileReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (mobileReg.test(this.mobile)) {
        this.wsy_mobileFlag = true;
      } else {
        this.wsy_mobileFlag = false;
        return false;
      }
      if (this.wsy_mobileFlag) {
        this.CAPTCHAFlag = true;
        setInterval(() => {
          this.wsy_second--;
          if (this.wsy_second == 0) {
            this.wsy_second = 0;
            this.CAPTCHAFlag = !this.CAPTCHAFlag;
          }
        }, 1000);
        this.wsy_second = 60;
        let { data }= await this.$http.post("/api/app/password", {
          mobile: this.mobile,
          password:this.password,
          sms_code:this.sms_code
        });
        console.log(data);
        if(data.code == 201){
          Toast.fail('请勿重复获取短信验证码');
        }else if(data.code == 200){
          Toast.success('发送成功');
        }
      }

      // this.CAPTCHAFlag = !this.CAPTCHAFlag
    },
  }
};
</script>

<style lang='scss' scoped>
.wsy_toast {
  color: red;
  font-size: 0.1rem;
  position: absolute;
  left: 0;
  top: 0.4rem;
}

.getCAPTCHAA {
  font-size: 0.12rem;
  color: #8c8c8c;
  position: absolute;
  right: 0;
  top: 0.2rem;
}

.getCAPTCHA {
  font-size: 0.12rem;
  color: #eb6100;
  position: absolute;
  right: 0;
  top: 0.2rem;
}
.wsy_input {
  position: relative;
}
.wsy_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wsy_input {
  width: 3.4rem;
  padding-top: 0.2rem 0;
  box-sizing: border-box;
  border-bottom: 0.01rem solid rgb(238, 238, 238);
  > input {
    margin: 0.2rem 0;
    border: 0;
  }
  > input::placeholder {
    font-size: 0.16rem;
    color: #bebebe;
  }
}
.wsy_active {
  border-bottom: 0.01rem solid #eb6100;
}
.van-button {
  width: 3.4rem;
  margin-top: 0.6rem;
  // margin-left: 0.4rem;
}
.header_container {
  width: 100%;
  height: 0.48rem;
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
</style>