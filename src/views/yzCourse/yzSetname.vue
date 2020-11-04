<template>
  <div>
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left" @click="onBack">
          <van-icon name="arrow-left" />
        </div>
        <div class="head_title">修改个人信息</div>
        <div class="head_icon"></div>
      </div>
    </div>
    <div class="messageWrapper">
      <div class="messageSlide">
        <div class="messItem">
          <span> {{ yzLoginMess.nickname }}</span>
        </div>
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
  },
  computed: {
    yzLoginMess() {
      return this.$store.state.yzLoginMess;
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
      span {
        margin-right: 0.1rem;
        font-size: 0.18rem;
        color: gray;
      }
    }
  }
</style>
