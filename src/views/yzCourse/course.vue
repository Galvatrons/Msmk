<template>
  <div class="wsy_box">
    <div class="yz_header">
      <yzHeader />
    </div>
    <div class="yz_dropdown">
      <yzDropdown />
    </div>
    <yzListItem />
  </div>
</template>

<script>
import yzHeader from "../../components/yzComponents/yzHeader";
import yzDropdown from "../../components/yzComponents/yzDropdown";
import yzListItem from "../../components/yzComponents/yzListitem";

export default {
  components: {
    yzHeader,
    yzDropdown,
    yzListItem
  }
};
</script>

<style lang="scss" scoped>
.wsy_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
// .yz_header{
//     width: 100%;
//     height: 0.48rem;
//     // background-color: aqua;
// }
</style>
