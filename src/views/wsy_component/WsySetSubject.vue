<template>
  <div class="wsy_box">
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left">
          <van-icon name="arrow-left" @click="onClickLeft" />
        </div>
        <div class="head_title">修改个人信息</div>
        <div class="head_icon">
          <p @click="wsy_save()">保存</p>
        </div>
      </div>
    </div>
    <div class="wsy_info_box">
      <div class="box" v-for="(item,index) in list" :key="index">
        <van-checkbox v-model="item.flag" shape="square">{{ item.name }}</van-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
        list:[
           
        ]
    };
  },
  created() {},
  mounted() {
    this.lwh_class()
  },
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
    onClickLeft() {
      this.$router.back(1);
    },
     //年级选择
    async lwh_class(){
      let {data} = await this.$http.get("https://www.365msmk.com/api/app/module/attribute/1?")
      data.data[1].value.map((i)=>{
        i.flag=false
      })
      this.list=data.data[1].value
      console.log(this.list)
    },
    async wsy_save(){
      let arr = []
      this.list.map((i)=>{
        if(i.flag){
          arr.push({"attr_id":2,"attr_val_id":i.id})
        }
      })
      
      let { data } = await this.$http.put(
        "https://www.365msmk.com/api/app/user",
        {
          user_attr:JSON.stringify(arr)
        }
      );
      this.$router.back(1);
      
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
}
.header_container {
  width: 100%;
  height: 0.48rem;
  padding: 0 0.05rem;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 0.1rem;
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
      font-size: 0.18rem;
      color: rgb(49, 49, 49);
    }
    .head_icon {
      width: 0.5rem;
      height: 100%;
      display: flex;
      align-items: center;
      color: #595959;
      img {
        width: 0.2rem;
      }
    }
  }
}
.wsy_info_box {
  width: 100%;
  padding: 0 0.2rem;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 0.8rem;
}
.box {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  background: #ffffff;
  border-bottom: 0.01rem rgb(238, 238, 238) solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #595959;
  > input {
    border: 0;
  }
  > input::placeholder {
    font-size: 0.2rem;
    color: #000;
  }
}
</style>
