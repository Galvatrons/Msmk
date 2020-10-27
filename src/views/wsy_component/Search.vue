<template>
  <div class="wsy_search">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" @click="onClickLeft" />
      </template>
      <template #title>
        <input type="text" placeholder="请输入内容" />
      </template>
      <template #right>
        <span @click="onClickRight">取消</span>
      </template>
    </van-nav-bar>
    <div class="wsy_header">
        <p>
           历史搜索 
        </p>
        <van-icon name="delete" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      wsy_keyWord: ""
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
    onClickLeft() {
      this.$router.back(1);
    },
    onClickRight() {
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
  height: 100%;
  input {
    border: 0;
    border-radius: 0.2rem;
    background: #e4e7ed;
    text-indent: 0.1rem;
  }
}
.wsy_header {
  width: 100%;
  height: .5rem;
  box-sizing: border-box;
  padding: 0 .2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  >:nth-child(1){
      font-size: .16rem;
      font-weight: bold;
  }
}
</style>
