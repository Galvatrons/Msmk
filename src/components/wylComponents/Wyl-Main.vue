<template>
  <div class="Main-body">
    <div class="Main-body-l">
      <!-- 背景图头部 -->
      <div class="Main-box"></div>
      <div class="Main-top">
        <div class="top1">
          <van-image
            round
            width="0.7rem"
            height="0.7rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="top-div">用户名</div>
        </div>
        <div class="top2">
          <div @click="onClickfeature">
            <span>1</span>
            <p>我的特色课</p>
            <p style="color: gray">已购特色课程的学习</p>
          </div>
          <div @click="onClickcoach">
            <span>0</span>
            <p>一对一辅导</p>
            <p style="color: gray">我的一对一老师辅导</p>
          </div>
          <div @click="onClickstudy">
            <span>0.00</span>
            <p>剩余学习币</p>
            <p style="color: gray">查看剩余学习币</p>
          </div>
        </div>
        <!-- 去约课小图标 -->
        <div class="Main-text" @click="onClickyk">去约课</div>
      </div>
      <!-- 结束 -->
      <!-- 邀请好友注册app -->
      <div class="Main-app" @click="popup">
        <div class="Main-app-img">
          <img src="../../assets/img/信封.png" alt="" />
        </div>
        <div class="Main-app-text">
          <p>邀请好友注册APP，享多重好礼<br />现时特惠，多邀多得</p>
        </div>
        <div class="Main-app-left">
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- 弹出层 -->
      <van-popup v-model="show"
        ><img
          class="popus"
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2020OPv5ksBfFx1603875973.png"
          alt=""
      /></van-popup>

      <!-- 结束 -->
      <!-- 课程相关 -->
      <div class="Main-k">
        <div class="list_title">
          <p>课程相关</p>
        </div>
        <van-grid>
          <van-grid-item icon="contact" text="关注的老师" />
          <van-grid-item icon="star-o" text="我的收藏" />
        </van-grid>
        <!-- 订单相关 -->
        <div class="list_title">
          <p>订单相关</p>
        </div>
        <van-grid>
          <van-grid-item icon="contact" text="关注的老师" />
          <van-grid-item icon="star-o" text="我的收藏" />
        </van-grid>
        <!-- 我的账户 -->
        <div class="list_title">
          <p>我的账户</p>
        </div>
        <van-grid>
          <van-grid-item icon="contact" text="关注的老师" />
          <van-grid-item icon="star-o" text="我的收藏" />
        </van-grid>
        <!-- 自助服务 -->
        <div class="list_title">
          <p>自助服务</p>
        </div>
        <van-grid>
          <van-grid-item icon="contact" text="关注的老师" />
          <van-grid-item icon="star-o" text="我的收藏" />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      lwh_bs: null,
      show: false,
    };
  },
  mounted() {
    // 滑动插件
    this.$nextTick(() => {
      this.lwh_bs = new BetterScroll(".Main-body", {
        probeType: 3,
        click: true,
      });
      // 上滑禁止
      this.lwh_bs.on("scroll", (pos) => {
        if (pos.y >= 0) {
          // console.log(pos.y);
          this.lwh_bs.scrollTo(0, 0);
        }
      });
    });
  },
  methods: {
    onClickyk() {
      this.$router.push({
        path: "/oto",
      });
    },
    onClickstudy() {
      this.$router.push({
        path: "/Wyl-my-currency",
      });
    },
    onClickcoach() {
      this.$router.push({
        path: "/lwh_york",
      });
    },
    onClickfeature() {
      this.$router.push({
        path: "/Wyl-my-study",
      });
    },
    popup() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.Main-body {
  width: 100%;
  height: 100%;
}
.Main-body-l {
  width: 100%;
  min-height: 101%;
}
.Main-box {
  width: 100vw;
  height: 1.2rem;
  background: rgb(255, 81, 0);
  border-radius: 0px 0px 26px 26px;
}
.Main-top {
  width: 85vw;
  height: 1.8rem;
  position: relative;
  /* background: yellow; */
  top: -0.8rem;
  left: 0.29rem;
}

.Main-top .top1 {
  width: 100%;
  height: 50%;
  background: rgb(255, 255, 255);
}
.Main-top .top1 {
  display: flex;
}
.Main-top .top1 .top-div {
  font-size: 0.2rem;
  margin: 0.3rem 0.2rem;
}
.Main-top .top2 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
}
.Main-top .top2 span {
  color: crimson;
  font-size: 18px;
  font-weight: 800;
}
.Main-top .top2 div {
  margin: 0px 3px;
  background: rgb(247, 243, 243);
  width: 33%;
  text-align: center;
}
.Main-top .top2 p {
  font-size: 12px;
}
.Main-text {
  width: 0.7rem;
  height: 0.3rem;
  background-color: rgb(255, 81, 0);
  text-align: center;
  line-height: 0.3rem;
  color: #fff;
  position: relative;
  top: -1.7rem;
  left: 3rem;
}
.Main-app {
  width: 95vw;
  height: 0.5rem;
  background-image: linear-gradient(45deg, rgb(253, 88, 3), rgb(255, 146, 71));
  border-radius: 0.5rem;
  margin: 0 auto;
  position: relative;
  top: -0.5rem;
}
.Main-app-img {
  width: 15%;
  height: 0.5rem;
  float: left;
}
.Main-app-img img {
  width: 80%;
  height: 80%;
}
.Main-app-text {
  width: 70%;
  height: 0.5rem;
  float: left;
}
.Main-app-text p {
  color: #fff;
  font-size: 0.15rem;
  margin-top: 1.5px;
}
.Main-app-left {
  width: 15%;
  height: 0.5rem;
  font-size: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  float: left;
}
.Main-k {
  width: 100%;
  position: relative;
  top: -0.5rem;
}
.list_title {
  width: 100%;
}
.list_title p {
  width: 90%;
  margin-left: 0.2rem;
  font-size: 0.2rem;
  margin-top: 0.1rem;
}
.popus {
  width: 100%;
  height: 100%;
}
</style>