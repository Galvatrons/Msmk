<template>
  <div>
      <wsyHeader>
      <template slot="title">仿真模考</template>
      <template slot="right">
        <van-icon name="search"  size="25" color="#757575"/>
      </template>
      <template slot="search">
        <div>
        </div>
      </template>
    </wsyHeader>
    <div class="wsy_main">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" active-color="#EF8133" :options="option1" />
        <van-dropdown-item v-model="value2" active-color="#EF8133" :options="option2" />
        <van-dropdown-item v-model="value3" active-color="#EF8133" :options="option3" />
      </van-dropdown-menu>
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
  name:"",
  components: {
    wsyHeader
},
  props: {},
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      option1: [
        { text: "考试类型", value: 0 },
        { text: "模拟考试", value: 1 },
        { text: "正常考试", value: 2 },
      ],
      option2: [
        { text: "考试状态", value: 0 },
        { text: "全部", value: 1 },
        { text: "未开始", value: 2 },
        { text: "进行中", value: 2 },
        { text: "已结束", value: 3 },
      ],
      option3: [
        { text: "参考状态", value: 0 },
        { text: "全部", value: 1 },
        { text: "已做", value: 2 },
        { text: "未做", value: 3 },
      ]
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  beforeRouteUpdate(to,from,next) {

next()
},
  methods: {

  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.wsy_main {
  width: 100%;
  height: 100%;
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
