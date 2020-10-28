<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
     title="我的余额" 
    left-arrow 
      right-text="余额明细"
    @click-left="onClickLeft"
      @click-right="onClickRight" />
    <!-- 余额计数 -->
    <div class="My-text">
      <span class="span1">我的余额</span>
      <span class="span2">0 学习币</span>
    </div>
    <!-- 充值学习币数量 -->
    <div class="My-box">
      <div class="My-for" v-for="(item, index) in list" :key="index">
        {{ item }}
        <div class="My-for1">$500</div>
      </div>
    </div>
    <!-- 充值弹出层 -->
    <van-button  @click="showPopup" 
    type="primary"
     size="large"
     color=" rgb(255, 81, 0)"
     >立即充值</van-button>

   <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
       <p><input type="radio" name="wx" id="">微信</p>
       <input type="radio" name="wx" id="">支付宝
   </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "30000.00学习币",
        "30000.00学习币",
        "20000.00学习币",
        "10000.00学习币",
        "8000.00学习币",
        "5000.00学习币",
        "3000.00学习币",
        "0.01学习币",
      ],
    
      show: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/lwh_my",
      });
    },
    onClickRight(){
       this.$router.push({
        path: "/wyl-my-ye",
      });
    },
      showPopup() {
      this.show = true;
    },
  },
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
  background: rgb(238, 238, 238);
  width: 100%;
  display: flex;
  flex-direction: column;
}
.My-for {
  width: 80%;
  height: 0.5rem;
  background: rgb(255, 255, 255);
  border-radius: 0.2rem;
  margin: 0.1rem 0.35rem;
  line-height: 0.5rem;
  font-size: 0.13rem;
  float: left;
}
.My-for1 {
  width: 20%;
  height: 0.5rem;
  float: right;
  /* background: tomato; */
}
</style>