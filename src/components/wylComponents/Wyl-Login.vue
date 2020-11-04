<template>
  <div class="Login-box">
    <div class="Login-img">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
      />
    </div>
    <van-form>
      <!-- <van-field v-model="username" @focus="input_focus()" name="手机号" placeholder="请输入手机号" />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
      />-->
      <div class="wsy_box">
        <div class="wsy_mobile wsy_input" :class="[wsy_Active == 1 ? 'wsy_active' : '']">
          <input
            type="text"
            v-model="mobile"
            @focus="wsy_inputFcous(1)"
            @blur="wsy_inputBlur()"
            placeholder="请输入手机号"
          />
          <p class="wsy_toast" v-show="!wsy_mobileFlag">请输入正确的手机号码</p>
        </div>
        <div class="wsy_pass wsy_input" :class="[wsy_Active == 2 ? 'wsy_active' : '']">
          <input
            type="password"
            v-model="password"
            @focus="wsy_inputFcous(2)"
            @blur="wsy_inputBlur()"
            placeholder="请输入密码"
          />
          <p class="wsy_toast" v-show="!wsy_passFlag">请输入正确的密码</p>
        </div>
        <div class="wsy-text">
          <span @click="toSetPass()">找回密码</span>
          <span @click="wsy_toggle()">注册/验证码登录</span>
        </div>
        <div>
          <van-button
            round
            block
            type="info"
            native-type="submit"
            color="linear-gradient(to right, rgb(255, 146, 71),rgb(253, 88, 3))"
            @click="wsy_Login()"
          >登录</van-button>
        </div>
      </div>
    </van-form>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: "",
      password: "",
      wsy_Active: null,
      wsy_mobileFlag:true,
      wsy_passFlag:true,
      wsy_flag: false
    };
  },
  methods: {
    // /输入框获取焦点事件
    wsy_inputFcous(num) {
      this.wsy_Active = num;
    },
    wsy_inputBlur() {
      this.wsy_Active = null;
      let mobileReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if(mobileReg.test(this.mobile)){
        this.wsy_mobileFlag = true
      }else{
        this.wsy_mobileFlag = false
      }
      if(this.password.length==0){
        this.wsy_passFlag = false
      }else{
        this.wsy_passFlag = true
      }
      if(this.wsy_mobileFlag && this.wsy_passFlag){
        this.wsy_flag = true
      }
    },
    wsy_toggle() {
      this.$router.push("/wyl-sms");
    },
    // 跳转到找回密码页面
    toSetPass() {
      this.$router.push("/wyl-pass");
    },
   async wsy_Login() {
      if(this.wsy_flag){
       let { data } = await this.$http.post("/api/app/login",{
         mobile:this.mobile,
         password:this.password,
         type:1
       })
       console.log(data);
       if(data.code == 200){
         window.localStorage.setItem("login_info",JSON.stringify(data.data))
         window.localStorage.setItem("token",JSON.stringify(data.data.remember_token))
         this.$router.push("/lwh_my")
       }
      }else{
        this.wsy_mobileFlag = false
        this.wsy_passFlag = false
      }
    }
    // onSubmit(values) {
    //   console.log("submit", values);
    // },
    // add() {
    //   this.$router.push({
    //     path: "/wsy-sms",
    //   });
    // },
    // add1() {
    //   this.$router.push({
    //     path: "/wsy-pass",
    //   });
    // },
  }
};
</script>

<style lang='scss' scoped>
.wsy_toast{
  color: red;
  font-size: .1rem;
  position: absolute;
  left: 0;
  top: 0.4rem;
}
.wsy_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wsy_input {
  width: 3rem;
  padding-top: 0.2rem 0;
  box-sizing: border-box;
  border-bottom: 0.01rem solid rgb(238, 238, 238);
  position: relative;
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
.Login-box {
  width: 100%;
  height: 100%;
}
.Login-img {
  width: 100%;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Login-img img {
  width: 2.3rem;
  height: 0.6rem;
}

.wsy-text {
  width: 3rem;
  font-size: 0.12rem;
  color: #999999;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 0.2rem;
}
.van-button {
  width: 3rem;
  margin-top: 0.4rem;
  // margin-left: 0.4rem;
}
.van-field {
  width: 85vw;
  text-align: center;
  margin-left: 0.3rem;
}
</style>