<template>
  <div class="wsy_box">
    <div class="wsy_scroll" ref="scrollBox">
      <div class="scrollBox">
        <div class="wsy_header">
          <div class="wsy_top">
            <van-icon name="arrow-left" @click="onClickLeft" />
            <p>讲师详情</p>
            <span></span>
          </div>
        </div>
        <div class="wsy_teacher_info">
          <div class="wsy_item">
            <div>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg"
              />
              <div>
                <p>
                  马学斌
                  <span>M10</span>
                </p>
                <p>30年教龄</p>
              </div>
            </div>
            <div @click="attentionTeacher()">关注</div>
          </div>
        </div>
        <div class="wsy_tab">
          <van-tabs v-model="activeName">
            <!-- 讲师介绍区域 -->
            <van-tab title="讲师介绍" name="a">
              <ul class="introduce">
                <li>
                  <span>教学年龄</span>
                  <font>30年</font>
                </li>
                <li>
                  <span>授课价格</span>
                  <font>400学习币</font>
                </li>
                <li>
                  <span>老师简介</span>
                  <font class="font">
                    杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
                    特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
                  </font>
                </li>
              </ul>
            </van-tab>
            <!-- 讲师介绍区域 -->
            <!-- 主讲课程区域 -->
            <van-tab title="主讲课程" name="b">
              <ul class="masterCourse">
                <li v-for="index in 7" :key="index" @click="onClickTeach">
                  <div class="wsy_ii_item" @click="ToCourseDetail()">
                    <p>
                      每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题
                    </p>
                    <div class="wsy_ii_time">
                      <p>共一课时</p>
                    </div>
                    <div class="wsy_ii_teacher">
                      <img
                        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg"
                      />
                      <p>杨德胜</p>
                    </div>

                    <div class="wsy_ii_info">
                      <span>1000人已报名</span>
                      <span class="wsy_good">免费</span>
                      <!-- <span class="wsy_price">
                    <img
                      src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                      alt
                    />

                    <span>1.00</span>
                      </span>-->
                    </div>
                    <img
                      class="wsy_flag_img"
                      src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png"
                      alt
                    />
                  </div>
                </li>
              </ul>
            </van-tab>
            <!-- 主讲课程区域 -->
            <!-- 学员评价区域 -->
            <van-tab title="学员评价" name="c">
              <div class="wsy_empty">
                <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
                <span>暂无评论</span>
              </div>
            </van-tab>
            <!-- 学员评价区域 -->
          </van-tabs>
        </div>
      </div>
    </div>
    <div class="wsy_bottom">立即预约</div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      bs: null,
      activeName: "a",
      teacherId: 0,
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.bs = new BetterScroll(this.$refs.scrollBox, {
          probeType: 2,
          click: true,
        });
      }, 1500);
    });
    this.teacherId = this.$route.query.id;
    this.getTeacherInfo(this.teacherId);
  },
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.back(1);
    },
    // 获取老师详情
    async getTeacherInfo(id) {
      let data = await this.$http.get(`/api/app/teacher/info/${id}`);
      console.log(data);
    },
    onClickTeach(){
        this.$router.push("/yz_courseDetail")
    }
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.wsy_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  > .wsy_scroll {
    background: #f0f2f5;
    flex: 1;
    overflow: hidden;
    > .scrollBox {
      width: 100%;
      min-height: 101%;
    }
  }
}
// 头部区域样式
.wsy_header {
  width: 100%;
  height: 1rem;
  background: -webkit-linear-gradient(top, #63b5fd, #5a9df2, #4f7fe4);
  > .wsy_top {
    width: 100%;
    height: 0.46rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    box-sizing: border-box;
    > p {
      font-size: 0.2rem;
    }
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
.wsy_teacher_info {
  width: 100%;
  padding: 0.1rem 0.12rem;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 0.2rem;
}
.wsy_item {
  position: absolute;
  top: -0.6rem;
  left: 0.12rem;
  right: 0.12rem;
  margin-top: 0.1rem;
  height: 0.8rem;
  border-radius: 0.05rem;
  display: flex;
  background: #fff;
  padding: 0 0.15rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > :nth-child(2) {
    width: 0.6rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    border-radius: 0.2rem;
    background: #ebeefe;
    color: #eb6100;
  }
  > :nth-child(1) {
    display: flex;
    align-items: center;
    > img {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
    > div {
      width: 1rem;
      height: 0.4rem;
      margin-left: 0.15rem;
      // flex: 1;
      > p {
        width: 1rem;
        margin: 0.01rem;
        > span {
          color: red;
          font-size: 0.12rem;
          margin-left: 0.1rem;
        }
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
}
.introduce {
  width: 100%;
  padding: 0.2rem;
  font-size: 0.12rem;
  color: #8c8c8c;
  box-sizing: border-box;
  background: #fff;
  > li {
    margin-bottom: 0.2rem;
    > span {
      margin-right: 0.2rem;
    }
    > font {
      line-height: 0.4rem;
    }
  }
  .font {
    text-indent: 0.4rem;
  }
}
.masterCourse {
  width: 100%;
  padding: 0.15rem;
  box-sizing: border-box;
  background: #fff;
  padding-bottom: 1.5rem;
  > li {
    margin-bottom: 0.2rem;
    width: 100%;
    height: 2rem;
    border-radius: 0.04rem;
    border: 0.01rem solid rgb(238, 238, 238);
    background: #fff;
    box-shadow: 0 0 0.01rem 0.01rem rgb(238, 238, 238);
  }
}
.wsy_ii_item {
  position: relative;
  width: 100%;
  height: 2rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  > :nth-child(1) {
    width: 3.5rem;
    padding-top: 0.2rem;
    margin: 0;
  }
}
.wsy_ii_time {
  display: flex;
  align-items: center;
  height: 0.3rem;
  line-height: 0.3rem;
  > p {
    margin: 0;
    font-size: 0.1rem;
    color: #8c8c8c;
  }
}
.wsy_ii_teacher {
  width: 100%;
  height: 0.7rem;
  display: flex;
  align-items: center;
  font-size: 0.12rem;
  color: #8c8c8c;
  > img {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    margin-right: 0.1rem;
  }
}
.wsy_ii_info {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.01rem rgb(238, 238, 238) solid;
  > :nth-child(1) {
    font-size: 0.12rem;
    color: #8c8c8c;
  }
  img {
    width: 0.2rem;
    height: 0.2rem;
  }
}
.wsy_good {
  color: #44a426;
  font-size: 0.18rem;
}
.wsy_price {
  color: red;
  font-size: 0.18rem;
}
.wsy_flag_img {
  width: 0.5rem;
  height: 0.4rem;
  position: absolute;
  right: 0.2rem;
  top: 0.8rem;
}
.wsy_tab {
  width: 100%;
}
.van-tabs {
  height: 100%;
}
.wsy_empty {
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  > img {
    width: 1rem;
    height: 1rem;
  }
  > span {
    font-size: 0.16rem;
    color: #8c9abc;
  }
}
</style>
