<template>
  <div class="main">
    <div class="header_container">
      <div class="header_wrapper">
        <div class="head_left">
          <van-icon name="arrow-left" @click="onBack" />
        </div>
        <div class="head_title">{{ course.title }}</div>
        <div class="head_icon" @click="onCalendar">
          <van-icon name="calendar-o" size="0.2rem" />
        </div>
      </div>
    </div>
    <div class="study_box">
      <div>
        <div class="yz_progress">
          <span>共{{ course.section_num }}课时</span>
          <div class="progress_wrapper">
            <van-progress
              inactive
              color="#f2826a"
              :percentage="course.progress_rate"
              :show-pivot="false"
            />
          </div>
          <span>已学习{{ course.progress_rate }}%</span>
        </div>
        <div class="playback_wrapper">
          <div
            class="playback_slide"
            v-for="(item, index) in periods"
            :key="index"
            @click="onVideo(item)"
          >
            <div class="slide_top">
              <div class="dian"></div>
              <div class="slide_hui">[回放]</div>
              <span>{{ item.periods_title }}</span>
            </div>
            <div class="slide_center">
              <span v-for="(data, i) in item.teachers" :key="i">{{
                data.teacher_name
              }}</span>
              <span>{{ item.start_play }} - {{ item.end_play }}</span>
            </div>
            <div class="slide_bottom">
              <div>
                <van-progress
                  inactive
                  color="#f2826a"
                  :percentage="item.progress_rate"
                  :show-pivot="false"
                />
              </div>
              <span>已观看{{ item.progress_rate }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="study_bottom">
      <div @click="showPopup">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAE30lEQVRYR7WYXYwTVRTH/+e22x2g0yVoVh9IRGNCiIkPCEGjxkQe/ODFlzUQMDyoaNiklum0sismoyjJMjOdZj8wRCNqDApVNCEGkn3QIMFoEBXF+KIh6wcmfC2702W77dxjLtndlNpu26Xc13s+fnPuOeeeO4SbtCzLiui6voKZtwN4EEBARMeFEN6VK1dOW5ZVquaabgaPZVmarutJZk4AuHXGBxExM/8thOgfGxvzqkHdFCDXdV9n5m0AojU+OE9EO5LJZLZyv+VAjuNsAPA+gLa5os/M50Oh0FrDMH4ul2sZUH9/f7vv+zFN03wppcobY44IKYYiEW1LJpNDLQeyLCus6/oeAAsKhUJC07QJKeUOZjaISKsRKQngVdM0d7UUyPO8xVLKAWbeNG34YKlU2jI5OXlV13WbmV8A0F4JxcyTALamUql9LQMaHBy8pVAoZKWUTxNRpMzwESnlSx0dHWfHx8dVcvcAWFwB9X0kEnkqHo//1RIg27YXAfiIiB4DUA6j7AcAjkopn9M07XKhUFBH9woApaPWBSHEOsMwvmtJlQ0NDd0+MTGxj4gen6uSiGi4vb19Q2dn5+jIyIilckoI8U8oFNqUSCS+bUlj7OvrWxoKhfYw8xNEFK7XWInoaynl1nw+/2s0Gt0opfwjlUqdUE3yhoGy2extpVLpEwD3A6gLoxwysySiY+FweHMikfhzGqIqjNpruA9lMpm7pJT7AaypF5WKfeX8jBBivWEYZ+rpNgTU19e3XAixl4geAhCqZ7R8n5lPEdGLpmmeVAGrp1sXKJPJ3C2lPATgHgCinsHrSpjoZBAE69Pp9O+N6s0FRK7r3qtKm5lXNGpwWk514RPhcHhjIpEYaUa3JpDjOKsBvAVgZTO5Nu18GEDcNM3fmoGpmdTZbHZNEAT7mfnOecAcllJuSafT/zYLUxXIcZz7AHwK4I4mDarufHhqampLb2/v+SZ1Z8X/d2Se560MgmAQwAONGp2eBD8mopeTyeRMr2lU/Tq564Bs296Uz+f3x2KxZcx8gJlXNWBVlfLeYrHY29PTc7kB+TlFZoEymcwqKeUxAKbv++8sXLhwiRDic2ZeTURVy52ZS0T0biQSScXj8bEbhSnPIVXibzPzswAuAnB833disdgKKaUHYG0VZwpG3Wk7TdO80AqYWSDP85YFQXAUwPJpw2oI3xuNRrfn8/lOKeUHAB4tc6rGz51Sykwqlcq3CmYWyHGcZwCoRI7NGGfmKeVUCOHGYrEFo6OjOQCPAFDvKVcI8YZhGFdbCXMNSD3ootHoAIDnq/QcH8AeXddf831/KTO/SUSnNU3zuru71V7LF2UymSXM/AUzq5Gi2ioQ0QE10xSLRe3cuXP+wMBAoVLQtu11RKSeQE3dd2V21JhykBzHUQ3wJwAdFU5UOZeYeUwI8UsQBIl0Ov1jrZC4rqtGC/V0rnth17BxbUwh27bVgH6gQmiciL4BMMzMX/q+/4NlWerCrLl27979ZDgcflhKOe8IMfNxFaH3AGwGoEJ2ipk/UyCRSOTspUuXLtYDKSfs6uoKdXV1zSuvcrkccrlcoIByau5ta2s7VPkkqZIni4ho9ufBvDzPoVQsFseaOm/XdXcxc6rZqbFBcJVDXzUL1M3M6o9FQwN+gyAzYiplPvwPh2MJ5xnUb/8AAAAASUVORK5CYII="
          alt=""
        />
        <span>写评论</span>
      </div>
      <div @click="onCourseDetail">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAACi0lEQVRYR+1Yv4sTURD+Ztc1WbN7igimEsFC8aorhPSCxXGFIIk/GuUUm5w27xASVLaxSG436J6oEfUfSKeFfSoRbSzEKld6FuYsRJOV3ZEniZx4Sd7eu4ND3G553zf7zbw3M2+WgiA4CeAxMx8GYGD08x3Ac9u2r5TL5a9DmO/7x4noFDNnx3BVlhIArygIgpWBGBUSiEgIIRoSHIZhJoqiRwAuKZEng76Q7/tSGU3G/kYsLy4uXpdvnuftcV33GTOfTcEfC5WCOI0xIrovhLgmOY1Gw2bmJwDOM3Map0Z98oeWIM/zDMdxThPRGWbelcaxDbBsGMY7LUHSaLFYNKenp3PZbFY7Qp1O55u2IM2o/EXXFiQjNDMzs8+yLFNHXCaT4W63u6YlSJ6hXC63QERXAWgJks4Q0ZvUaU9Ey0KIbU37VQAHVcNNRDeFEHe2rQ4FQTDPzHcBuAqi3tq2PVcul6UTw0r9AMC8AlcF0v2Vqs1mc2+/3z9gmubI1I3juJfP5z+WSqV4vWXf948R0exW9DIiamvXDhW302D+C5oUrZ0ZoTAMp+I43s/MIy9olmX12u32p1ar9cehnuRx2nVaWlq6YBjGQ2aeUiC/jqJotlqtfh7UIcN13QVmvgVA68ZIRAkzv5CVWqswOo7zFMA5BWdUIMmObB2bvjHKO3W/378H4CIR6SaI1NHV6vZyD2q12lHTNAsALJU9GYVhZinovbYgHREbcf89QfV6/QgRnSAi7S1LkuSDVoQ8z9vtOE59MCiOm3pVdlaeodXUaQ9g2wfFFQByrld61o/ScnLd8sIYBMGc9JqZD4372cDMPcMwXkZRdLlSqawNZ7JCoXCDmW/rtg4AibT/E2rjPaJgEXouAAAAAElFTkSuQmCC"
          alt=""
        />
        <span>课程详情</span>
      </div>
      <div @click="onClickRemove">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAADAUlEQVRIS+2WTWgTQRTH/y9pajWV4geIHsxBUUE96EEUFQ96EvHrUJEq4kFKrZQmO6tCUVcFRXd2EgJVgigi+EFA9KAeRBBF0CIVBLUF8VAselAQ29RYTebJlE1pobXbNsfuaffte++3Mzsz/z8h4CWlnAvgGhFtY2YiItZaPyWiPUKI70HaUJAkk5NMJtcXi8UsgAWlGmb+QUTbhRAvgvShTCYzI5fLrQMwbYyCKDM3ANg0MCxmBtBGREkAfWPU9kcikdfked4TZt4c5MsmmfOcXNdtJ6LVk2wUpPwtKaUWM/OGANMYpOFoOf3M/CrwApkMqVQ7CMtms+Gurq4q8yIWi/2ura0tThQwWq9BmOu6W/yVBSI6ZlnWo4nClFIbtdaXTH04HD4ej8cfmvtBmJRyN4C7JsjMdbZt3yrB0un0tEKhsEZr/U0I0VmKm/8NYH5PT0+74zi/SnHP87Yy8wAAwD4hxM3AMKXULq31bQA/ASw3J4ZSarbW+h2AOUR0yLKsG2WBSSmPArhgmoVCoRWJROJ9KpVaWigUSqM8I4Q4VS7YcQDn/Sleadv2OynlMgAdfuysbdsnp2D432qUUk5N48AamdQ+m5rGsuwzpZSttb7ou4EVQogPnuctAdBpzA8zn7Zt2ykLTEppxPU6EX2pqqra2tjYmPO9ywNmXhgKhQ4nEonHZYEZferu7o7l8/l8S0vL11LTVCo1T2sdjUajn+vr6/8Ghrmuu4OI7g9IAdGBoaf4eHVNSrkTwD3/3Nxr2/adYRLjed4qZn7jN74uhDg4XsiQkV3ybR8qKirWNjc3tw2DZTKZSG9v70fjCowPZOZ4X1/fVcdxdFCo4zihmpqaumKxaFS6GkB3Lpdb5DjOn2Ew8yCl3A/giu+0jAfpYOZPRBTEj4QAGOU20lMBoJ+I4pZlXS597DB3pZSazswnmPkIgJlBRzRCXp6I0pFI5FxTU1PPiDATbG1trc7n8+uJqMH3k7OMQAcAGzv+A8DLcDh8ubKy8pnZIkPr/gEjO6imaFb4ZAAAAABJRU5ErkJggg=="
          alt=""
        />
        <span>移除列表</span>
      </div>
    </div>
    <van-popup v-model="show">
      <div class="comment_wrapper">
        <div class="comment_top">
          <van-icon name="cross" @click="onClose" />
        </div>
        <div class="comment_class">
          <span>星级: </span>
          <div><van-rate v-model="value" size="16px" /></div>
        </div>
        <div class="comment_text">
          <span>内容:</span>
          <textarea v-model="commentValue" id="" cols="35" rows="5"></textarea>
        </div>
        <div class="comment_button">
          <button @click="onIssue">发布</button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      yz_bs: null,
      show: false,
      value: 3,
      commentValue: "",
      id: this.$route.query.id,
      course: {},
      periods: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      console.log(BetterScroll);
      this.yz_bs = new BetterScroll(".study_box", {
        probeType: 2,
        click: true,
      });
      // 上滑禁止
      this.yz_bs.on("scroll", (pos) => {
        // console.log(pos.y);
        if (pos.y) {
        }
      });
    });
    this.getData(); //获取数据
  },
  methods: {
    // 获取数据
    getData() {
      this.$http.get(`/api/app/myStudy/course/${this.id}`).then((res) => {
        // console.log(res.data.data);
        this.course = res.data.data.course;
        console.log(this.course);
        this.periods = res.data.data.periods;
        console.log(this.periods);
      });
    },
    onBack() {
      this.$router.push("/yz_courseDetail");
    },
    onCalendar() {
      this.$router.push("/StudyCalendar");
    },
    // 点击视频
    onVideo(item) {
      console.log(item.video_id);
      console.log(item.id);
      this.$http
        .get(
          `/api/app/getPcRoomCode/course_id=${item.id}/chapter_id=${item.video_id}?`
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.code == 201) {
            Toast(res.data.msg);
          }
        });
    },
    showPopup() {
      this.show = true;
    },
    onClose() {
      this.show = false;
    },
    onIssue() {
      console.log(this.commentValue);
      if (this.commentValue.length == 0) {
        Toast("评价内容 必须填写");
      } else {
        Toast("评价成功");
        this.show = false;
      }
    },
    onCourseDetail() {
      this.$router.push("/yz_courseDetail");
    },
    onClickRemove() {
      Toast.success("成功");
      setTimeout(() => {
        this.$router.push("/Wyl-my-study");
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.study_box {
  width: 100%;
  flex: 1;
  overflow: hidden;
  > div {
    width: 100%;
    min-height: 101%;
  }
}
.header_container {
  width: 100%;
  height: 0.48rem;
  border-bottom: 0.001rem solid rgb(238, 238, 238);
  padding: 0 0.05rem;
  box-sizing: border-box;
  background-color: white;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: 10000;
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
    }
    .head_icon {
      width: 0.27rem;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
.yz_progress {
  width: 100%;
  height: 0.55rem;
  border-bottom: 0.01rem solid rgb(209, 209, 209);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.1rem;
  box-sizing: border-box;
  border-bottom: 0.001rem solid rgb(211, 211, 211);
  span {
    font-size: 0.15rem;
  }
  .progress_wrapper {
    width: 60%;
  }
}
.playback_wrapper {
  width: 100%;
  .playback_slide {
    width: 90%;
    height: 0.9rem;
    border: 0.01rem solid rgb(207, 207, 207);
    margin: 0.15rem auto;
    border-radius: 0.03rem;
    padding: 0.1rem;
    box-sizing: border-box;
    .slide_top {
      width: 100%;
      height: 0.2rem;
      display: flex;
      align-items: center;
      font-size: 0.14rem;
      color: rgb(66, 66, 66);
      .dian {
        width: 0.05rem;
        height: 0.05rem;
        background-color: orange;
        border-radius: 50%;
      }
      .slide_hui {
        color: orange;
        margin-left: 0.15rem;
      }
      span {
        margin-left: 0.1rem;
      }
    }
    .slide_center {
      width: 100%;
      height: 0.2rem;
      display: flex;
      align-items: center;
      margin-top: 0.05rem;
      span {
        margin-left: 0.2rem;
        font-size: 0.13rem;
        color: rgb(82, 82, 82);
      }
    }
    .slide_bottom {
      width: 100%;
      height: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.14rem;
      color: rgb(66, 66, 66);
      margin-top: 0.05rem;
      > div {
        width: 70%;
      }
    }
  }
}
.study_bottom {
  width: 100%;
  height: 0.4rem;
  //   background-color: orange;
  display: flex;
  border-top: 0.001rem solid rgb(236, 236, 236);
  div {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 0.15rem;
    }
    span {
      font-size: 0.14rem;
      color: gray;
    }
  }
}
.van-popup--center {
  border-radius: 0.1rem;
}
.comment_wrapper {
  width: 3.7rem;
  height: 2.75rem;
  background-color: white;
  .comment_top {
    width: 100%;
    height: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 0.1rem;
    box-sizing: border-box;
  }
  .comment_class {
    width: 100%;
    height: 0.6rem;
    // background-color: violet;
    padding-left: 0.2rem;
    box-sizing: border-box;
    display: flex;
    .van-rate {
      margin-top: 0.03rem;
    }
  }
  .comment_text {
    width: 100%;
    display: flex;
    padding-left: 0.2rem;
    box-sizing: border-box;
    textarea {
      margin-left: 0.15rem;
    }
  }
  .comment_button {
    width: 100%;
    text-align: center;
    margin-top: 0.2rem;
    button {
      width: 0.85rem;
      height: 0.28rem;
      border: none;
      background-color: orange;
      color: white;
      font-size: 0.15rem;
    }
  }
}
</style>
