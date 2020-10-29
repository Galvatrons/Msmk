<template>
  <div>
    <van-nav-bar title="我的关注" left-arrow @click-left="onClickLeft" />

    <div class="Concern-item" v-for="(item, index) in list" :key="index">
      <div class="item-body">
        <img :src="item.img" />
        <div class="item-text">
          <p>
            {{ item.cont }}
            <span>{{ item.type }}</span>
          </p>
          <p class="p1">
            {{ item.text }}
          </p>
        </div>
      </div>
      <div class="item-button">取消关注</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          text: "教学风格：尤其擅长阅读数学，能..",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          text: "教学风格：尤其擅长阅读数学，能..",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          text: "教学风格：尤其擅长阅读数学，能..",
          type: "M10",
        },
      ],
    };
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
.Concern-item {
  width: 100%;
  margin-top: 0.1rem;
  height: 0.8rem;
  border-radius: 0.05rem;
  display: flex;
  background: rgb(255, 255, 255);
  padding: 0 0.15rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Concern-item img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
}
.item-button {
  width: 0.6rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  border-radius: 0.2rem;
  background: #ebeefe;
  color: #eb6100;
  font-size: 0.13rem;
}
.item-body {
  display: flex;
  align-items: center;
  width: 1rem;
  height: 0.4rem;
  margin-left: 0.15rem;
}
.item-text {
  margin-left: 0.1rem;
}
.item-text p {
  width: 1rem;
  margin: 0.01rem;
}
.item-text span {
  color: rgb(241, 64, 64);
  font-size: 0.12rem;
  margin-left: 0.1rem;
}
.item-text .p1 {
  width: 3rem;
  font-size: 0.12rem;
  color: #afa3a3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>