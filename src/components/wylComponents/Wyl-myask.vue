<template>
     
  <div id="shopping">
    <div class="content">
      <div class="top">约课记录</div>
      <van-tabs swipeable>
        <van-tab class="sxlvan1" title="待上课">
          <img class="picture" src="../../assets/img/a.png" />
          <div class="sxlh6">请登录后查看相关内容</div>
          <router-link to="/Wyl-Login">
            <div class="registration">登录/注册</div>
          </router-link>
        </van-tab>

        <van-tab title="已上课">
          <img class="picture" src="../../assets/img/a.png" />
          <div class="sxlh6">请登录后查看相关内容</div>
          <router-link to="/Wyl-Login">
            <div class="registration">登录/注册</div>
          </router-link>
        </van-tab>

        <van-tab title="已取消">
          <img class="picture" src="../../assets/img/a.png" />
          <div class="sxlh6">还没有取消上课记录</div>
          <router-link to="/Wyl-Login">
            <div class="registration">登录/注册</div>
          </router-link>
        </van-tab>
      </van-tabs>
    </div>
        
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    
  },
};
</script>

<style scoped>
#id {
  background: rgb(240, 242, 245);
}
.top {
  width: 100%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  color: #898989;
  font-size: 0.2rem;
  border-bottom: 1px solid gray;
}
.dsktitle {
  width: 100%;
  height: 10rem;
  background: #f0f2f5;
}
.picture {
  width: 2rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
}

.registration {
  width: 1rem;
  height: 0.4rem;
  background: #eb6100;
  margin-left: 1.4rem;
  margin-top: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.14rem;
}
.sxlh6 {
  text-align: center;
  font-size: 0.18rem;
  margin-top: 0.1rem;
  color: gray;
  /* font-weight: 800; */
}
</style>
