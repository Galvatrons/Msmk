<template>
  <div>
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left" @click="onBack">
          <van-icon name="arrow-left" />
        </div>
        <div class="head_title">密码</div>
        <div class="head_icon"></div>
      </div>
    </div>
    <div class="loginInput_container">
      <div
        class="loginInput_phone"
        :class="inputActive == 1 ? 'loginInput_active' : 'loginInput_phone'"
      >
        <input
          type="text"
          placeholder="请输入手机号"
          v-model="phoneValue"
          @focus="onFocusPhone"
          @blur="onBlur"
        />
        <span class="gainCode" @click="getCode" v-show="codeActive == false"
          >获取验证码</span
        >
        <span class="gainCode_active" v-show="codeActive"
          >获取验证码(<span>{{ time }}</span
          >)</span
        >
      </div>
      <div
        class="loginInput_phone"
        :class="inputActive == 2 ? 'loginInput_active' : 'loginInput_phone'"
      >
        <input
          type="text"
          placeholder="请输入验证码"
          v-model="YzpassValue"
          @focus="onFocusYzPass"
          @blur="onBlur"
        />
      </div>
      <div
        class="loginInput_phone"
        :class="inputActive == 3 ? 'loginInput_active' : 'loginInput_phone'"
      >
        <input
          type="text"
          placeholder="请输入密码"
          v-model="passValue"
          @focus="onFocusPass"
          @blur="onBlur"
        />
      </div>
    </div>
    <div class="loginButton"><button @click="onClickOk">确定</button></div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      inputActive: 0,
      phoneValue: "",
      YzpassValue: "",
      codeActive: false,
      time: 60,
      passValue: "",
    };
  },
  methods: {
    onBack() {
      this.$router.push("/yzLogin");
    },
    onFocusPhone() {
      console.log(111);
      this.inputActive = 1;
    },
    onFocusYzPass() {
      this.inputActive = 2;
    },
    onFocusPass() {
      this.inputActive = 3;
    },
    onBlur() {
      this.inputActive = 0;
    },
    onClickOk() {
      this.$http
        .post("/api/app/password", {
          mobile: this.phoneValue,
          password: this.passValue,
          sms_code: this.YzpassValue,
        })
        .then((res) => {
          if (res.data.code == 200) {
            Toast("修改密码成功");
            this.$router.push("/lwh_my");
          }
        });
    },
    getCode() {
      if (!/^1[3456789]\d{9}$/.test(this.phoneValue)) {
        Toast("手机号码格式不正确");
      } else {
        this.$http
          .post("/api/app/smsCode", {
            mobile: this.phoneValue,
            sms_type: "getPassword",
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              this.codeActive = true;
              setInterval(() => {
                this.time--;
                if (this.time < 1) {
                  this.codeActive = false;
                }
              }, 1000);
            } else if (res.data.code == 201) {
              Toast(res.data.msg);
            }
          });
      }
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
      width: 0.35rem;
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
      width: 0.35rem;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.16rem;
    }
  }
}
.loginInput_container {
  width: 100%;
  // background-color: chartreuse;
  padding-left: 0.4rem;
  .loginInput_phone {
    width: 75%;
    height: 0.5rem;
    // background-color: chocolate;
    display: flex;
    align-items: center;
    margin-top: 0.1rem;
    border-bottom: 0.001rem solid rgb(238, 238, 238);
    justify-content: space-between;
    .gainCode {
      color: orangered;
      font-size: 0.14rem;
    }
    .gainCode_active {
      color: rgb(212, 212, 212);
      font-size: 0.14rem;
    }
    input {
      border: none;
      width: 65%;
      height: 60%;
    }
  }
  .loginInput_active {
    width: 75%;
    height: 0.5rem;
    // background-color: chocolate;
    display: flex;
    align-items: center;
    border-bottom: 0.001rem solid orange;
  }
}
.loginButton {
  width: 100%;
  padding: 0.1rem 0.4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  button {
    width: 100%;
    height: 0.45rem;
    border-radius: 0.25rem;
    border: none;
    color: white;
    background-color: orangered;
    margin-top: 0.4rem;
  }
}
</style>
