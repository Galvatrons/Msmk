<template>
  <div class="Login-box">
    <div class="Login-img">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt=""
      />
    </div>
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="手机号" placeholder="请输入手机号" />
      <van-field
        v-model="password"
        type="password"
        name="验证码"
        placeholder="请输入短信验证码"
      />
      <div class="vnt-text">
        <span >*未注册的手机号将自动注册</span>
        <span @click="add"> 注册/验证码登录</span>
      </div>

      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="linear-gradient(to right, rgb(255, 146, 71),rgb(253, 88, 3))"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    add() {
      this.$router.push({
        path: "/Wyl-Login",
      });
    },
  },
};
</script>

<style scoped>
.Login-box {
  width: 100vw;
  height: 100vh;
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

.vnt-text {
  width: 80vw;
  font-size: 0.15rem;
  color: gray;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-left: 0.4rem;
  margin-top: 0.3rem;
}
.van-button {
  width: 70vw;
  margin-top: 0.6rem;
  margin-left: 0.4rem;
}
.van-field {
  width: 85vw;
  text-align: center;
  margin-left: 0.3rem;
}
.van-button {
  width: 70vw;
  margin-top: 0.6rem;
  margin-left: 0.4rem;
}
</style>