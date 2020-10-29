<template>
  <div>
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left">
          <van-icon name="arrow-left" @click="onBack" />
        </div>
        <div class="head_title" v-show="headShow == false">课程详情</div>
        <div class="head_title_active" v-show="headShow">
          <span
            @click="onIntroduce"
            :class="spanActive == 1 ? 'span_active' : ''"
            >课程介绍</span
          >
          <span @click="onOutline" :class="spanActive == 2 ? 'span_active' : ''"
            >课程大纲</span
          >
          <span @click="onPing" :class="spanActive == 3 ? 'span_active' : ''"
            >课程评价</span
          >
        </div>
        <div class="head_icon" @click="showPopup">
          <img src="../../assets/fenxiang.png" alt="" />
        </div>
      </div>
    </div>
    <div class="info_box">
      <div>
        <div class="course_info">
          <div class="info_title">
            <span>{{ ccc.title }}</span>
            <div class="wujiaoWrapper">
              <img
                src="../../assets/img/wujiaoxing.png"
                @click="wujiaoClick"
                v-show="wujiaoShow == false"
                alt=""
              />
              <img
                src="../../assets/img/wujiaoxing_active.png"
                @click="wujiaoClick"
                v-show="wujiaoShow"
                class="wujiaoActive"
              />
            </div>
          </div>
          <div class="info_price">{{ ccc.price }}</div>
          <div class="info_classify">
            共<span>{{ ccc.total_periods }}</span
            >课时 <span>|</span>&nbsp; <span>{{ ccc.sales_num }}</span
            >人已报名
          </div>
          <div class="info_time">
            开课时间: <span>{{ ccc.start_play_year + "." }}</span>
            <span>{{ ccc.start_play_date | startDate }}</span>
            <span>{{ ccc.end_play_date | endDate }}</span>
          </div>
        </div>
        <div class="teach_team">
          <div>教学团队</div>
          <div class="teach_wrapper">
            <div class="teach_left" @click="onTeacherDetail">
              <img :src="couDetailId.teacher_avatar" alt="" />
              <span>{{ couDetailId.teacher_name }}</span>
            </div>
            <div class="teach_right"></div>
          </div>
        </div>
        <div class="classify_jieshao" ref="introduceView">课程介绍</div>
        <div class="classify_outline">
          <p>课程大纲</p>
          <div class="classify_slide" v-for="item in 6" :key="item">
            <div class="dian"></div>
            <div class="classify_slide_right">
              <div class="classify_slide_right_top">
                <div class="classify_playback">回放</div>
                <div class="classify_title">第一讲第一课时</div>
              </div>
              <div class="classify_slide_right_bottom">
                <span>{{}}</span>
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
              <div class="slide_left"><img src="favicon.ico" alt="" /></div>
              <div class="slide_center">
                <div class="slideCenter_top">
                  <span>{{ item.username }}</span>
                  <van-rate
                    v-model="item.gradeValue"
                    size="16px"
                    gutter="2px"
                    readonly
                  />
                </div>
                <div class="slideCenter_bottom">
                  <span>{{ item.comment }}</span>
                </div>
              </div>
              <div class="slide_right">{{ item.time }}</div>
            </div>
            <div class="comment_none" v-show="commentData.length == 0">
              <img src="../../assets/img/commentnone.png" alt="" />
              <div>暂无评论</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="show" round>
      <div class="erwei">
        <div class="erwei_top">
          分享
        </div>
        <div class="erwei_bottom">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
    </van-popup>
    <div class="applyButton"><button @click="onStudy">立即学习</button></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      id: this.$route.params.id,
      yz_bs: null,
      gradeValue: 3,
      show: false,
      wujiaoShow: false,
      headShow: false,
      spanActive: 1,
      ccc: {},
      couDetailId: JSON.parse(localStorage.getItem("couDetailId")),
      courseInfo: {},
      courseTitle: "",
      coursePrice: "",
      commentData: [
        {
          username: "1231321",
          gradeValue: 4,
          comment: "不错",
          time: "2020-09-02 21:03",
        },
        {
          username: "杨铮",
          gradeValue: 3,
          comment: "挺好的",
          time: "2020-09-02 21:03",
        },
      ],
    };
  },
  mounted() {
    // 课程详情数据
    this.$http
      .get(`/api/app/courseInfo/basis_id=${this.couDetailId.id}`)
      .then((res) => {
        var ccc = JSON.stringify(res.data.data);
        this.courseInfo = JSON.parse(JSON.stringify(res.data.data));
        this.ccc = this.courseInfo.info;
        if (this.ccc.price == 0) {
          this.ccc.price = "免费";
        }
        console.log(this.ccc);
      });
    this.$nextTick(() => {
      this.yz_bs = new BetterScroll(".info_box", {
        probeType: 3,
        click: true,
      });
      // 上滑禁止
      this.yz_bs.on("scroll", (pos) => {
        // console.log(pos.y);
        if (pos.y < -34) {
          this.headShow = true;
        } else {
          this.headShow = false;
        }
      });
    });
    // console.log(this.couDetailId);

    // 课程评论数据
    // this.$http.post(`/api/app/courseComment`).then((res) => {
    //   console.log(res);
    // });
  },
  methods: {
    onBack() {
      this.$router.push("/lwh_course");
    },
    showPopup() {
      this.show = true;
    },
    wujiaoClick() {
      this.wujiaoShow = !this.wujiaoShow;
      if (this.wujiaoShow == true) {
        Toast({
          message: "收藏成功",
          icon: "success",
        });
      } else {
        Toast("取消收藏");
      }
    },
    onTeacherDetail() {
      this.$router.push({
        path: "/yzTeacherDetail",
      });
    },
    onStudy() {
      this.$router.push("/yzStudyDetail");
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
    },
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
    },
  },
};
</script>

<style lang="scss" scoped>
.info_box {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 245, 245);
  overflow: hidden;
  margin-top: 0.48rem;
  > {
    width: 100%;
    height: 101%;
    position: relative;
    padding-bottom: 1rem;
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
  height: 0.7rem;
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
