<template>
  <div>
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left">
          <!-- <van-icon name="arrow-left"/> -->
        </div>
        <div class="head_title">设置密码</div>
        <div class="head_icon">
          <p @click="next()">跳过</p>
        </div>
      </div>
    </div>

    <!-- 输入框密码 -->
    <van-form>
      <div class="wsy_box">
        <div class="wsy_mobile wsy_input" :class="[wsy_Active == 1 ? 'wsy_active' : '']">
          <input
            type="password"
            v-model="password"
            @focus="wsy_inputFcous(1)"
            @blur="wsy_inputBlur()"
            placeholder="请设置登陆密码"
          />
        </div>
        <div class="wsy_pass wsy_input" :class="[wsy_Active == 2 ? 'wsy_active' : '']">
          <input
            type="password"
            v-model="passwordA"
            @focus="wsy_inputFcous(2)"
            @blur="wsy_inputBlur()"
            placeholder="请再次输入密码"
          />
        </div>
        <!-- <div class="wsy_submit"> -->
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="linear-gradient(to right, rgb(255, 146, 71),rgb(253, 88, 3))"
          @click="setPass()"
        >确定</van-button>
        <!-- </div> -->
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      password: "",
      passwordA: "",
      wsy_Active: null
    };
  },
  methods: {
    //   跳过设置密码
    next() {
      this.$router.push("/wsySetMyInfo");
    },
    onClickLeft() {
      this.$router.back(1);
    },
    // /输入框获取焦点事件
    wsy_inputFcous(num) {
      this.wsy_Active = num;
    },
    wsy_inputBlur() {
      this.wsy_Active = null;
    },
    setPass() {
      if (this.password.length != 0 && this.password == this.passwordA) {
        // Toast("提示内容");
        this.$router.push("/wsySetMyInfo");
      } else {
        Toast("两次输入密码必须相同");
        return false;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.getCAPTCHA {
  font-size: 0.12rem;
  color: #eb6100;
  position: absolute;
  right: 0;
  top: 0.2rem;
}
.wsy_mobile {
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
      width: 0.5rem;
      height: 100%;
      display: flex;
      align-items: center;
      > p {
        font-size: 0.18rem;
        color: #595959;
      }
      img {
        width: 0.2rem;
      }
    }
  }
}
</style>