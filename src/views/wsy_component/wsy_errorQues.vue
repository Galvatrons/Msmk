<template>
  <div>
    <wsyHeader>
      <template slot="title">错题记录</template>
      <template slot="right">
        <van-icon name="search" size="25" color="#757575" />
      </template>
      <template slot="search">
        <div></div>
      </template>
    </wsyHeader>
    <div class="wsy_main">
      <div class="wsy_topNav">
        <p>
          类型不限
          <van-icon name="arrow-down" size="10" />
        </p>

        <p>巩固全部错题</p>
        <p>移除错题</p>
      </div>
      <div class="comment_none">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
        <div>请稍候，模考正在赶来的路上啦</div>
      </div>
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
  methods: {},
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_main {
  width: 100%;
  height: 100%;
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
