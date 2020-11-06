<template>
  <div>
    <wsyHeader>
      <template slot="title">测评记录</template>
      <template slot="right">
        <van-icon name="search" size="25" color="#757575" />
      </template>
      <template slot="search">
        <div></div>
      </template>
    </wsyHeader>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" active-color="#EF8133" :options="option1" />
      <van-dropdown-item v-model="value2" active-color="#EF8133" :options="option2" />
    </van-dropdown-menu>
    <div class="wsy_list">
      <div class="wsy_item" v-for="i in 3" :key="i">
        <div>
          <span>英语</span>
          <span>
            <span>0</span>/3
          </span>
        </div>
        <div>
          <span class="wsy_mr">答题时长：0分16秒</span>
          <span>正确率：0%</span>
        </div>
        <div>
          <p>提交时间：2020-11-03 15:16:59</p>
        </div>
        <div>
          <span>查看解析</span>
          <span>重新练习</span>
        </div>
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
      i: 0,
      value1: 0,
      value2: 0,
      option1: [
        { text: "类型不限", value: 0 },
        { text: "套卷练习", value: 1 },
        { text: "仿真模考", value: 2 },
        { text: "考点专练", value: 3 }
      ],
      option2: [
        { text: "时间", value: 0 },
        { text: "全部", value: 1 },
        { text: "未今天始", value: 2 },
        { text: "7天", value: 2 }
      ]
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

<style lang="scss" scoped>
.wsy_list {
  width: 100%;
  height: 100%;
  padding: 0.14rem;
  box-sizing: border-box;
  > .wsy_item {
    margin-bottom: 0.1rem;
    width: 100%;
    height: 1.4rem;
    border: 0.01rem solid #eee;
    box-shadow: 0 0 0.01rem 0.01rem #eee;
    border-radius: 0.03rem;
    padding: 0.15rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > :nth-child(1) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      > :nth-child(1) {
        font-size: 0.14rem;
      }
      > :nth-child(2) {
        font-size: 0.1rem;
        color: #8c8c8c;
        > span {
          color: #4169ff;
        }
      }
    }
    :nth-child(2) {
      > .wsy_mr {
        margin-right: 0.2rem;
      }
    }
    > :nth-child(2),
    :nth-child(3) {
      font-size: 0.1rem;
      color: #8c8c8c;
    }
    > :nth-child(4) {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      > span {
        width: 0.8rem;
        margin-left: 0.1rem;
        height: 0.3rem;
        text-align: center;
        line-height: 0.3rem;
        border: 0.01rem solid #4169ff;
        color: #4169ff;
        border-radius: 0.2rem;
        font-size: 0.12rem;
      }
    }
  }
}
</style>
