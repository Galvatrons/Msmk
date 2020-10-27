<template>
  <div class="wsy_info">
      <!-- 顶部导航栏 -->
    <van-nav-bar  @click='onClickLeft()' @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" @click="onClickLeft" />
      </template>
      <template #title>
          课程详情
      </template>
      <template #right>
          <van-icon name="share-o" />
      </template>
    </van-nav-bar>
      <!-- 顶部导航栏 -->
    

<!-- 分享弹出层 -->
    <van-popup round v-model="PopupIsShow">
        <div class="wsy_popup">
            <p>分享</p>
            <img src="data:image/png;base64,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" alt="">
        </div>
    </van-popup>
<!-- 分享弹出层 -->

  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
        PopupIsShow:false
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
    //   分享
      onClickRight(){
          this.PopupIsShow =true
      },
    //   返回首页
      onClickLeft(){
          this.$router.back(1)
      }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_popup{
    text-align: center;
}
</style>
