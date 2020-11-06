<template>
  <div>
    <wsyHeader>
      <template slot="title">套卷练习</template>
      <template slot="right">
        <van-icon name="search" size="25" color="#757575" />
      </template>
      <template slot="search">
        <div></div>
      </template>
    </wsyHeader>
    <div class="wsy_main">
      <van-dropdown-menu>
        <!-- <van-dropdown-item v-model="value1" active-color="#EF8133" :options="option1" /> -->
        <van-dropdown-item title="套卷分类" ref="item">
          <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item title="全部" />
            <van-sidebar-item title="中考真题" />
            <van-sidebar-item title="化学" />
            <van-sidebar-item title="英语" />
          </van-sidebar>
          <!-- <van-cell center title="包邮">
            <template #right-icon>
              <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <van-cell center title="团购">
            <template #right-icon>
              <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <div style="padding: 5px 16px;">
            <van-button type="danger" block round @click="onConfirm">确认</van-button>
          </div>-->
        </van-dropdown-item>
        <van-dropdown-item v-model="value2" active-color="#EF8133" :options="option2" />
      </van-dropdown-menu>
      <div class="comment_none">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
        <div>请稍候，套卷正在赶来的路上啦</div>
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
      activeKey: 0,
      value1: 0,
      value2: 0,
      option1: [
        { text: "套卷分类", value: 0 },
        { text: "单选", value: 1 },
        { text: "多选", value: 2 },
        { text: "判断", value: 3 },
        { text: "连线", value: 4 }
      ],
      option2: [
        { text: "套卷状态", value: 0 },
        { text: "全部", value: 1 },
        { text: "以做", value: 2 },
        { text: "未做", value: 3 }
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
  methods: {
    onChange(index) {
      console.log(index);
    },
  },
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
