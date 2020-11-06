<template>
  <div class="lwh_leave">
    <!-- 头部标题 -->
    <header>
      <p>给我们留言</p>
      <van-icon name="arrow-down" color="#fff" @click="lwh_btn()" />
    </header>
    <!-- 头部下方内容 -->
    <div>
      您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题
    </div>
    <!-- 留言框 -->
    <footer>
      <p>手机</p>
      <div>
        <van-field placeholder="请输入" />
      </div>
      <p>留言</p>
      <div style="height:1.14rem">
        <van-field rows="1" style="height:1.14rem" autosize type="textarea" placeholder="请输入留言" />
      </div>
    </footer>
    <!-- 尾部按钮 -->
    <div class="lwh_foot">
      <van-button type="info" block>提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  // 组件注册
  components: {},
  // 父组件传参
  props: {},
  // 变量声明
  data() {
    return {};
  },
  // Vue实例创建完成以后执行 数据可用
  created() {},
  // Vue模板挂载完毕以后执行  DOM节点加载完毕了（可以获取节点了）
  mounted() {},
  // vue组件更新完毕以后执行
  update() {},
  // 定义事件
  methods: {
    lwh_btn(){
      this.$store.commit("wsyShowLeave",false)
    }
  },
  // 过滤器
  filter: {},
  // 计算属性
  computed: {},
  // 监听属性
  watch: {},
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 0.76rem;
  background: #007aff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.12rem;
}
.lwh_leave > div:nth-of-type(1) {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem 0.2rem;
  font-size: 0.12rem;
}
footer{
  height: 2.58rem;
  width: 100%;
  >p{
    text-indent: 0.12rem;
    height: 0.28rem;
    line-height: 0.28rem;
    font-size:0.12rem;
  }
  >p:nth-of-type(2){
    margin-top:0.17rem;
  }
}
.lwh_foot{
  width: 100%;
  box-sizing: border-box;
  padding:0 0.24rem;
  height: 0.5rem;
}
</style>
