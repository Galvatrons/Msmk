<template>
  <div class="wsy_box">
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left">
          <van-icon name="arrow-left" @click="onBack" />
        </div>
        <div class="head_title" v-show="headShow == false">课程详情</div>
        <div class="head_title_active" v-show="headShow">
          <span @click="onIntroduce" :class="spanActive == 1 ? 'span_active' : ''">课程介绍</span>
          <span @click="onOutline" :class="spanActive == 2 ? 'span_active' : ''">课程大纲</span>
          <span @click="onPing" :class="spanActive == 3 ? 'span_active' : ''">课程评价</span>
        </div>
        <div class="head_icon" @click="showPopup">
          <img src="../../assets/fenxiang.png" alt />
        </div>
      </div>
    </div>
    <div class="info_box">
      <div>
        <div class="course_info">
          <div class="info_title">
            <span>{{ info.title }}</span>
            <div class="wujiaoWrapper">
              <img
                src="../../assets/img/wujiaoxing.png"
                @click="wujiaoClickOK"
                v-show="info.is_collect == 0"
                alt
              />
              <img
                src="../../assets/img/wujiaoxing_active.png"
                @click="wujiaoClickNo"
                v-show="info.is_collect == 1"
                class="wujiaoActive"
              />
            </div>
          </div>
          <div class="info_price">{{ info.price }}</div>
          <div class="info_classify">
            共
            <span>{{ info.total_periods }}</span>课时
            <span>|</span>&nbsp;
            <span>{{ info.sales_num }}</span>人已报名
          </div>
          <div class="info_time">
            开课时间:
            <span>{{ info.start_play_year + "." }}</span>
            <span>{{ info.start_play_date | startDate }}</span>
            <span>{{ info.end_play_date | endDate }}</span>
          </div>
        </div>
        <div class="teach_team">
          <div>教学团队</div>
          <div class="teach_wrapper">
            <div class="teach_left" @click="onTeacherDetail">
              <img :src="teacherItem.teacher_avatar" alt />
              <span>{{ teacherItem.teacher_name }}</span>
            </div>
            <div class="teach_right"></div>
          </div>
        </div>
        <div class="classify_jieshao" ref="introduceView">
          <p>课程介绍</p>
          <div v-html="info.course_details"></div>
        </div>
        <div class="classify_outline">
          <p>课程大纲</p>
          <div
            class="classify_slide"
            v-for="(item, index) in chapter"
            :key="index"
            @click="onVideo(item)"
          >
            <div class="dian"></div>
            <div class="classify_slide_right">
              <div class="classify_slide_right_top">
                <div class="classify_playback">回放</div>
                <div class="classify_title">{{ item.periods_title }}</div>
              </div>
              <div class="classify_slide_right_bottom">
                <span v-for="(data, i) in item.teachers" :key="i">
                  {{
                  data.teacher_name
                  }}
                </span>
                <span>03月20日 08:00 - 10:30</span>
              </div>
            </div>
          </div>
        </div>
        <div class="classify_comment">
          <p>课程评论</p>
          <div class="comment_wrapper">
            <div
              class="comment_slide"
              v-for="(item, index) in commentData"
              :key="index"
              v-show="commentData.length >= 1"
            >
              <div class="slide_left">
                <img src="favicon.ico" alt />
              </div>
              <div class="slide_center">
                <div class="slideCenter_top">
                  <span>{{ item.username }}</span>
                  <van-rate v-model="item.gradeValue" size="16px" gutter="2px" readonly />
                </div>
                <div class="slideCenter_bottom">
                  <span>{{ item.comment }}</span>
                </div>
              </div>
              <div class="slide_right">{{ item.time }}</div>
            </div>
            <div class="comment_none" v-show="commentData.length == 0">
              <img src="../../assets/img/commentnone.png" alt />
              <div>暂无评论</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="show" round>
      <div class="erwei">
        <div class="erwei_top">分享</div>
        <div class="erwei_bottom">
          <img :src="imgUrl" alt />
        </div>
      </div>
    </van-popup>
    <div class="applyButton" v-show="info.is_buy == 1">
      <button @click="onStudy">立即学习</button>
    </div>
    <div class="applyButton" v-show="info.is_buy == 0">
      <button @click="onApply">立即报名</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import BetterScroll from "better-scroll";
import QRCode from "qrcode";
export default {
  data() {
    return {
      id: this.$route.params.id,
      yz_bs: null,
      show: false,
      wujiaoShow: false,
      headShow: false,
      spanActive: 1,
      imgUrl: "",
      pinglunId: "",
      collect_id: "",
      couDetailId: localStorage.getItem("courseId"),
      info: {},
      teacherItem: [],
      chapter: [],
      teacher: [],
      course: {},
      commentData: [
        {
          username: "1231321",
          gradeValue: 4,
          comment: "不错",
          time: "2020-09-02 21:03"
        },
        {
          username: "杨铮",
          gradeValue: 3,
          comment: "挺好的",
          time: "2020-09-02 21:03"
        },
        {
          username: "杨铮",
          gradeValue: 3,
          comment: "挺好的",
          time: "2020-09-02 21:03"
        },
        {
          username: "杨铮",
          gradeValue: 3,
          comment: "挺好的",
          time: "2020-09-02 21:03"
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
        this.yz_bs = new BetterScroll(".info_box", {
          probeType: 3,
          click: true
        });
        // 上滑禁止
      this.yz_bs.on("scroll", pos => {
        // console.log(pos.y);
        if (pos.y < -345 && pos.y > -435) {
          this.spanActive = 1;
        } else if (pos.y < -430) {
          this.spanActive = 2;
        }
        if (pos.y < -34) {
          this.headShow = true;
        } else {
          this.headShow = false;
        }
      });
      
    });
    // console.log(this.couDetailId);
    this.courseData();
    // 课程评论数据
    this.$http
      .post("/api/app/courseComment", {
        id: this.pinglunId,
        limit: 5,
        page: 1
      })
      .then(res => {
        console.log(res);
      });
  },
  methods: {
    // 课程详情数据
    courseData() {
      this.$http
        .get(`/api/app/courseInfo/basis_id=${this.couDetailId}`)
        .then(res => {
          console.log(res);
          this.teacherItem = res.data.data.teachers[0];
          console.log(this.teacherItem);
          this.info = res.data.data.info;
          console.log(this.info);
          if (this.info.price == 0) {
            this.info.price = "免费";
          }
          this.pinglunId = this.info.id;
          this.collect_id = this.info.collect_id;
          // console.log(this.pinglunId);
          this.getOueline(this.info.id);
        });
    },
    // 课程大纲数据
    getOueline(id) {
      this.$http.get(`/api/app/myStudy/course/${id}`).then(res => {
        console.log(res.data.data);
        this.chapter = res.data.data.periods;
        console.log(this.chapter);
        this.course = res.data.data.course;
        console.log(this.course);
      });
      // console.log(data);
    },
    onBack() {
      this.$router.push("/lwh_course");
    },
    // 点击视频
    onVideo(item) {
      console.log(item.video_id);
      console.log(item.id);
      this.$http
        .get(
          `/api/app/getPcRoomCode/course_id=${item.id}/chapter_id=${item.video_id}?`
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 201) {
            Toast(res.data.msg);
          }
        });
      // window.location.href=`https://www.365msmk.com/api/app/getPcRoomCode/course_id=281/chapter_id=${item.video_id}?`
    },
    showPopup() {
      this.show = true;
      let url = location.href;
      console.log(url);
      QRCode.toDataURL(url)
        //在这里拿到地址，把它赋值给data里面定义的值imrUrl
        .then(tpian => {
          console.log(tpian);
          this.imgUrl = tpian;
        })
        .catch(err => {
          console.error(err);
        });
    },
    wujiaoClick() {
      this.wujiaoShow = !this.wujiaoShow;
      if (this.wujiaoShow == true) {
        Toast({
          message: "收藏成功",
          icon: "success"
        });
      } else {
        Toast("取消收藏");
      }
    },
    // 收藏
    async wujiaoClickOK() {
      // this.wujiaoShow = true;
      let { data } = await this.$http.post("/api/app/collect", {
        course_basis_id: this.pinglunId,
        type: 1
      });
      console.log(data);
      this.courseData();
    },
    // 取消收藏
    async wujiaoClickNo() {
      // this.wujiaoShow = false;
      let { data } = await this.$http.put(
        `/api/app/collect/cancel/${this.collect_id}/1`
      );
      console.log(data);
      this.courseData();
    },
    // 跳转讲师详情
    onTeacherDetail() {
      this.$router.push({
        path: "/teacher",
        query: { id: this.teacherItem.teacher_id }
      });
    },
    // 立即学习按钮
    onStudy() {
      // console.log(this.pinglunId);
      this.$router.push({
        path: "/yzStudyDetail",
        query: { id: this.pinglunId }
      });
    },
    // 立即报名按钮
    onApply() {
      this.$http
        .post("/api/app/order/downOrder", {
          shop_id: this.pinglunId,
          type: 5
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.courseData();
          }
          if (res.data.code == 201) {
            Toast(res.data.msg);
          } else if (res.data.code == 202) {
            Toast(res.data.msg);
          }
        });
    },
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrolltop + "      handleScroll");
      // scrolltop > 30 ? (this.fixeditem = true) : (this.fixeditem = false);
    },
    onIntroduce() {
      document.documentElement.scrollTop = 100;
      this.spanActive = 1;
    },
    onOutline() {
      this.spanActive = 2;
    },
    onPing() {
      this.spanActive = 3;
    }
  },
  filters: {
    startDate(val) {
      var date = new Date(val * 1000);
      var timeStr = `${date.getMonth()}.${date.getDate()} ${date.getHours()}0:${date.getMinutes()}0 -`;

      return timeStr;
    },
    endDate(val) {
      var date = new Date(val * 1000);
      var timeStr = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}0:${date.getMinutes()}0`;
      return timeStr;
    }
  },
  watch: {
    course: {
      handler() {
        console.log(1);

        this.$nextTick(() => {
          this.yz_bs.refresh();
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.wsy_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.info_box {
  width: 100%;
  // height: 100%;
  flex: 1;
  background-color: rgb(245, 245, 245);
  overflow: hidden;
  margin-top: 0.48rem;
  > :nth-child(1) {
    width: 100%;
    min-height: 101%;
    // position: relative;
    // padding-bottom: 1rem;
  }
}
.header_container {
  width: 100%;
  height: 0.48rem;
  border-bottom: 0.001rem solid rgb(238, 238, 238);
  padding: 0 0.05rem;
  box-sizing: border-box;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
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
    .head_title_active {
      height: 100%;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        color: gray;
        font-size: 0.15rem;
      }
      .span_active {
        color: black;
        font-size: 0.16rem;
      }
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
.course_info {
  width: 100%;
  height: 1.55rem;
  background-color: white;
  padding: 0.15rem;
  box-sizing: border-box;
  .info_title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;
    .wujiaoWrapper {
      width: 0.25rem;
      height: 0.25rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .info_price {
    font-size: 0.19rem;
    color: orange;
    margin-top: 0.05rem;
  }
  .info_classify {
    color: gray;
    margin-top: 0.1rem;
  }
  .info_time {
    color: gray;
    margin-top: 0.1rem;
  }
}
.teach_team {
  width: 100%;
  height: 1.5rem;
  background-color: white;
  margin-top: 0.15rem;
  padding: 0.15rem;
  box-sizing: border-box;
  .teach_wrapper {
    width: 100%;
    height: 0.9rem;
    display: flex;
    .teach_left {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      flex-direction: column;
      img {
        width: 0.35rem;
        height: 0.35rem;
        border-radius: 50%;
      }
      span {
        width: 100%;
        text-align: center;
        margin-top: 0.05rem;
        font-size: 0.14rem;
      }
    }
    .teach_right {
      flex: 4;
      height: 100%;
    }
  }
}
.classify_jieshao {
  width: 100%;
  // height: 0.7rem;
  background-color: white;
  margin-top: 0.15rem;
  padding: 0.1rem;
  box-sizing: border-box;
}
.classify_outline {
  width: 100%;
  margin-top: 0.15rem;
  background-color: white;
  padding: 0.1rem;
  box-sizing: border-box;
  .classify_slide {
    width: 90%;
    height: 0.5rem;
    // background-color: violet;
    margin: 0.1rem auto;
    display: flex;
    align-items: center;
    margin-top: 0.05rem;
    .dian {
      width: 0.05rem;
      height: 0.05rem;
      background-color: orange;
      border-radius: 50%;
    }
    .classify_slide_right {
      width: 80%;
      height: 100%;
      margin-left: 0.1rem;
      .classify_slide_right_top {
        width: 100%;
        height: 60%;
        // background-color: orangered;
        display: flex;
        align-items: center;
        .classify_playback {
          width: 0.4rem;
          height: 0.2rem;
          background-color: orange;
          border-radius: 0.02rem;
          color: white;
          font-size: 0.14rem;
          text-align: center;
        }
        .classify_title {
          margin-left: 0.1rem;
          font-size: 0.14rem;
          color: gray;
        }
      }
      .classify_slide_right_bottom {
        width: 100%;
        height: 40%;
        display: flex;
        align-items: center;
        span {
          margin-left: 0.1rem;
          font-size: 0.14rem;
          color: gray;
        }
      }
    }
  }
}
.classify_comment {
  width: 100%;
  margin-top: 0.15rem;
  background-color: white;
  padding: 0.1rem 0.1rem 1rem 0.1rem;
  box-sizing: border-box;

  box-sizing: border-box;
  .comment_wrapper {
    width: 100%;
    padding: 0.1rem;
    box-sizing: border-box;
    .comment_slide {
      width: 100%;
      height: 0.5rem;
      margin-top: 0.1rem;
      display: flex;
      justify-content: space-between;
      .slide_left {
        width: 0.25rem;
        height: 100%;
        // background-color: bisque;
        img {
          width: 0.25rem;
          height: 0.25rem;
          border-radius: 50%;
        }
      }
      .slide_center {
        width: 2.35rem;
        height: 100%;
        // background-color: blue;
        .slideCenter_top {
          width: 100%;
          height: 50%;
          span {
            margin: 0 0.1rem;
            font-size: 0.15rem;
          }
        }
        .slideCenter_bottom {
          width: 100%;
          height: 50%;
          span {
            margin: 0 0.1rem;
            font-size: 0.14rem;
            color: gray;
          }
        }
      }
      .slide_right {
        width: 1.3rem;
        height: 100%;
        // background-color: burlywood;
        color: gray;
        font-size: 0.14rem;
      }
    }
    .comment_none {
      width: 100%;
      height: 2rem;
      text-align: center;
      img {
        width: 1.6rem;
        height: 1.6rem;
      }
      div {
        color: rgb(82, 82, 82);
        font-size: 0.15rem;
        margin-top: 0.1rem;
      }
    }
  }
}
.applyButton {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  button {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: orange;
    color: white;
    font-size: 0.18rem;
  }
}
.erwei {
  width: 2.8rem;
  height: 2.3rem;
  border-radius: 0.2rem;
  .erwei_top {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .erwei_bottom {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
