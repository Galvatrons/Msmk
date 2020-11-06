<template>
  <div class="wsy_box">
    <wsyHeader>
      <template slot="title">题库选择</template>
      <template slot="right"></template>
      <template slot="search">
        <van-search v-model="value" shape="round" placeholder="请输入题库名称关键词">
          <template #left-icon>
            <div></div>
          </template>
          <template #right-icon></template>
        </van-search>
      </template>
    </wsyHeader>
    <div class="wsy_main">
      <div class="left">
        <p
          :class="active == index ? 'active':''"
          v-for="(item,index) in wsyLeftArr"
          :key="index"
          @click="wsy_toggle(index)"
        >{{ item.text }}</p>
      </div>
      <div class="right">
        <p v-show="active == index" v-for="(item,index) in wsyLeftArr" :key="index">{{ item.text }}</p>
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
      value: "",
      active: 0,
      wsyLeftArr: [
        {
          text: "求导题库"
        },
        {
          text: "极限题库"
        },
        {
          text: "生物"
        },
        {
          text: "化学"
        },
        {
          text: "数学"
        },
        {
          text: "物理"
        },
        {
          text: "英语"
        }
      ],
      wsyRightArr: []
    };
  },
  created() {},
  mounted() {
    // this.getLeftList()
  },
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
    //  async getLeftList(){
    //    let data = await this.$http.get("wap/classify")
    //    console.log(data);
    //   }
    wsy_toggle(index) {
      this.active = index;
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > .wsy_main {
    flex: 1;
    width: 100%;
    // margin-top: 0.1rem;
    display: flex;
    // flex-direction: column;
    > .left {
      width: 1rem;
      height: 100%;
      margin-right: 0.2rem;
      > p {
        width: 100%;
        height: 14%;
        line-height: 0.8rem;
        background: #fafafa;
        color: #595959;
        text-align: center;
      }
      .active {
        background: #ffffff;
      }
    }
    > .right {
      height: 100%;
    }
  }
}
.van-search {
  width: 100%;
  height: 0.8rem;
  > .van-search__content {
    width: 100%;
    height: 100%;
    line-height: 0.8rem;
    background: #f7f8fa;
    div {
      line-height: 0.5rem;
    }
    .van-field__control {
      ::placeholder {
        font-size: 0.12rem;
        color: #969799;
      }
    }
  }
}
</style>
