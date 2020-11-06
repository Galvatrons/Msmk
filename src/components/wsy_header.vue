<template>
  <div class="wsy_search">
    <div class="wsy_top">
      <div class="wsy_left">
        <van-icon name="arrow-left" size="25" color="#757575" @click="wsy_back()" />
      </div>
      <div class="wsy_title">
        <slot name="title">1</slot>
      </div>
      <div class="wsy_right">
        <slot name="right"></slot>
      </div>
      <div></div>
    </div>
    <div class="wsy_bottom">
      <slot name="search">
      <div></div>
    </slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
    //   返回
    wsy_back() {
      this.$router.back(1);
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_search {
  width: 100%;
  // height: 1.36rem;
  padding: 0 0.1rem;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #eaeaea;
  > .wsy_top {
    width: 100%;
    height: 0.56rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .wsy_title {
        width: 70%;
        text-align: center;
        line-height: .56rem;
      font-size: 0.20rem;
      color: #595959;
    }
  }
  .wsy_bottom{
      width: 100%;
    //   height: 0.8rem;
  }
  > div {
    text-align: center;
  }
}
</style>
