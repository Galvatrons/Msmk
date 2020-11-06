<template>
  <div class="wsy_box">
    <wsyHeader>
      <template slot="title">学习卡兑换</template>
      <template slot="right">
        <!-- <van-icon name="search" size="25" color="#757575" /> -->
      </template>
      <template slot="search">
        <div></div>
      </template>
    </wsyHeader>
    <div class="wsy_main">
      <ul>
          <li>
              <span>卡号：</span>
              <input type="text" placeholder="请输入学习卡号">
          </li>
          <li>
              <span>密码：</span>
              <input type="text" placeholder="请输入学习卡密码">
          </li>
      </ul>
      <van-button type="primary"  color="#EB6100" block>立即兑换</van-button>
    </div>
  </div>
</template>

<script>
import wsyHeader from "@/components/wsy_header.vue";
export default {
  name: "",
  components: {
    wsyHeader
  },
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
      
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_search{
    background: #ffffff;
}
.wsy_box{
    width: 100%;
    height: 100%;
  background: #f0f2f5;
}
.wsy_main {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem;
  background: #fff;
  margin-top: 0.1rem;
  >ul{
      width: 100%;
      height: 2rem;
      margin-top: 0.1rem;
      >li{
          width: 100%;
          height: .6rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          box-sizing: border-box;
          >input{
              width: 85%;
              border: 0;
          }
      }
  }
}
.wsy_topNav {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > p {
    color: #8c8c8c;
  }
  > :nth-child(1) {
    color: #000;
  }
}
.comment_none {
  width: 100%;
  height: 2rem;
  text-align: center;
  img {
    width: 1.6rem;
    height: 1.6rem;
  }
  div {
    color: #9b8c8c;
    font-size: 0.16rem;
    margin-top: 0.1rem;
  }
}
</style>
