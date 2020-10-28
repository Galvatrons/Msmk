<template>
  <div>
    <van-nav-bar title="学习日历" left-arrow @click-left="onClickLeft" />
    <Calendar @choseDay="clickDay" :sundayStart="true"></Calendar>
    <div class="info">
      <span>{{ month }}月{{ date }}日</span>
      <span>当天{{ lesson }}节课</span>
    </div>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";
export default {
  name: "",
  components: {
    Calendar
  },
  props: {},
  data() {
    return {
      lesson:0,
      month:null,
      date:null,
      timeArr:[]
    };
  },
  created() {},
  mounted() {
   this.month = new Date().getMonth()+1
   this.date =  new Date().getDate()
    
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
    clickDay(day){
     this.timeArr = day.split("/");
      this.month = this.timeArr[1]
      this.date = this.timeArr[2]
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.card{
  background: #fff;
}
.wh_content_all{
  background-color: #fff!important;
}
.card div:nth-child(1){
    background-color:#BDC0BA;
    padding-bottom:0;
}
.card div:nth-child(3) div ,.card div:nth-child(2) div{
    height: 35px;
    width: 35px;
}
/*今天*/
.wh_content_item .wh_isToday[data-v-2ebcbc83]{
  background-color: red;
    // background-color:rgb(139, 175, 241);
}
/*日历点击*/
.wh_content_item .wh_chose_day[data-v-2ebcbc83]{
     background-color:transparent; 
}
/*日历划过*/
.wh_item_date[data-v-2ebcbc83]:hover{
    background-color:rgb(111, 223, 223);
    border-radius: 100%;
}
.info{
  width: 100%;
  margin-top: .2rem;
  padding-left: .2rem;
  box-sizing: border-box;
  >:nth-child(1){
    color: #EE6100;
    font-size: .18rem;
    margin-right: .2rem;
  }
  >:nth-child(2){
    color: #8C8C8C;
    font-size: .14rem;
  }
}
</style>
