<template>
  <div>
    <div class="login_logo">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt=""
      />
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
      </div>
      <div
        class="loginInput_phone"
        :class="inputActive == 2 ? 'loginInput_active' : 'loginInput_phone'"
      >
        <input
          type="password"
          placeholder="请输入密码"
          v-model="passValue"
          @focus="onFocusPass"
          @blur="onBlur"
        />
      </div>
    </div>
    <div class="findInput_container">
      <span @click="onForgetPass">找回密码</span>
      <span @click="onRegister">注册/验证码登陆</span>
    </div>
    <div class="loginButton"><button @click="onClickLogin">登陆</button></div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      inputActive: 0,
      phoneValue: "",
      passValue: "",
    };
  },
  methods: {
    onFocusPhone() {
      console.log(111);
      this.inputActive = 1;
    },
    onFocusPass() {
      this.inputActive = 2;
    },
    onBlur() {
      this.inputActive = 0;
    },
    onForgetPass() {
      this.$router.push("/yzForgetPass");
    },
    onRegister() {
      this.$router.push("/yzRegister");
    },
    onClickLogin() {
      if (!/^1[3456789]\d{9}$/.test(this.phoneValue)) {
        Toast("手机号码格式不正确");
      } else {
        this.$http
          .post("/api/app/login", {
            mobile: this.phoneValue,
            password: this.passValue,
            type: 1,
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              // this.$store.commit("yz_token",res.data.data.remember_token)
              sessionStorage.setItem("token", res.data.data.remember_token);
              this.$store.commit("yzLoginMess", res.data.data);
              this.$router.push("/lwh_my");
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
.login_logo {
  width: 100%;
  height: 1.9rem;
  // background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 2.5rem;
  }
}
.loginInput_container {
  width: 100%;
  // background-color: chartreuse;
  padding-left: 0.5rem;
  .loginInput_phone {
    width: 2.9rem;
    height: 0.5rem;
    // background-color: chocolate;
    display: flex;
    align-items: center;
    margin-top: 0.1rem;
    border-bottom: 0.001rem solid rgb(238, 238, 238);
    input {
      border: none;
      width: 100%;
      height: 60%;
    }
  }
  .loginInput_active {
    width: 2.9rem;
    height: 0.5rem;
    // background-color: chocolate;
    display: flex;
    align-items: center;
    border-bottom: 0.001rem solid orange;
  }
}
.findInput_container {
  width: 100%;
  padding: 0.1rem 0.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 0.14rem;
  color: gray;
}
.loginButton {
  width: 100%;
  padding: 0.1rem 0.5rem;
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
