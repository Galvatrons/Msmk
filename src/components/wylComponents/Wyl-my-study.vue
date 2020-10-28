<template>
  <div>
     <van-nav-bar
  title="我的学习"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 标签栏 -->
  <van-tabs swipeable>
        <van-tab  title="直播课(0)">
           
          <img class="picture" src="../../assets/img/a.png" />
          <div class="sxlh6">还没有课程，快去选择课程学习吧</div>
          <router-link to="/lwh_course">
            <div class="registration">选择课程</div>
          </router-link>
        </van-tab>
           <van-tab  title="点博客(1)">
                <!-- 找杨峥他的路由 -->
          <router-link to="/lwh_course">
       
          </router-link>
        </van-tab>
           <van-tab  title="音频课(0)">
          <img class="picture" src="../../assets/img/a.png" />
          <div class="sxlh6">还没有课程，快去选择课程学习吧</div>
          <router-link to="/lwh_course">
            <div class="registration">选择课程</div>
          </router-link>
        </van-tab>
           <van-tab title="图文课(0)">
          <img class="picture" src="../../assets/img/a.png" />
          <div class="sxlh6">还没有课程，快去选择课程学习吧</div>
          <router-link to="/lwh_course">
            <div class="registration">选择课程</div>
          </router-link>
        </van-tab>

        <van-tab title="面授课(0)">
          <img class="picture" src="../../assets/img/a.png" />
          <div class="sxlh6">还没有课程，快去选择课程学习吧</div>
          <router-link to="/lwh_course">
            <div class="registration">选择课程</div>
          </router-link>
        </van-tab>

        <van-tab title="会员课(0)">
          <img class="picture" src="../../assets/img/a.png" />
          <div class="sxlh6">还没有课程，快去选择课程学习吧</div>
          <router-link to="/lwh_course">
            <div class="registration">选择课程</div>
          </router-link>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
        this.$router.push({
        path: "/lwh_my",
      });
    },
  },
};
</script>

<style scoped>
.picture {
  width: 2rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
}
.sxlh6 {
  text-align: center;
  font-size: 0.18rem;
  margin-top: 0.1rem;
  color: gray;
  /* font-weight: 800; */
}
.registration {
  width: 0.8rem;
  height: 0.3rem;
  background: #eb6100;
  margin-left: 1.5rem;
  margin-top: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.14rem;
}
</style>