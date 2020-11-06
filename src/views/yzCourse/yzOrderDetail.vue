<template>
  <div class="container">
    <van-nav-bar title="课程订单" left-arrow @click-left="onClickLeft" />
    <div class="orderTitle">交易完成</div>
    <div class="info_wrapper">
      <div class="info_title">{{ data.shop_name }}</div>
      <div class="order_number">
        <span>订单编号:</span>
        <span>{{ data.order_number }}</span>
      </div>
      <div class="order_time">
        <span>下单时间:</span>
        <span>{{ data.created_at }}</span>
      </div>
      <div class="order_pay">
        <span>支付方式:</span>
        <span>虚拟币支付</span>
      </div>
      <div class="original">
        <span>商品原价</span>
        <span>{{ data.original_price }}</span>
      </div>
      <div class="discount">
        <span>优惠券</span>
        <span>{{ data.coupon_discount }}</span>
      </div>
      <div class="actually ">
        <span>实付金额</span>
        <span class="price">{{ data.refund_price }}</span>
      </div>
      <div class="joinStudy" v-show="data.is_join_study == 0">
        <button>加入学习</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.query.id,
      data: {},
    };
  },
  mounted() {
    this.getData(this.id);
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 获取数据
    getData(id) {
      this.$http
        .post("/api/app/myOrder/detail", {
          order_id: id,
        })
        .then((res) => {
          console.log(res.data.data);
          this.data = res.data.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f0f2f5;
}
.van-nav-bar {
  background: #5faaf8;
}
.van-nav-bar .van-icon {
  color: white !important;
}
.van-nav-bar__title {
  color: white !important;
}
.orderTitle {
  width: 100%;
  height: 0.8rem;
  background: #5faaf8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.info_wrapper {
  width: 96%;
  height: 2.3rem;
  background-color: white;
  margin: 0.1rem auto;
  border-radius: 0.09rem;
  padding: 0.1rem 0.15rem;
  box-sizing: border-box;
  .info_title {
    width: 100%;
    // margin: 0.05rem 0;
    padding: 0.1rem 0;
    border-bottom: 0.01rem solid rgb(228, 228, 228);
  }
  .order_number {
    width: 100%;
    padding: 0.07rem 0;
    margin-top: 0.03rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.13rem;
    color: gray;
  }
  .order_time {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.13rem;
    color: gray;
  }
  .order_pay {
    width: 100%;
    display: flex;
    padding: 0.05rem 0 0.13rem 0;
    justify-content: space-between;
    font-size: 0.13rem;
    color: gray;
    border-bottom: 0.01rem solid rgb(228, 228, 228);
  }
  .original {
    width: 100%;
    padding: 0.07rem 0;
    margin-top: 0.03rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.13rem;
    color: gray;
  }
  .discount {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.13rem;
    color: gray;
  }
  .actually {
    width: 100%;
    display: flex;
    padding: 0.05rem 0 0.13rem 0;
    justify-content: space-between;
    font-size: 0.15rem;
    color: gray;
    border-bottom: 0.01rem solid rgb(228, 228, 228);
    .price {
      color: orangered;
      font-weight: bold;
    }
  }
  .joinStudy{
          width: 100%;
          height: 0.26rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          button{
            width: 0.7rem;
            height: 0.3rem;
            font-size: 0.14rem;
            color: orange;
            border: 0.001rem solid orange;
            background-color: white;
            border-radius: 0.2rem;
          }
        }
}
</style>
