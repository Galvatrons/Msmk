<template>
  <div>
     <van-nav-bar
  title="余额明细"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
   <div class="ye-text">
       没有更多了
   </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
        this.$router.push({
        path: "/wyl-my-currency",
      });
    },
  },
};
</script>

<style scoped>
 .ye-text{
     text-align: center;
     font-size: 0.13rem;
     color: gray;
 }
</style>