<template>
  <div>
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_none"></div>
        <div class="head_title">特色课</div>
        <div class="head_icon" @click="onClickSearch"><van-icon name="search" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickSearch(){
      console.log(111);
      this.$router.push("/search")
    }
  },
};
</script>

<style lang="scss" scoped>
.header_container {
  width: 100%;
  height: 0.48rem;
  border-bottom: 0.001rem solid rgb(238, 238, 238);
  padding: 0 0.05rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  .header_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .head_none {
      width: 0.27rem;
      height: 100%;
    }
    .head_title {
      font-size: 0.18rem;
      color: rgb(49, 49, 49);
    }
    .head_icon {
      width: 0.27rem;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.3rem;
    }
  }
}
</style>
