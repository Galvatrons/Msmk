<template>
  <div>
    <Header>
      <div slot="title">我的优惠券</div>
    </Header>
    <van-tabs
      v-model="active"
      @click="onActive"
      line-width="60px"
      line-height="2px"
      title-active-color="orange"
    >
      <van-tab
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
      ></van-tab>
    </van-tabs>
    <div v-show="show" class="showContainer">
      <img class="picture" src="@/assets/img/a.png" />
      <div class="sxlh6">暂无优惠券</div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/wsy_header";
export default {
  data() {
    return {
      active: 0,
      list: [
        {
          title: "未使用",
          id: 0,
        },
        {
          title: "已使用",
          id: 1,
        },
        {
          title: "已过期",
          id: 2,
        },
      ],
      show: false,
    };
  },
  mounted() {
    this.onActive(this.active);
  },
  methods: {
    onActive(active) {
      console.log(this.active);
      this.$http
        .get("/api/app/coupon?", {
          status: this.active,
        })
        .then((res) => {
          console.log(res.data.data);
          if (res.data.data.length === 0) {
            this.show = true;
          }
        });
    },
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.showContainer{
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    div{
        width: 100%;
        text-align: center;
        color: gray;
        margin-top: 0.1rem;
    }
}
</style>
