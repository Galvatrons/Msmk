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
              <img :src="teacherInfo.avatar" />
              <div>
                <p>
                  <span>{{ teacherInfo.real_name }}</span>
                  <span>M10</span>
                </p>
                <p>30年教龄</p>
              </div>
            </div>
            <div v-show="attentionFlag == 2" @click="attentionTeacher()">关注</div>
            <p v-show="attentionFlag == 1" @click="attentionTeacher()">已关注</p>
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
                <li v-for="(item,index) in mainCourse" :key="index">
                  <div class="wsy_ii_item" @click="ToCourseDetail()">
                    <p>每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题</p>
                    <div class="wsy_ii_time">
                      <!-- <p>共{{ item. }}课时</p> -->
                    </div>
                    <div
                      class="wsy_ii_teacher"
                      v-for="(item,index) in item.teachers_list"
                      :key="index"
                    >
                      <img :src="item.teacher_avatar" />
                      <p>{{ item.teacher_name }}</p>
                    </div>

                    <div class="wsy_ii_info">
                      <span>{{ item.sales_num }}人已报名</span>
                      <span class="wsy_good" v-show="item.price == 0">免费</span>
                      <span class="wsy_price" v-show="item.price != 0">
                        <img
                          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                        />
                        <span>{{ item.price | toFixed }}</span>
                      </span>
                    </div>
                    <img
                      v-show="item.is_buy != 0"
                      class="wsy_flag_img"
                      src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png"
                    />
                  </div>
                </li>
              </ul>
            </van-tab>
            <!-- 主讲课程区域 -->
            <!-- 学员评价区域 -->
            <van-tab title="学员评价" name="c">
              <div class="wsy_empty" v-show="CourseComment.length == 0">
                <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
                <span>暂无评论</span>
              </div>
            </van-tab>
            <!-- 学员评价区域 -->
          </van-tabs>
        </div>
      </div>
    </div>
    <div class="wsy_bottom" @click="toOtoPlan()">立即预约</div>
  </div>
</template>

<script>
// teacher:
// avatar: "http://120.53.31.103:84/uploads/image/2020-05-27/BwPKN7CZyHgF8rLypp2dMH1XBkv8zgkRYsXN5UtF.jpeg"
// id: 45
// introduction: "不肯能"
// real_name: "杨岭"
import BetterScroll from "better-scroll";
import { Toast } from "vant";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      bs: null,
      activeName: "a",
      teacherId: 0,
      attentionFlag: 1,
      teacherInfo: {},
      mainCourse: [],
      CourseComment:[]
    };
  },
  created() {},
  mounted() {
    this.teacherId = this.$route.query.id;
    this.getTeacherInfo(this.teacherId);
    this.getmainCourse();
    this.getCourseComment();
    this.$nextTick(() => {
      setTimeout(() => {
        this.bs = new BetterScroll(this.$refs.scrollBox, {
          probeType: 3,
          click: true
        });
        this.bs.on("scroll", pos => {
          if (pos.y >= 0) {
            this.bs.scrollTo(0, 0);
          }
        });
      }, 500);
    });
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
      // let { data } = await this.$http.get(`/api/app/teacher/info/${id}`);
      let { data: dataB } = await this.$http.get(`/api/app/teacher/${id}`);
      // console.log(data.data);
      console.log(dataB.data);
      this.attentionFlag = dataB.data.flag;
      console.log(this.attentionFlag);
      
      this.teacherInfo = dataB.data.teacher;
    },
    // 关注讲师
    async attentionTeacher() {
      let data = await this.$http.get(
        `/api/app/teacher/collect/${this.teacherId}`
      );
      console.log(data.data);
      if (data.data.code == 200) {
        Toast.fail(data.data.msg);
        this.getTeacherInfo(this.teacherId);
      }
    },
    // 获取主讲课程数据
    async getmainCourse() {
      let { data } = await this.$http.post("/api/app/teacher/mainCourse", {
        limit: 10,
        page: 1,
        teacher_id: this.teacherId
      });
      this.mainCourse = data.data.list;
      console.log(this.mainCourse);
    },
    // 获取课程评价
    async getCourseComment() {
      let { data } = await this.$http.post("/api/app/teacher/comment", {
        limit: 10,
        page: 1,
        teacher_id: this.teacherId
      });
     this.CourseComment = data.data.comment.list
    },
    // 跳转到预约课程页面
    toOtoPlan() {
      this.$router.push(`/wsyOto-plan?id=${this.teacherId}`);
    }
  },
  filters: {},
  computed: {},
  watch: {
    activeName() {
      this.$nextTick(() => {
        this.bs.refresh();
      });
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
    /* 关注按钮样式 */
    width: 0.6rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    border-radius: 0.2rem;
    background: #ebeefe;
    color: #eb6100;
  }
  > p {
    width: 0.6rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    color: #8c8c8c;
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
        width: 1.5rem;
        margin: 0.01rem;
        :nth-child(2){
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
