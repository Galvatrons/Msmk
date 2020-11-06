<template>
  <div>
    <wsyHeader>
      <template slot="title">{{ $route.query.message_classify | converting }}</template>
      <template slot="right">
        <!-- <van-icon name="search" size="25" color="#757575" /> -->
      </template>
      <template slot="search">
        <div></div>
      </template>
    </wsyHeader>
    <div class="comment_none">
      <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
      <div>暂无消息通知</div>
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
  filters: {
    converting(val) {
      switch (val) {
        case "course":
          return "课程通知";
          break;
        case "system":
          return "系统通知";
          break;
        case "order":
          return "订单通知";
          break;
        case "oto":
          return "约课通知";
          break;
        case "exam":
          return "考试通知";
          break;
      }
    }
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.comment_none {
  width: 100%;
  height: 2rem;
  text-align: center;
  margin-top: .8rem;
  img {
    width: 1.6rem;
    height: 1.6rem;
  }
  div {
    color: #8C8C8C;
    font-size: 0.15rem;
    margin-top: 0.1rem;
    font-size: .16rem;
  }
}
</style>
