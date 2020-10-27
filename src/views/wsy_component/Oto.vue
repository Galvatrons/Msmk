<template>
  <div class="wsy_oto">
    <van-nav-bar title="一对一辅导" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="wsy_scroll" ref="scrollBox">
      <div class="scrollBox">111111</div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      bs: null
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.bs = new BetterScroll(this.$refs.scrollBox, {
        probeType: 3,
        click: true
      });
    });
  },
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
    onClickLeft() {
      this.$router.back(1);
    },
    onClickRight() {
        this.$router.push("/search")
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_oto {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > .wsy_scroll {
    flex: 1;
    background: #f0f2f5;
    overflow: hidden;
  }
}
.scrollBox {
  width: 100%;
  min-height: 101%;
}
.NavBar {
  color: #5a5a5a;
}
</style>
