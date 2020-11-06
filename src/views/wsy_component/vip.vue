<template>
  <div>
    <wsyHeader>
      <template slot="title">开通会员</template>
      <template slot="right"></template>
      <template slot="search">
        <div></div>
      </template>
    </wsyHeader>
    <div class="wsy_main">
      <div class="wsy_item">
        <img :src="userInfo.avatar" />
        <div>
          <p>{{ userInfo.nickname }}</p>
          <p>开通会员免费学习</p>
        </div>
      </div>
      <div class="bottom">
          <p>
              <span>购买会员</span>
              <span>购买会员后可免费观看会员课程</span>
          </p>
          <div class="vip_items">
              <div class="vip_item" :class="active == index?'active':''" @click="active = index" v-for='(item,index) in vipArr' :key="index">
                  <p>{{ item.name }}</p>
                  <p class="wsy_price">
                    <img
                      src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                    />
                    <span>{{ item.price }}</span>
                  </p>
              </div>
          </div>
          <div class="wsy_button" @click='showVerify'>
              立即支付
          </div>
      </div>
      <wsyVerify v-show='$store.state.wsy_isVerify'></wsyVerify>
      <wsyVerifyB v-show='$store.state.wsy_isVerifyB'></wsyVerifyB>
    </div>
  </div>
</template>

<script>
import wsyHeader from "@/components/wsy_header.vue";
import wsyVerify from "@/components/wsy_verify.vue";
import wsyVerifyB from "@/components/wsy_verifyB.vue";

export default {
  name: "",
  components: {
    wsyHeader,
    wsyVerify,
    wsyVerifyB
  },
  props: {},
  data() {
    return {
        active:0,
        userInfo:{},
        vipArr:[
            {
                name:"季度会员",
                price:"40.00"
            },
            {
                name:"半年会员",
                price:"75.00"
            },
            {
                name:"月会员",
                price:"15.00"
            }
        ]
    };
  },
  created() {},
  mounted() {
    //   console.log();
    this.getUserInfo()
  },
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
     async getUserInfo(){
        let { data } = await  this.$http.get("/api/app/userInfo?")
        this.userInfo =  data.data
      },
      showVerify(){
          this.$store.commit("wsy_Verify",true)
      }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_main {
  width: 100%;
  height: 100%;
  background: #F0F2F5;
}
.wsy_button{
    width: 92%;
    height: 0.5rem;
    background: #E7C487;
    border-radius: .6rem;
    color: #fff;
    font-size: .18rem ;
    text-align: center;
    line-height: .5rem;
    position: fixed;
    left: 50%;
    bottom: .3rem;
    transform: translateX(-50%);
}
.bottom{
    width: 100%;
    height: 100%;
    padding: .4rem .2rem;
    box-sizing: border-box;
    >p{
        >:nth-child(1){
            font-size: .16rem;
            color: #595959;
            margin-right: 0.1rem;
        }
        >:nth-child(2){
            font-size: .12rem;
            color: #8C8C8C;
        }
    }
}
.vip_items{
    margin-top: 0.2rem;
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >.vip_item{
        width: 30%;
        height: 100%;
        background: #fff;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: .1rem;
        border: .01rem solid #D9D9D9;
        >:nth-child(1){
            font-weight: bold;
            font-size: .14rem;
        }
        >:nth-child(2){
            font-size: .30rem;
            font-weight: bold;
            color: #D5A322;
            >img{
                width: 0.2rem;
                height: 0.2rem;
            }
        }
    }
    .active{
        background: #F9F0D9;
        border: .01rem solid #E6C37F;
    }
}
.wsy_item {
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
</style>
