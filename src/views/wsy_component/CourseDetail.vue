<template>
  <div class="wsy_box">
    <!-- 顶部导航栏 -->
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left">
          <van-icon name="arrow-left" @click="onClickLeft" />
        </div>
        <div v-show="!wsy_topFlag" class="head_title">课程详情</div>
        <div class="head_titleA" v-show="wsy_topFlag">
          <p
            :class="[active == index?'titleActive':'']"
            v-for="(item,index) in wsy_top"
            :key="index"
            @click="wsy_scr(index)"
          >{{ item }}</p>
        </div>
        <div class="head_icon" @click="onClickRight">
          <img
            src="data:image/png;base64,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"
          />
        </div>
      </div>
    </div>
    <!-- 顶部导航栏 -->
    <div class="wsy_info" ref="scrollBox">
      <div class="scrollBox">
        <div class="course_info">
          <div class="info_title">
            <p>{{ CourseInfo.title }}</p>
            <van-icon
              v-show="CourseInfo.is_collect == 0"
              name="star-o"
              color="#6C6C6C"
              @click="course(1)"
            />
            <van-icon
              v-show="CourseInfo.is_collect == 1"
              name="star"
              color="#FC5500"
              @click="course(0)"
            />
          </div>
          <div class="info_price" v-show="CourseInfo.price == 0">免费</div>
          <!-- <div class="info_price" v-show="CourseInfo.price!=0">{{ CourseInfo.price }}</div> -->
          <span class="wsy_price" v-show="CourseInfo.price != 0">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
            />
            <span>{{ CourseInfo.price | toFixed }}</span>
          </span>
          <div class="info_classify">
            共
            <span>{{ CourseInfo.total_periods }}</span>课时
            <span>|</span>&nbsp;
            <span>{{ CourseInfo.sales_num }}</span>人已报名
          </div>
        </div>
        <div class="teach_team">
          <div>教学团队</div>
          <div class="teach_wrapper">
            <div class="teach_left">
              <img :src="CourseInfo.cover_img" alt />
              <span>{{ CourseInfo.teacher_name }}</span>
            </div>
            <div class="teach_right"></div>
          </div>
        </div>
        <div class="classify_jieshao">
          <p class="title">课程介绍</p>
          <p class="font">{{ CourseInfo.course_statement }}</p>
        </div>
        <div class="classify_outline">
          <p>课程大纲</p>
          <div class="classify_slide" @click='jumpVideo'>
            <div class="dian"></div>
            <div class="classify_slide_right">
              <!-- <div class="classify_slide_right_top">
                <div class="classify_playback">回放</div>
                <div class="classify_title">第一讲第一课时</div>
              </div>
              <div class="classify_slide_right_bottom">
                <span>{{ data.username }}</span>
                <span>03月20日 08:00 - 10:30</span>
              </div>-->
              <p>自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题</p>
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
              v-show="commentData.length > 1"
            >
              <div class="slide_top">
                <div class="slide_left">
                  <img :src="item.avatar" alt />
                  <div class="slide_center">
                    <div class="slideCenter_top">
                      <span>{{ item.nickname }}</span>
                      <van-rate
                        v-model="item.grade"
                        size="14px"
                        gutter="2px"
                        color="#EA7A2F"
                        readonly
                      />
                    </div>
                  </div>
                </div>

                <div class="slide_right">{{ item.created_at | moment }}</div>
              </div>
              <div class="slideCenter_bottom">
                <span>{{ item.content }}</span>
              </div>
            </div>
            <div class="comment_none" v-show="commentData.length == 0">
              <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
              <div>暂无评论</div>
            </div>
            <div class="emit"></div>
          </div>
        </div>
      </div>

      <!-- 分享弹出层 -->
      <van-popup round v-model="PopupIsShow">
        <div class="wsy_popup">
          <p>分享</p>
          <!-- <img
            src="data:image/png;base64,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"
          /> -->
          <vue-qr :text="qr_text" :size="200"></vue-qr>
        </div>
      </van-popup>
      <!-- 分享弹出层 -->
    </div>
    <div class="wsy_bottom" v-show="CourseInfo.is_join_study != 0" @click="toStudy">立即学习</div>
    <div class="wsy_bottom" v-show="CourseInfo.is_join_study == 0" @click="toPurchase">立即报名</div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { Toast } from "vant";
import vueQr from 'vue-qr'
export default {
  name: "",
  components: {
    vueQr
  },
  props: {},
  data() {
    return {
      qr_text:window.location.href, //分享二维码
      course_type: null,
      PopupIsShow: false,
      wsy_bs: null,
      gradeValue: 3,
      wsy_topFlag: false,
      wsy_top: ["课程介绍", "课程大纲", "课程评价"],
      active: 0,
      commentData: [], //评论数据
      CourseInfo: {}, //课程详情数据
      wsy_Flag: null
    };
  },
  created() {},
  mounted() {
    
    this.$nextTick(() => {
      this.wsy_bs = new BetterScroll(this.$refs.scrollBox, {
        probeType: 3,
        click: true
      });

      this.wsy_bs.on("scroll", pos => {
        if (pos.y <= -100) {
          this.wsy_topFlag = true;
        } else {
          this.wsy_topFlag = false;
        }
        if (pos.y <= -315 && pos.y > -440) {
          this.active = 0;
        } else if (pos.y <= -440 && pos.y > -550) {
          this.active = 1;
        } else if (pos.y <= -550) {
          this.active = 2;
        }
      });
    });

    this.ajaxDetail();
    this.ajaxCouse();
  },
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
    async ajaxDetail() {
      let { data } = await this.$http.get(
        `/api/app/courseInfo/basis_id=${this.$route.query.id}`
      );
      console.log(data.data.info);

      this.CourseInfo = data.data.info;
    },
    async ajaxCouse() {
      let { data } = await this.$http.post("/api/app/courseComment", {
        id: this.$route.query.id,
        limit: 15,
        page: 1
      });
      this.commentData = data.data.list;
      console.log(this.commentData);
    },
    //   分享
    onClickRight() {
      this.PopupIsShow = true;
    },
    //   返回首页
    onClickLeft() {
      this.$router.back(1);
    },
    // 跳转到提交订单页面
    toPurchase() {
      if (this.CourseInfo.price == 0) {
        this.$router.push("/study-detail");
      } else {
        this.$router.push("/Purchase");
      }
    },
    // 跳转到课程学习页面
    toStudy() {
      this.$router.push("/study-detail");
    },
    // 收藏
    async course(num) {
      // this.CourseInfo.is_collect = num;
      if (num == 0) {
        //取消收藏
        let { data } = await this.$http.put(
          `/api/app/collect/cancel/${this.CourseInfo.collect_id}/1`
        );
        if (data.code == 200) {
          Toast(data.msg);
          this.ajaxDetail();
        }
      } else {
        //收藏
        let { data } = await this.$http.post("/api/app/collect", {
          course_basis_id: this.CourseInfo.id,
          type: 1
        });
        console.log(data);

        if (data.code == 200) {
          Toast(data.msg);

          this.ajaxDetail();
        }
      }
    },
    // 点击滚动置顶高度
    wsy_scr(index) {
      this.active = index;
      if (index == 0) {
        this.wsy_bs.scrollTo(0, -315, 1000);
      } else if (index == 1) {
        this.wsy_bs.scrollTo(0, -440, 1000);
      } else if (index == 2) {
        this.wsy_bs.scrollTo(0, -550, 1000);
      }
    },
    // 跳转到视频
    jumpVideo(){
      this.$router.push(`/video?video_id=30929276&id=${this.CourseInfo.id}`)
    }
  },
  filters: {
    createTimeFilter(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss"); //formatDate是从外部引入的函数，
    }
  },
  computed: {},
  watch: {
    commentData(){
      this.$nextTick(()=>{
        this.wsy_bs.refresh()
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.wsy_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > .wsy_info {
    flex: 1;
    overflow: hidden;
    .scrollBox {
      width: 100%;
      min-height: 101%;
      background: #f0f2f5;
    }
  }
}
.wsy_popup {
  text-align: center;
}
.info_box {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 245, 245);
  overflow: hidden;
  > {
    width: 100%;
    height: 101%;
    position: relative;
  }
}
.header_container {
  width: 100%;
  height: 0.48rem;
  border-bottom: 0.001rem solid rgb(238, 238, 238);
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
      font-size: 0.16rem;
      color: rgb(49, 49, 49);
    }
    .titleActive {
      font-size: 0.18rem;
      color: rgb(49, 49, 49);
    }
    .head_titleA {
      text-align: center;
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.16rem;
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
.course_info {
  width: 100%;
  height: 1.15rem;
  background-color: white;
  padding: 0.15rem;
  box-sizing: border-box;
  .info_title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;
    .van-icon {
      font-size: 0.2rem;
    }
  }
  .info_price {
    font-size: 0.19rem;
    color: #eb6100;
    margin-top: 0.05rem;
  }
  .info_classify {
    color: #8c8c8c;
    margin-top: 0.1rem;
  }
  .info_time {
    color: #eb6100;
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
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
      }
      span {
        width: 100%;
        text-align: center;
        margin-top: 0.1rem;
        font-size: 0.14rem;
        color: #595959;
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
  height: 1rem;
  background-color: white;
  margin-top: 0.15rem;
  padding: 0.1rem;
  box-sizing: border-box;
  > .title {
    font-size: 0.16rem;
  }
  > .font {
    margin-top: 0.1rem;
    text-indent: 0.2rem;
  }
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
      color: #595959;
      font-size: 0.12rem;
      line-height: 0.3rem;
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
  padding: 0.1rem 0.1rem 0.5rem 0.1rem;
  box-sizing: border-box;

  .comment_wrapper {
    width: 100%;
    padding: 0.1rem;
    box-sizing: border-box;
    .comment_slide {
      width: 100%;
      height: 0.6rem;
      margin-top: 0.1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .slide_top {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .slide_left {
          // width: 0.25rem;
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          .slide_center {
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            .slideCenter_top {
              width: 100%;
              span {
                font-size: 0.15rem;
              }
            }
          }
          img {
            width: 0.25rem;
            height: 0.25rem;
            border-radius: 50%;
            margin-right: 0.1rem;
          }
        }

        .slide_right {
          color: gray;
          font-size: 0.1rem;
        }
      }
      .slideCenter_bottom {
        width: 100%;
        height: 50%;
        span {
          margin-left: 0.3rem;
          font-size: 0.12rem;
          color: #999999;
        }
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
.wsy_price {
  color: red;
  font-size: 0.18rem;
  > img {
    width: 0.1rem;
    height: 0.1rem;
  }
}
.wsy_bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: #eb6100;
  color: #fff;
}
.emit {
  width: 100%;
  height: 0.6rem;
}
</style>
