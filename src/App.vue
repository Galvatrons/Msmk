<template>
  <div id="app">
    <router-view class="App-box"></router-view>

    <div class="lwh_foot" v-if="this.$store.state.lwh_flag">
      <van-tabbar v-model="active" active-color="#eb6100" inactive-color="#666">
        <van-tabbar-item
          v-for="(item, index) in lwh_list"
          :key="index"
          :to="item.path"
          :icon="index == active ? item.icons : item.icon"
          >{{ item.cont }}</van-tabbar-item
        >
      </van-tabbar>
    </div>
    <!-- 点击留言 -->
    <div class="lwh_fixed" @click="lwh_Aflag = true">
      <van-icon name="comment" color="#fff" size="0.3rem" />
    </div>
    <!-- 留言框弹出 -->
    <v-leave v-show="lwh_Aflag" @lwh_leave="lwh_leaves"></v-leave>
  </div>
</template>

<script>
import VLeave from "./views/lwh_views/lwh_leave";
export default {
  data() {
    return {
      // 标签拦下标
      active: 0,
      // 留言组件显示条件
      lwh_Aflag: false,
      lwh_list: [
        { cont: "首页", icon: "fire", icons: "eye", path: "/lwh_main" },
        { cont: "课程", icon: "column", icons: "bell", path: "/lwh_course" },
        { cont: "约课", icon: "like", icons: "medal", path: "/lwh_york" },
        {
          cont: "练习",
          icon: "star",
          icons: "bookmark",
          path: "/lwh_exercise",
        },
        { cont: "我的", icon: "manager", icons: "diamond", path: "/lwh_my" },
      ],
    };
  },
  components: {
    VLeave,
  },
  methods: {
    // 子组件传值隐藏
    lwh_leaves() {
      this.lwh_Aflag = false;
    },
  },
};
</script>
<style lang="scss" >
html,
body,
#app {
  width: 100%;
  height: 100%;
  font-size: 0.16rem;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
}
.App-box {
  width: 100%;
  flex: 1;
  overflow: hidden;
}
#app > .lwh_foot {
  width: 100%;
  height: 0.53rem;
}
.lwh_fixed {
  width: 0.62rem;
  height: 0.62rem;
  position: fixed;
  border-radius: 50%;
  background: #007aff;
  bottom: 0.75rem;
  right: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.lwh_leave {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #f2f3f5;
}
</style>
