<template>
  <div class="wsy_box">
    <div class="wsy_main">
      <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left">
          <van-icon name="arrow-left" @click="onClickLeft" />
        </div>
        <div class="head_title">确认订单</div>
        <!-- <div class="head_icon" @click="onClickRight">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAB5FJREFUaAXtmntMllUcx3lfbnJLEEtzM60N6LJGWmmY1jA3c7M5q5UIomPmnA7topvlMFpmNautwbBMAQHFsVFT/7CL2MU7xkpgkWx5WVMzAXERIdc+5/U9j+c57/O+wOR9H9p6t8dzfrdzvt/nnOd3LhgU9P/vv/UGHMMFblpaWorD4ZgLngSe23guI1eHh4d/UVhYeHGwOG0nlpGRMbmnpycP4NOswEOuq6+v75O4uLg3CgoK2qx8rHS2EktPT38e0KU8I6zAabraiIiIOQMdPduIQerx3t7eg4AP0wh4FRm9mrCwsOnFxcUdXp3cBmd/Dv6w5+bmhjBK22lbJ9XgdDo3Q2A1tkLKv9X+iXm4s7NzjarzVrdlxBYuXLgAkOUqKEh8HB0dvXbr1q1dUo/fPfjtRX5A6iivjR49ekxeXt51RedRtWXEADtfQ3I0MTHxVZWUsO/atesMI5gGaYMs6pEtLS0ztXgP0RZioHhQRQLwQqZnr6qT9Z07d9ZRPyFld2mK12wu0RZiEIlXwTCCp1XZom6yk3RM8Rb+QbYQg0izCgaiSapsUTfZmZ6meAt/e4gBREwv4wfRLKai5UtmWRDTbqrhfKNiitdsLjHYSukvXUVFRTDrUDrtZ/DEKf2MJyHEpaSkVNXU1BjfmjsrVuI3VvG9Fh8fv7K6urpH0XlUA5LuBaE9e/ak8W3kgCDRA8VNRQPVfUzNC4xiMuWLlFE3zUFB6HLIlhtVnVXdr8QGQcgKm4cOUgPeefhlKsop19DQUMEbfwmEllkMoEd47sAe4sHCUyH2inOLioquepo8NUNKbBCEqoCyuLy8PDc5OXk/5EWCGO8JzzX1xOJcwO4+nQW832wo2/A6FZcsWTKiu7t7AkeKUbzVJnYGZ8lc3TJQLQc65WinChK5EDqsxou6PI9hT8QvBtXQnsfIRFNofB2Nz6aMlACQW6nvZQ3ZVFZW5lowh4KQbH+oS2PExI67sbHxQ8is6qeTHkiu57nQX5bDx+sI9dPHLZtdxCDjYKR209oLt9wiDdhJSOJ3ZSNW95d9kGrBNkoG+ColIdYZj2/IV5w/bE5GSuwANqiNA7Cdb2kV5Sg+9PioqKix1N/GxzJ5CELYZkBollViUNsOVN3BaGXxrWxXOuyjngrA7xWdq8pLyGTa7lD1kMqGUL6qGw51J6RmaUB2W5ESPhAogcgx1R+i41R5uNSdADUtjMiHfIGDiG43xfuKDaTN8qjgCwDfnrFEuP1Mm1RfsYG0ORmB39UOkWeosl7HPl3TzWfXsN99btJM9okMgPOA1v0CgD6p6VyiO3mkWNie5lv9Cftn3OzeaWEPuEoszCLdn2EkYmXvfGftPOvQlZEwri5dunRMe3v7SuTX8XGtfdJXL4kTd4Gbg4ODPygtLTXdC+q+/pRd3wvkXgH0R1468rVA/0GMerpVm7jIbMhJSEgoZrtmnIpVB3/Wg0XjtbW1JyorK++jql5Myn4jZEUtAb2ZI/q8jo6Ov3gpU7Dp9+8x6Oc1NzfP52hypq6u7jc13t91I8MNYhMsdh85rHXvSXCZmZnxXV1dbzINl0MmVOrVEttXTM81TM96VW9Vz8rKiuEqew5HJrHGjidWbOmaeM7yQveHhIRU9Xd/bxCTHTAtfR1b9tHwO/LYImNkSWwCxN5H1m96pYs4GRTRxgbauCSVslyxYkV0a2vrGtp4DV201FuUV2hnI1fiW/TbY+nrQUwa1IMmb/pKZGTkeW+NyBhZkhlnkCXFEehRqVNLQHkkGEY9kYPtXmJMd4hqnEX9KPvYZ7dt23ZZt3klpjsOVgagY9GiRQuYTpuInegl3pVgsB3H/zCPeiXnJcRDfY6pOZUp/qdq8Rsx2Ul2dnZ4U1OTOLyu5xkp9Vopvlt9GelkZD9H/wNTt5kZILLvLMiLP+eacON3mKuLVPKEaMf1MzlIpT/KgSQY2S9Af2YUFpeUlNRKnSzF5gF7EQTvljp3uZyE9qnUBYyY7HAACebHmJiYab6+52XLlo1sa2urhdxdsl3Ki0lJSRPkqAWcmAQiEgzf3xZkde28zrSbzJ+OfpF+3kr2pk8xPb/BbnAgyaWSbb8TMYPe3YugofgB4BBTyvTHBeSygZAS/eNXhf9BFQsjOFvKthFzA5gggbjLbzXZpwgRkz8jaLRnKzGAma6+GYErPploRt0f2WjPVmIAMV1ZQ/R2DbtPUfdHNtqzlRioz2vIUzXZp8iLMfmTeIz2bCXGG/5aRY6cQba7X9V5q4usiP9M1a62ZysxQO3j+UcBF04C2ME6ZXlCkH5iHYNEIbJD6hi9S+w+jIsm13lMGgNd1tfXt3NWiwbkdKXvcRyBnpk0adKxU6dOeWxuxc4Du/jT00QlRlTX5ufnn5Q6fX8m9YEs3+VtPwdQ8d/5XD/qDwH+JLsUy70idmOkRADxRxit7Teib/xrclANgawzCvcC7iiAh2x3b/c35np/bF5/ZdP7GOROD+aF4n+c/6iZoh9ZRBvDgpgAwk6+MTY29hHAvoXo8z9c4tPEs5oT9BNcEYgLJY/fsJiKOiqrOw+mqbgOOMfzZWho6IH+7jz+Bbk8OzWOrwckAAAAAElFTkSuQmCC"
          />
        </div>-->
        <div class="head_icon"></div>
      </div>
    </div>
    <div class="info">
      <div class="info_title">
        <span>初中重点几何知识点——第三讲：平行四边形与矩形、菱形、正方形的关系</span>
        <font>1.00</font>
      </div>
      <p>授课老师：马兴龙</p>
    </div>
    <div class="onSale">
      <span>优惠券</span>
      <span>无可用</span>
    </div>
    <div class="price">
      <p>
        <span>商品金额</span>
        <span class="wsy_good_price">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
          />
          <span>1.00</span>
        </span>
      </p>
      <p>
        <span>优惠券金额</span>
        <span class="wsy_good_price">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
          />
          <span>0</span>
        </span>
      </p>
      <p>
        <span>合计</span>
        <span class="wsy_price">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
          />
          <span>1.00</span>
        </span>
      </p>
    </div>
    <div class="price_btn">
        <p>
            <span>实付价格</span>
            <span class="wsy_price">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
          />
          <span>1.00</span>
        </span>
        </p>
        <p @click='wsy_submit()'>提交订单</p>
    </div>
    </div>
    <!-- 确认订单提示组件 -->
    <wsyHint v-if='this.$store.state.wsy_isHint'></wsyHint>
  </div>
</template>

<script>
import wsyHint from '@/components/wsy_hint.vue'
export default {
  name: "",
  components: {
    wsyHint
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
    //   返回上一页
    onClickLeft() {
      this.$router.back(1);
    },
    // 提交订单
    wsy_submit(){
      this.$store.commit("wsy_Hint",true)
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_box {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  flex-direction: column;
  >.wsy_main{
    width: 100%;
    height: 100%;
    display: flex;
  align-items: center;
  flex-direction: column;
  }
}
.header_container {
  width: 100%;
  height: 0.48rem;
  //   border-bottom: 0.001rem solid rgb(238, 238, 238);
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
      justify-content: center;
      align-items: center;
      font-size: 0.2rem;
    }
    .head_title {
      font-size: 0.2rem;
      color: rgb(49, 49, 49);
    }
    .head_icon {
      width: 0.27rem;
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 0.2rem;
      }
    }
  }
}
.info {
  margin-top: 0.1rem;
  width: 3.7rem;
  height: 1.2rem;
  background: #fff;
  padding: 0.2rem 0.15rem;
  box-sizing: border-box;
  > .info_title {
    width: 100%;
    display: flex;
    align-items: center;
    > span {
      line-height: 0.3rem;
    }
  }
  > p {
    font-size: 0.12rem;
    color: #b7b7be;
  }
}
.onSale {
  margin-top: 0.2rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  > :nth-child(1) {
    font-size: 0.18rem;
  }
  > :nth-child(2) {
    font-size: 0.16rem;
    color: #969799;
  }
}
.price {
  width: 100%;
  height: 1rem;
  margin-top: 0.2rem;
  background: #ffffff;
  padding: 0.2rem;
  box-sizing: border-box;
  > p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > :nth-child(1) {
      font-size: 0.14rem;
      color: #8c8c8c;
    }
  }
}
.wsy_price {
  color: red;
  font-size: 0.18rem;
  > img {
    width: 0.1rem;
    height: 0.1rem;
  }
}
.wsy_good_price {
  font-size: 0.14rem;
  color: #8c8c8c;

  > img {
    width: 0.1rem;
    height: 0.1rem;
  }
}
.price_btn {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  >:nth-child(1){
      flex: 1;
      height: 0.5rem;
      line-height: .5rem;
      padding-left: .2rem;
      box-sizing: border-box;
      >:nth-child(1){
          line-height: .5rem;
          font-size: .12rem;
          color: #8c8c8c;
      }
      >:nth-child(2){
          font-size: .28rem;
      }
  }
  >:nth-child(2){
      width: 35%;
      text-align: center;
      line-height: .5rem;
      color: #fff;
      background: #EB6100;
  }
}
</style>
