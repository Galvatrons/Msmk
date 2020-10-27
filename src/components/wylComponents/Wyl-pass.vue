<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="找回密码"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 输入框密码 -->
    <van-form>
      <van-field name="手机号" placeholder="请输入手机号" />
      <!-- 输入框验证码内容 -->
      <van-field type="password" name="验证码" placeholder="请输入验证码" />
      <!-- 输入框手机号内容 -->
      <van-field type="password1" name="密码" placeholder="请输入密码" />

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
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/Wyl-Login",
      });
    },
  },
};
</script>

<style scoped>
.van-button {
  width: 70vw;
  margin-top: 0.6rem;
  margin-left: 0.4rem;
}
</style>