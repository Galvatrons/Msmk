<template>
  <div class="wsy_box">
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />
    <div class="wsy_content">
      <div
        class="wsy_ii_item"
        @click="ToCourseDetail(item)"
        v-for="(item,index) in list"
        :key="index"
      >
        <p>{{ item.title }}</p>
        <div class="wsy_ii_time">
          <p>共{{ item.section_num | periods }}课时</p>
        </div>
        <div class="wsy_ii_teacher">
          <img :src="item.teachersAvatar" />
          <p>{{ item.teachers }}</p>
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
        <!-- <img
          v-show="item.has_buy != 0"
          class="wsy_flag_img"
          src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png"
          alt
        />-->
        <van-icon
          class="wsy_star"
          name="star"
          color="#FC5500"
          size="20"
          @click.stop="course(item.collect_id)"
        />
      </div>
      <p class="wsy_warning">没有更多了</p>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getCollectList();
  },
  methods: {
    //   点击进入课程详情页面
    ToCourseDetail(info) {
      window.localStorage.setItem("CourseInfo", JSON.stringify(info));
      this.$router.push({ name: "CourseDetail", params: info });
      console.log(info);
    },
    async getCollectList() {
      let { data } = await this.$http.get(
        "/api/app/collect?page=1&limit=10&type=1&"
      );
      this.list = data.data.list;
      console.log(this.list);
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    async course(collect_id) {
      //取消收藏
      let { data } = await this.$http.put(
        `/api/app/collect/cancel/${collect_id}/1`
      );
      if (data.code == 200) {
        Toast(data.msg);
        this.getCollectList();
      }
    }
  },
  filters: {
    periods(val) {
      switch (val) {
        case 0:
          return "零";
          break;
        case 1:
          return "一";
          break;
        case 2:
          return "二";
          break;
        case 3:
          return "三";
          break;
        case 4:
          return "四";
          break;
        case 5:
          return "五";
          break;
        case 6:
          return "六";
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.wsy_box{
  background: #f0f2f5;
}
.wsy_star {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
}
.wsy_content {
  flex: 1;
  padding: 0.1rem 0.12rem;
  > .wsy_item {
    margin-top: 0.1rem;
    width: 100%;
    height: 0.8rem;
    border-radius: 0.05rem;
    display: flex;
    align-items: center;
    justify-content: start;
    background: #fff;
    padding: 0 0.15rem;
    box-sizing: border-box;
    > :nth-child(2) {
      > :nth-child(1) {
        > span {
          color: red;
          font-size: 0.12rem;
          margin-left: 0.1rem;
        }
      }
    }
    > img {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
    > div {
      height: 0.4rem;
      margin-left: 0.15rem;
      flex: 1;
      > p {
        margin: 0.01rem;
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
.wsy_ii_item {
  position: relative;
  width: 100%;
  height: 2rem;
  padding: 0 0.2rem;
  margin-top: 0.1rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0.05rem;
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
  margin-top: 0.15rem;
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
  top: 0.4rem;
}
.wsy_warning{
  text-align: center;
  color: #969799;
  font-size: .12rem;
  margin-top: 0.2rem;
}
</style>