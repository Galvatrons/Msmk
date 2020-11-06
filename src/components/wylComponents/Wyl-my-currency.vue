<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="我的余额"
      left-arrow
      right-text="余额明细"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 余额计数 -->
    <div class="My-text">
      <span class="span1">我的余额</span>
      <span class="span2">0 学习币</span>
    </div>
    <!-- 充值学习币数量 -->
    <div class="My-box">
      <div class="My-for" v-for="(item, index) in list" :key="index">
        <div>{{ item }}学习币</div>
        <div class="My-for1">￥ {{ item }}</div>
      </div>
    </div>
    <!-- 充值弹出层 -->
    <div class="button-vant">
      <van-button @click="showPopup" type="primary" size="large" color=" rgb(255, 81, 0)">立即充值</van-button>
    </div>

    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <p>
        <input type="radio" name="wx" id />微信
      </p>
      <input type="radio" name="wx" id />支付宝
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "30000.00",
        "30000.00",
        "20000.00",
        "10000.00",
        "8000.00",
        "5000.00",
        "3000.00",
        "0.01"
      ],

      show: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/lwh_my"
      });
    },
    onClickRight() {
      this.$router.push({
        path: "/wyl-my-ye"
      });
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style scoped>
.My-text {
  /* background: yellow; */
  width: 100%;
  height: 0.4rem;
  font-size: 0.15rem;
}
.My-text .span1 {
  margin-left: 0.2rem;
}
.My-text .span2 {
  margin-left: 0.1rem;
  color: rgb(233, 57, 57);
}
.My-box {
  background: #EEEEEE;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;
  box-sizing: border-box;
}
.My-for {
  width: 100%;
  height: 0.5rem;
  background: rgb(255, 255, 255);
  border-radius: 0.1rem;
  line-height: 0.5rem;
  font-size: 0.13rem;
  margin-bottom: 0.2rem;
  padding: 0 .2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.My-for1 {
  /* width: 20%; */
  /* height: 0.5rem; */
  /* float: right; */
  color: #E90000;
}
.button-vant {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>