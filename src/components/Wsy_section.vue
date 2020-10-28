<template>
  <div class="wsy_topTeacher">
    <slot name="a"></slot>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      index: 0
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {},
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
// 名师阵容区域样式
.wsy_topTeacher {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.2rem;
  > .title {
    margin: 0;
    margin-left: 0.2rem;
    padding-left: 0.1rem;
    border-left: 0.04rem #eb6100 solid;
    color: #595959;
  }
}
.wsy_content {
  flex: 1;
  padding: 0.1rem 0.12rem;
  > .wsy_item {
    margin-top: 0.1rem;
    width: 100%;
    height: 0.8rem;
    border-radius: 0.05rem;
    display: flex;
    align-items: center;
    justify-content: start;
    background: #fff;
    padding: 0 0.15rem;
    box-sizing: border-box;
    > :nth-child(2) {
      > :nth-child(1) {
        > span {
          color: red;
          font-size: 0.12rem;
          margin-left: 0.1rem;
        }
      }
    }
    > img {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
    > div {
      height: 0.4rem;
      margin-left: 0.15rem;
      flex: 1;
      > p {
        margin: 0.01rem;
      }
      > :nth-child(1) {
        color: #595959;
      }
      > :nth-child(2) {
        width: 3rem;
        font-size: 0.12rem;
        color: #b7b7b7;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
.wsy_ii_item {
  position: relative;
  width: 100%;
  height: 2rem;
  padding: 0 0.2rem;
  margin-top: 0.1rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0.05rem;
  > :nth-child(1) {
    width: 3.5rem;
    padding-top: 0.2rem;
    margin: 0;
  }
}
.wsy_ii_time {
  display: flex;
  align-items: center;
  height: 0.3rem;
  line-height: 0.3rem;
  > p {
    margin: 0;
    font-size: 0.1rem;
    color: #8c8c8c;
  }
}
.wsy_ii_teacher {
  width: 100%;
  height: 0.7rem;
  display: flex;
  align-items: center;
  font-size: 0.12rem;
  color: #8c8c8c;
  > img {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    margin-right: 0.1rem;
  }
}
.wsy_ii_info {
  width: 100%;
  margin-top: .15rem;
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.01rem rgb(238, 238, 238) solid;
  > :nth-child(1) {
    font-size: 0.12rem;
    color: #8c8c8c;
  }
  img {
    width: 0.2rem;
    height: 0.2rem;
  }
}
.wsy_good {
  color: #44a426;
  font-size: 0.18rem;
}
.wsy_price {
  color: red;
  font-size: 0.18rem;
}
</style>

