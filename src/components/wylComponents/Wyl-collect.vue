<template>
  <div>
      <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />
      <div>
          我的收藏
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/lwh_my",
      });
    },
  },
}
</script>

<style>

</style>