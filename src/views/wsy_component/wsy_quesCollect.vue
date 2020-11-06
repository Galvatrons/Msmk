<template>
  <div>
    <wsyHeader>
      <template slot="title">习题收藏</template>
      <template slot="right">
        <van-icon name="search" size="25" color="#757575" />
      </template>
      <template slot="search">
        <div></div>
      </template>
    </wsyHeader>
    <div class="wsy_main">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" active-color="#EF8133" :options="option1" />
        <van-dropdown-item disabled="false" />
        <van-dropdown-item disabled="false" />
      </van-dropdown-menu>
      <div class="comment_none">
              <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
              <div>暂无收藏记录</div>
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
    return {
      value1:0,
      option1: [
        { text: '题目类型', value: 0 },
        { text: '单选', value: 1 },
        { text: '多选', value: 2 },
        { text: '判断', value: 3 },
        { text: '连线', value: 4 },
      ],
    };
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
.comment_none {
      width: 100%;
      height: 2rem;
      text-align: center;
      img {
        width: 1.6rem;
        height: 1.6rem;
      }
      div {
        color:#9B8C8C;
        font-size: 0.16rem;
        margin-top: 0.1rem;
      }
    }
</style>
