<template>
  <div>
    <div class="yz_list_container">
      <div>
        <div
          class="yz_list_slide"
          v-for="(item, index) in showData"
          :key="index"
          @click="onClickDetail(item)"
        >
          <div class="yz_list_slide_title">
            {{ item.title }}
          </div>
          <div class="yz_list_slide_time">
            <van-icon name="clock-o" />
            <div class="yz_time_date">{{ item.time }}</div>
            <div class="yz_gang">|</div>
            <div class="yz_time_hour">
              共<span>{{ item.total_periods }}</span
              >课时
            </div>
          </div>
          <div class="yz_list_slide_user">
            <div class="yz_user_image">
              <img :src="item.teachers_list[0].teacher_avatar" alt="" />
            </div>
            <div class="yz_user_name">
              {{ item.teachers_list[0].teacher_name }}
            </div>
            <img
              src="../../assets/img/apply.png"
              alt=""
              v-show="item.apply"
              class="yz_img_apply"
            />
          </div>
          <div class="yz_list_slide_apply">
            <div class="yz_apply_peo">
              <span>{{ item.sales_num }}</span
              >人已报名
            </div>
            <div
              :class="
                item.price === '免费' ? 'yz_apply_price' : 'yz_apply_price_true'
              "
            >
              {{ item.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      courseList: [],
      yz_bs: null,
      appCourseType: [],
      newData: [],
    };
  },
  methods: {
    onClickDetail(item) {
      console.log(item.teachers_list[0].teacher_avatar);
      console.log(item.teachers_list[0].teacher_name);
      this.$router.push("/yz_courseDetail");
      var obj = {
        id: item.id,
        teacher_avatar: item.teachers_list[0].teacher_avatar,
        teacher_name: item.teachers_list[0].teacher_name,
      };
      localStorage.setItem("couDetailId", JSON.stringify(obj));
    },
  },
  mounted() {
    console.log(this.filterId);
    window.onscroll = () => {
      var clientHeight = document.documentElement.clientHeight;
      // console.log(clientHeight); // 可视区域高度
      var scrollHeiht = document.documentElement.scrollHeight;
      // console.log(scrollHeiht); // 滚动视图的高度
      var scrollTop = document.documentElement.scrollTop;
      // console.log(scrollTop);
      if (scrollHeiht - clientHeight - scrollTop <= 50) {
        setTimeout(() => {
          console.log(this.list.slice(2, 4));
          var newList = this.list.slice(2, 4);
          newList.forEach((element) => {
            console.log(element);
            this.list.push(element);
          });
          console.log(this.list);
        }, 1000);
      }
    };
    // 滑动插件
    this.$nextTick(() => {
      this.yz_bs = new BetterScroll(".yz_list_container", {
        probeType: 2,
        click: true,
      });
      // 上滑禁止
      this.yz_bs.on("scroll", (pos) => {});
    });
    // console.log(this.filterId);
    // 特色课列表数据
    this.$http.get("/api/app/courseBasis?page=1&limit=10&").then((res) => {
      this.courseList = res.data.data.list;
      this.newData = res.data.data.list;
      console.log(this.courseList);
      this.courseList.forEach((element) => {
        if (element.price == 0) {
          element.price = "免费";
        }
      });
    });
  },
  watch: {},
  computed: {
    showData() {
      var temp = [];
      this.courseList.forEach((element) => {
        if (element.course_type == this.filterId) {
          temp.push(element);
        } else if (this.filterId == 0) {
          temp = this.newData;
        }
      });
      console.log(temp);
      return temp;
    },
    filterId() {
      return this.$store.state.filterId;
    },
  },
};
</script>

<style lang="scss" scoped>
.yz_list_container {
  width: 100%;
  height: 6.68rem;
  background-color: #f0f2f5;
  padding: 0.15rem;
  box-sizing: border-box;
  overflow: hidden;
  > div {
    width: 100%;
    min-height: 275%;
    padding-top: 0.1rem;
    padding-bottom: 0.2rem;
  }
  .yz_list_slide {
    width: 100%;
    height: 2rem;
    background-color: white;
    border-radius: 0.05rem;
    padding: 0 0.18rem;
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 0.17rem;
    .yz_list_slide_title {
      font-size: 0.18rem;
      margin-top: 0.3rem;
    }
    .yz_list_slide_time {
      font-size: 0.14rem;
      color: gray;
      width: 100%;
      height: 0.2rem;
      display: flex;
      align-items: center;
      margin-top: 0.06rem;
      .yz_time_date {
        margin-left: 0.05rem;
      }
      .yz_gang {
        margin-left: 0.1rem;
      }
      .yz_time_hour {
        margin-left: 0.1rem;
      }
    }
    .yz_list_slide_user {
      width: 100%;
      height: 0.7rem;
      border-bottom: 0.001rem solid rgb(238, 238, 238);
      display: flex;
      align-items: center;
      position: relative;
      .yz_user_image {
        width: 0.3rem;
        height: 0.3rem;
        background-color: skyblue;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .yz_user_name {
        font-size: 0.14rem;
        color: gray;
        margin-left: 0.1rem;
      }
      .yz_img_apply {
        position: absolute;
        right: 0;
      }
    }
    .yz_list_slide_apply {
      width: 100%;
      height: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .yz_apply_peo {
      font-size: 0.15rem;
      color: gray;
    }
    .yz_apply_price {
      color: #78bd62;
      font-size: 0.17rem;
    }
    .yz_apply_price_true {
      color: orange;
      font-size: 0.2rem;
    }
  }
}
</style>
