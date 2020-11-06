<template>
  <div class="wsy_login">
    <div class="wsy_box">
        <p>提示</p>
        <div>
            <van-icon size="12" color="#E6A23C" name="warning" />
            <span>很抱歉，学习币余额不足，无法完成支付！</span>
        </div>
        <p>
            <span @click='wsy_close()'>取消</span>
            <span @click='toPay()'>确定</span>
        </p>
      <van-icon name="cross" class="cross" size="12px" color="#B8B8B8" @click="close()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
    close() {
      this.$store.commit("wsy_VerifyB", false);
    },
    // 取消充值
    wsy_close(){
      this.$store.commit("wsy_VerifyB", false);
    },
    // 跳到充值页面
    toPay(){
        this.$router.push("/wyl-my-currency")
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_login {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  > .wsy_box {
    width: 2.2rem;
    height: 1rem;
    background: #fff;
    position: relative;
    padding: .1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    >:nth-child(1){
        font-size: .12rem;
        color: #303133;
    }
    > :nth-child(2) {
        width: 100%;    
        display: flex;
        align-items: center;
        justify-content: flex-start;
        >span{
            margin-left: .05rem;
            font-size: .10rem;
            color: #606266;
        }
    }
    > :nth-child(3) {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        font-size: .12rem;
        >:nth-child(1){
            padding: .01rem .08rem;
            border-radius: .01rem;
            border: .01rem solid #DCDFE6;
            color: #606266;
            margin-right: .1rem;
        }
        >:nth-child(2){
            border-radius: .01rem;
            padding: .03rem .08rem;
            background: #EB6100;
            color: #fff;
        }
    }
  }
}
.cross {
  top: 0.1rem;
  right: 0.1rem;
  position: absolute;
}
</style>
