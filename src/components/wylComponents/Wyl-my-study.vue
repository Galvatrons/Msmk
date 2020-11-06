<template>
  <div class="lwh_study">
    <div class="lwh_head">
      <span @click="onClickLeft()"
        ><van-icon name="arrow-left" size="20"
      /></span>
      <p>我的学习</p>
      <span @click='toStudySalendar' ><van-icon name="calendar-o" size="20" /></span>
    </div>
    <!-- 标签栏 -->
    <div class="lwh_bs">
      <div>
        <van-tabs
          swipeable
          color="#eb6100"
          title-active-color="#eb6100"
          line-height="1.5"
          :border="true"
          v-model="lwh_val"
          @click="lwh_tabs"
        >
          <van-tab
            :title="item.name + '(' + item.num + ')'"
            v-for="item in lwh_list"
            :key="item.type"
            :name="item.type"
          >
          
            <div
              v-if="item.num == 0 "
              class="lwh_tab"
            >
              <img
                class="picture"
                src="https://wap.365msmk.com/img/empty.0d284c2e.png"
              />
              <div class="sxlh6">还没有课程，快去选择课程学习吧</div>
              <router-link to="/lwh_course">
                <div class="registration">选择课程</div>
              </router-link>
            </div>
            <div
              class="lwh_main"
              v-if="item.num != 0"
            >
              <div
                class="lwh_cont"
                v-for="item in lwh_cont"
                :key="item.course_id"
                @click='toDetail(item.course_id)'
              >
                <p>{{ item.title }}</p>
                <div>
                  <span
                    ><img
                      src="data:image/png;base64,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"
                      alt=""
                  /></span>
                  <span> {{ item.start_play_date | dateFormat }} </span>

                  <span> ~ </span>

                  <span> {{ item.end_play_date | dateFormat }} </span>
                   
                  <span> {{item.section_num}}共课时</span>
                </div>
                <p>
                  <span>
                    <i></i>
                    <i :style="{width:item.progress_rate+'%'}"></i>
                  </span>
                  <span>已学习{{item.progress_rate}}%</span>
                </p>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      lwh_list: [],
      lwh_cont: [],
      wsy_bs: null,
      lwh_val: 2,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.wsy_bs = new BetterScroll(".lwh_bs", {
        probeType: 3,
        click: true,
      });
    });

    this.lwh_addAjax(this.lwh_val);
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/lwh_my",
      });
    },
    async lwh_addAjax(a) {
      let { data } = await this.$http.get(
        `https://www.365msmk.com/api/app/myStudy/${a}?`
      );
      this.lwh_list = data.data.typeNum;
      this.lwh_cont = data.data.courseList;
      let num = data.data.typeNum.reduce((p,i)=>{
        return p+i.num
      },0)
      this.$store.commit("lwh_numList",num) 
    },
    lwh_tabs(val) {
      console.log(this.lwh_cont, val);
      this.lwh_addAjax(val);
    },
    toDetail(course_id){
      this.$router.push(`/study-detail?course_id=${course_id}`);
    },
    // 跳转到学习日历
    toStudySalendar(){
      this.$router.push("/StudyCalendar")
    }
  },
  watch: {
    lwh_cont() {
      this.$nextTick(() => {
        this.wsy_bs.refresh();
      });
    },
  },
  filters: {
    dateFormat(dateStr, pattern = "") {
      var dt = new Date(dateStr); //yyy---mm-dd
      var y = dt.getFullYear(); //得到年份
      var m = dt.getMonth() + 1; //得到月份
      var d = dt.getDate(); //得到日期 // return y + '-' + m + '-' + d
      if (pattern.toLowerCase() === "yyy-mm-dd") {
        return `${m}月${d}日`;
      } else {
        var hh = dt.getHours(); //得到时
        var mm = dt.getMinutes(); //得到分
        var ss = dt.getSeconds(); //得到秒
        return `${m}月${d}日 ${hh}时${mm}分`;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.lwh_study {
  display: flex;
  flex-direction: column;
}
.lwh_head {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  box-sizing: border-box;
  font-size: 0.2rem;
  border-bottom: 0.01rem solid #eeee;
}
.lwh_bs {
  width: 100%;
  flex: 1;
  overflow: hidden;
  > div {
    min-height: 101%;
    width: 100%;
  }
}
.lwh_tab {
  text-align: center;
}
.picture {
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 1rem;
}
.sxlh6 {
  text-align: center;
  font-size: 0.18rem;
  margin-top: 0.1rem;
  color: gray;
  /* font-weight: 800; */
}
.registration {
  width: 0.87rem;
  height: 0.3rem;
  background: #eb6100;
  margin-left: 1.5rem;
  margin-top: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.14rem;
  border-radius: 0.05rem;
}
.lwh_main {
  width: 100%;
  padding: 0.1rem 0.15rem;
  box-sizing: border-box;
}
.lwh_cont {
  width: 100%;
  box-shadow: 0 0 2vw rgba(0, 0, 0, 0.1);
  margin-bottom: 0.1rem;
  padding: 0.23rem 0.13rem;
  box-sizing: border-box;
  > div {
    display: flex;
    font-size: 0.14rem;
    color: #666;
    margin: 0.1rem 0 0.3rem;
    > span {
      line-height: 0.16rem;
      margin-right: 0.02rem;
      margin-left: 0.02rem;
    }
    img {
      width: 0.14rem;
      height: 0.14rem;
    }
  }
  > p {
    display: flex;
    font-size: 0.12rem;
    color: #666;
    height: 0.12rem;
    align-items: center;
    > span {
      position: relative;
      width: 0.8rem;
      margin-right: 0.1rem;

      > i:nth-of-type(1) {
        width: 100%;
        display: block;
        height: 0.03rem;
        position: absolute;
        top: 0;
        left: 0;
        background: #eee;
      }
      > i:nth-of-type(2) {
        display: block;
        height: 0.03rem;
        position: absolute;
        top: 0;
        left: 0;
        background: #eb6100;
      }
    }
  }
}
</style>