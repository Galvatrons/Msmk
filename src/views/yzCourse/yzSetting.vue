<template>
  <div>
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left" @click="onBack">
          <van-icon name="arrow-left" />
        </div>
        <div class="head_title">设置</div>
        <div class="head_icon"></div>
      </div>
    </div>
    <div class="messageWrapper">
      <div class="messageSlide" @click="onSetPass">
        <span>设置密码</span>
        <div class="messItem">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="button_wrapper">
        <button @click="onOutLogin">退出登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    onSetPass() {
      this.$router.push("/yzChangePass");
    },
    onOutLogin() {
      sessionStorage.removeItem("token");
      this.$router.push("/yzLogin");
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
      width: 0.27rem;
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
      width: 0.27rem;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.3rem;
    }
  }
}
.messageWrapper {
  width: 100%;
  height: 100%;
  background-color: rgb(235, 235, 235);
  padding-top: 0.1rem;
  .messageSlide {
    width: 100%;
    height: 0.6rem;
    background-color: white;
    border-bottom: 0.001rem solid rgb(241, 241, 241);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.18rem;
    padding: 0 0.15rem;
    box-sizing: border-box;
    color: gray;
    .messItem {
      height: 100%;
      display: flex;
      align-items: center;
      .subject_wrapper {
        span {
          margin-right: 0.05rem;
          font-size: 0.14rem;
          color: gray;
        }
      }
      span {
        margin-right: 0.1rem;
        font-size: 0.14rem;
        color: gray;
      }
    }
  }
  .button_wrapper {
    width: 100%;
    height: 2rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 90%;
      height: 0.5rem;
      border: none;
      background-color: orange;
      color: white;
      border-radius: 0.05rem;
    }
  }
}
</style>
