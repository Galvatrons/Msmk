<template>
  <div>
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left" @click="onBack"></div>
        <div class="head_title">设置密码</div>
        <div class="head_icon">
          <span @click="onSkip">跳过</span>
        </div>
      </div>
    </div>
    <div class="loginInput_container">
      <div
        class="loginInput_phone"
        :class="inputActive == 1 ? 'loginInput_active' : 'loginInput_phone'"
      >
        <input
          type="text"
          placeholder="请设置登陆密码"
          @focus="onFocusPhone"
          @blur="onBlur"
          v-model="passValue"
        />
      </div>
      <div
        class="loginInput_phone"
        :class="inputActive == 2 ? 'loginInput_active' : 'loginInput_phone'"
      >
        <input
          type="text"
          placeholder="请再次输入密码"
          @focus="onFocusCode"
          @blur="onBlur"
          v-model="passOkValue"
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
      passValue: "",
      passOkValue: "",
    };
  },
  methods: {
    onBack() {
      this.$router.push("/yzLogin");
    },
    onFocusPhone() {
      this.inputActive = 1;
    },
    onFocusCode() {
      this.inputActive = 2;
    },
    onFocusPass() {
      this.inputActive = 3;
    },
    onBlur() {
      this.inputActive = 0;
    },
    onSkip(){
      this.$router.push("/yzMessage")
    },
    onClickOk() {
      if (this.passValue.length < 6 || this.passOkValue.length < 6) {
        Toast("密码长度不能少于6位");
      } else {
        if (this.passValue == this.passOkValue) {
          Toast("cheng");
        } else {
          Toast("两次密码不一致");
        }
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
  padding-left: 0.2rem;
  .loginInput_phone {
    width: 90%;
    height: 0.5rem;
    // background-color: chocolate;
    display: flex;
    align-items: center;
    margin-top: 0.1rem;
    border-bottom: 0.001rem solid rgb(245, 245, 245);
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
      width: 50%;
      height: 60%;
      color: gray;
    }
  }
  .loginInput_active {
    width: 90%;
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
