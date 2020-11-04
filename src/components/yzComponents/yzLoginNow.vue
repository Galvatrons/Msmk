<template>
  <div class="wsy_login">
    <div class="wsy_box">
      <img src="https://wap.365msmk.com/img/feiji.decaf161.png" alt />
      <p>赶紧登陆一下吧</p>
      <p>立即预约一对一辅导，浏览更多视频课程~</p>
      <van-button color="#EB6100" round type="primary" block @click="onClickLogin">立即登录</van-button>
      <van-icon name="cross" class="cross" size="20px" color="#B8B8B8" @click="close()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
    close() {
      this.$store.commit("wsy_Close", false);
    },
    onClickLogin(){
      this.$router.push("/yzLogin")
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_login {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  > .wsy_box {
    width: 3rem;
    height: 3.8rem;
    background: #fff;
    border-radius: 0.2rem;
    text-align: center;
    position: relative;
    > img {
      width: 100%;
      height: 60%;
      margin-top: 0.2rem;
    }
    > :nth-child(2) {
      font-size: 0.16rem;
    }
    > :nth-child(3) {
      font-size: 0.14rem;
      color: #999999;
    }
    .van-button {
      margin-left: 0.2rem;
      margin-top: 0.2rem;
      width: 2.6rem;
    }
  }
}
.cross {
  top: 0.1rem;
  right: 0.1rem;
  position: absolute;
}
</style>
