<template>
  <div>
    <wsyHeader>
      <template slot="title">消息通知</template>
      <template slot="right">
      </template>
      <template slot="search">
        <div></div>
      </template>
    </wsyHeader>
    <div class="wsy_main">
        <div class="message_item" @click='wsy_skip(item.message_classify)' v-for='(item,index) in messageList' :key="index">
            <div class="left_img">
                <img :src="item.img" alt="">
            </div>
            <div class="right">
                <p>{{ item.title }}</p>
                <p>暂无消息</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import wsyHeader from "@/components/wsy_header.vue";
export default {
  name: "",
  components: {
    wsyHeader
  },
  props: {},
  data() {
    return {
        messageList:[
            {
                img:"https://wap.365msmk.com/img/icon-msg-course.d8a2c8d5.png",
                title:"课程通知",
                message_classify:"course"
            },
            {
                img:"https://wap.365msmk.com/img/icon-msg-system.db56e51b.png",
                title:"系统通知",
                message_classify:"system"
            },
            {
                img:"https://wap.365msmk.com/img/icon-msg-order.41755990.png",
                title:"订单通知",
                message_classify:"order"
            },
            {
                img:"https://wap.365msmk.com/img/icon-msg-course.d8a2c8d5.png",
                title:"约课通知",
                message_classify:"oto"
            },
            {
                img:"https://wap.365msmk.com/img/icon-msg-exam.8a210fd7.png",
                title:"考试通知",
                message_classify:"exam"
            },
        ]
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
      wsy_skip(message_classify){
          this.$router.push(`/message-detail?message_classify=${message_classify}`)
      }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_main{
    width: 100%;
    padding: 0 .2rem;
    box-sizing: border-box;
}
.message_item{
    width: 100%;
    height: .8rem;
    border-bottom: .01rem solid #F5F5F5;
    display: flex;
    align-items: center;
    >.left_img{
        width: 20%;
        height: 90%;
        display: flex;
        // justify-content: center;
        align-items: center;
        >img{
            width: 70%;
            height: 70%;
        }
    }
    >.right{
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        >p{
            height: .3rem;
            color: #595959;
        }
        >:nth-child(1){
            margin-top: 0.1rem;
            font-size: .16rem;
        }
        >:nth-child(2){
            font-size: .14rem;
        }
    }
}
</style>
