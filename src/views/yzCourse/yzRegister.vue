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
          placeholder="请输入短信验证码"
          v-model="passValue"
          @focus="onFocusPass"
          @blur="onBlur"
        />
      </div>
    </div>
    <div class="findInput_container">
      <span class="none">*未注册的手机号将自动注册</span>
      <span @click="onLogin">使用密码登陆</span>
    </div>
    <div class="loginButton"><button @click="onLoginOk">登陆</button></div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      inputActive: 0,
      phoneValue: "",
      codeActive: false,
      time: 60,
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
    onLogin() {
      this.$router.push("/yzLogin");
    },
    onLoginOk() {
      this.$http
        .post("/api/app/login", {
          mobile: this.phoneValue,
          sms_code: this.passValue,
          client: 1,
          type: 2,
        })
        .then((res) => {
          if (res.data.code == 200) {
            console.log(res);
            this.$store.commit("yzLoginMess", res.data.data);
            if (res.data.data.is_new == 1) {
              this.$router.push("/SetPassword");
            } else {
              this.$router.push("/lwh_my");
            }
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
            sms_type: "login",
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
.findInput_container {
  width: 100%;
  padding: 0.1rem 0.4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 0.14rem;
  color: gray;
  .none {
    color: rgb(212, 212, 212);
  }
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
