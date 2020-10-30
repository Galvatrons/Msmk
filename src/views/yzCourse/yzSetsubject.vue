<template>
  <div>
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left" @click="onBack">
          <van-icon name="arrow-left" />
        </div>
        <div class="head_title">修改个人信息</div>
        <div class="head_icon" @click="onSave">保存</div>
      </div>
    </div>
    <div class="messageWrapper">
      <div class="messageSlide" v-for="(item, index) in list" :key="index">
        <van-checkbox v-model="item.status" @change="onChange" shape="square">{{
          item.title
        }}</van-checkbox>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "语文",
          status: false,
        },
        {
          title: "数学",
          status: false,
        },
        {
          title: "英语",
          status: false,
        },
        {
          title: "物理",
          status: false,
        },
        {
          title: "化学",
          status: false,
        },
        {
          title: "生物",
          status: false,
        },
        {
          title: "政治",
          status: false,
        },
        {
          title: "信息技术",
          status: false,
        },
      ],
      array: [],
    };
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    onChange(val) {
      console.log(val);
      var temp = [];
      this.list.forEach((element) => {
        if (element.status) {
          temp.push(element);
        }
      });
      this.$store.commit("yz_Subject", temp);
      // console.log(temp);
    },
    onSave() {
      this.$router.go(-1)
    },
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
  background-color: white;
  .header_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .head_left {
      width: 0.27rem;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.23rem;
    }
    .head_title {
      font-size: 0.18rem;
      color: rgb(49, 49, 49);
    }
    .head_icon {
      width: 0.3rem;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.15rem;
    }
  }
}
.messageWrapper {
  width: 100%;
  height: 100%;
  background-color: rgb(235, 235, 235);
  padding-top: 0.1rem;
  .messageSlide {
    width: 100%;
    height: 0.6rem;
    background-color: white;
    border-bottom: 0.001rem solid rgb(241, 241, 241);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.18rem;
    padding: 0 0.15rem;
    box-sizing: border-box;
    color: gray;
  }
}
</style>
