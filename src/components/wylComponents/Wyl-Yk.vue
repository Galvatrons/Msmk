<template>
  <div>
    <van-nav-bar title="约课订单" left-arrow @click-left="onClickLeft" />
    <Kc>

    </Kc>
  </div>
</template>

<script>
import Kc from "../wylComponents/components/Zj-type";
export default {
  components: {
    Kc,
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/lwh_my",
      });
    },
  },
};
</script>

<style scoped>

</style>