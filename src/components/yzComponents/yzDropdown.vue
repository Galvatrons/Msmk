<template>
  <div>
    <div class="yz_dropdown">
      <van-dropdown-menu>
        <!-- 下拉菜单分类部分 -->
        <van-dropdown-item title="分类" ref="item">
          <div class="yz_classify_wrapper">
            <div class="yz_grade">年级</div>
            <div class="yz_grade_slide">
              <span v-for="(item, index) in grade" :key="index">{{
                item
              }}</span>
            </div>
          </div>
          <div class="yz_classify_wrapper">
            <div class="yz_grade">学科</div>
            <div class="yz_grade_slide">
              <span v-for="(item, index) in classify" :key="index">{{
                item
              }}</span>
            </div>
          </div>
        </van-dropdown-item>
        <!-- 下拉菜单排序部分 -->
        <van-dropdown-item title="排序">
          <div class="yz_sort_item">综合排序</div>
          <div class="yz_sort_item">最新</div>
          <div class="yz_sort_item">最热</div>
          <div class="yz_sort_item">价格从低到高</div>
          <div class="yz_sort_item">价格从高到低</div>
        </van-dropdown-item>
        <!-- 下拉菜单筛选部分 -->
        <van-dropdown-item title="筛选">
          <div class="yz_filter_wrapper">
            <div
              class="yz_filter_item"
              v-for="(item, index) in filterItem"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grade: ["初一", "初二", "初三", "高一", "高二"],
      classify: ["语文", "数学", "英语", "物理", "化学"],
      filterItem: [
        "全部",
        "大班课",
        "小班课",
        "公开课",
        "点播课",
        "面授课",
        "音频课",
        "系统课",
        "图文课",
        "会员课",
      ],
    };
  },
};
</script>

<style lang="scss">
.van-dropdown-menu__title--active {
  color: orange !important;
}
.yz_dropdown {
  width: 100%;
  position: fixed;
  top: 0.48rem;
  left: 0;
  background-color: white;
  z-index: 1000;
}
.van-dropdown-menu__bar{
  box-shadow: 0 0 0 !important;
}
.yz_classify_wrapper {
  width: 100%;
  padding: 0.15rem;
  box-sizing: border-box;
  border-bottom: 0.001rem solid rgb(231, 231, 231);
  .yz_grade {
    color: gray;
    font-size: 0.15rem;
  }
  .yz_grade_slide {
    width: 100%;
    outline: none;
    overflow: hidden;
    // display: flex;
    span {
      display: inline-block;
      width: 0.75rem;
      height: 0.36rem;
      background-color: #f5f5f5;
      border-radius: 0.02rem;
      line-height: 0.36rem;
      text-align: center;
      margin: 0.1rem 0.175rem 0 0;
      color: gray;
      font-size: 0.15rem;
    }
  }
}
.yz_sort_item {
  width: 100%;
  height: 0.53rem;
  border-bottom: 0.001rem solid rgb(236, 236, 236);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.15rem;
}
.yz_filter_wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.23rem;
  padding-top: 0.1rem;
  padding-bottom: 0.15rem;
  box-sizing: border-box;
  .yz_filter_item {
    width: 0.75rem;
    height: 0.36rem;
    background-color: #f5f5f5;
    border-radius: 0.02rem;
    line-height: 0.36rem;
    text-align: center;
    margin: 0.12rem 0.175rem 0 0;
    color: gray;
    font-size: 0.15rem;
  }
}
</style>
