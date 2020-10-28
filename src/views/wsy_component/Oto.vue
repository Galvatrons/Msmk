<template>
  <div class="wsy_oto">
    <!-- 头部标题 -->
    <van-nav-bar
      title="一对一辅导"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <!-- 右侧搜索按钮 -->
      <template #right>
        <van-icon name="search" size="0.24rem" color="#666" />
      </template>
      <!-- 左侧返回图标 -->
      <template #left>
        <van-icon name="arrow-left" size="0.24rem" color="#666" />
      </template>
    </van-nav-bar>
    <!-- 老师预约时间选择 -->
    <div class="lwh_time lwh_cont" v-show="lwh_flag == 1">
      <!-- 日历 -->
      <div>
        <p>日期</p>
        <ul>
          <li v-for="(item, index) in lwh_date" :key="index">{{ item }}</li>
        </ul>
        <div>
          <p
            v-for="(item, index) in lwh_arr"
            :key="item.id"
            @click="lwh_index_btn(item, index)"
            :class="{
              lwh_p_default: index == lwh_index,
              lwh_disable: item.dis,
            }"
          >
            <font :class="{ lwh_date_default: item.flag }">{{
              item.date
            }}</font>
            <span :class="{ lwh_span_default: item.flag }">今天</span>
          </p>
        </div>
      </div>
      <!-- 时间选择 -->

      <div>
        <p>时段</p>
        <div>
          <div @click="show = true">
            <span v-show="currentTime != '00:00'">{{ currentTime }}</span>
            <span v-show="currentTime == '00:00'">开始时间</span>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <font>-</font>
          <div @click="shows = true">
            <span v-show="leavetime != '00:00'">{{ leavetime }}</span>
            <span v-show="leavetime == '00:00'">结束时间</span>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 底部重置按钮 -->
    <div class="lwh_btn" v-show="lwh_flag != 0">
      <button>重置</button>
      <button>确认</button>
    </div>
    <!-- 开始时间 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '45%' }">
        
      <van-datetime-picker v-model="currentTime" @cancel="show=false" type="time" @confirm="btn"  />
    </van-popup>
    <!-- 结束时间 -->
    <van-popup v-model="shows" position="bottom" :style="{ height: '45%' }">
      <van-datetime-picker
        v-model="leavetime"
        type="time"
        @confirm="lwh_confirm"
        @cancel="shows=false"
    /></van-popup>
    <div class="wsy_scroll" ref="scrollBox">
      <div class="scrollBox">
        <!-- 头部条件选择 -->
        <div class="lwh_tit">
          <p :class="{ lwh_default: lwh_flag == 1 }" @click="lwh_btn(1)">
            选择上课时间
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMwNkZFMUNDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMwNkZFMURDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOThBNjEyRENCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOThBNjEyRUNCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvL0oBIAAACESURBVHjaYnTN/W/OwMDAw0Aa+MsCJNYCsTSJGhmYgDiGgXTwHKTxABAnkKjRlQnKWAjEHURq8gbiq0xIApVAvIWApnog3gbzIzLwBeK7ODStAuIm5MBBB1ZA/AtN7CwQh6OHKjp4BcQOSPxvQOyMLTqwgeNAXAAKdiB2AuKP6AoAAgwAZxMVhCzcUGAAAAAASUVORK5CYII="
              alt=""
            />
          </p>
          <p :class="{ lwh_default: lwh_flag == 2 }" @click="lwh_btn(2)">
            选择老师条件
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMwNkZFMUNDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMwNkZFMURDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOThBNjEyRENCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOThBNjEyRUNCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvL0oBIAAACESURBVHjaYnTN/W/OwMDAw0Aa+MsCJNYCsTSJGhmYgDiGgXTwHKTxABAnkKjRlQnKWAjEHURq8gbiq0xIApVAvIWApnog3gbzIzLwBeK7ODStAuIm5MBBB1ZA/AtN7CwQh6OHKjp4BcQOSPxvQOyMLTqwgeNAXAAKdiB2AuKP6AoAAgwAZxMVhCzcUGAAAAAASUVORK5CYII="
              alt=""
            />
          </p>
        </div>
        <!-- 预约老师条件 -->
        <div class="lwh_term lwh_cont" v-show="lwh_flag == 2">预约老师条件</div>
        <!-- 全部老师选择 -->
        <div class="lwh_cont" v-show="lwh_flag == 0">
          <div class="wsy_item" v-for="(item, index) in lwh_list" :key="index">
            <div>
              <img :src="item.img" />
              <div>
                <p>
                  {{ item.cont }}
                  <span>{{ item.type }}</span>
                </p>
                <p>{{ item.age }}年教龄</p>
              </div>
            </div>
            <div>关注</div>
          </div>
          <div class="lwh_cont_foot">没有更多了</div>
        </div>
      </div>
    </div>
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
      lwh_list: [
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
      ],
      lwh_flag: 1,
      lwh_date: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      lwh_arr: [],
      lwh_index: null,
      show: false,
      shows: false,
      currentTime: "开始时间",
      leavetime: "结束时间",
    };
  },
  created() {},
  mounted() {
    this.lwh_btn_data();
    this.$nextTick(() => {
      this.lwh_bsBox();
    });
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
    onClickRight() {
      this.$router.push("/search");
    },
    // 滑动事件
    lwh_bsBox() {
      setTimeout(() => {
        this.bs = new BetterScroll(this.$refs.scrollBox, {
          probeType: 3,
          click: true,
        });
        // 下滑禁用
        this.bs.on("scroll", (pos) => {
          if (pos.y >= 0) {
            this.bs.scrollTo(0, 0);
          }
        });
      }, 200);
    },

    lwh_btn(index) {
      if (this.lwh_flag == 1 && index == 1) {
        this.lwh_flag = 0;
      } else if (this.lwh_flag == 2 && index == 2) {
        this.lwh_flag = 0;
      } else {
        this.lwh_flag = index;
      }
    },
    // 时间获取
    lwh_btn_data() {
      let date = new Date();
      let num = 0;
      for (let index = -2; index < 12; index++) {
        if (this.lwh_dates(index) == date.getDate()) {
          this.lwh_arr.push({
            date: this.lwh_dates(index),
            flag: true,
            id: index,
          });
          num = index;
        } else {
          this.lwh_arr.push({
            date: this.lwh_dates(index),
            flag: false,
            id: index,
          });
        }
      }
      this.lwh_arr.map((i) => {
        if (i.id < num) {
          i.dis = true;
        }
      });
      console.log(this.lwh_arr);
    },
    lwh_dates(num) {
      let date = new Date();
      date.setDate(date.getDate() + num);
      return date.getDate();
    },
    lwh_index_btn(item, index) {
      if (item.dis) {
        return false;
      } else {
        this.lwh_index = index;
      }
    },
    lwh_confirm(val) {
     
      this.leavetime = val;
      this.shows=false

    },
    btn(value) {
  
      this.currentTime = value;
      this.show=false
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.wsy_oto {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > .wsy_scroll {
    flex: 1;
    background: #f0f2f5;
    overflow: hidden;
  }
}
.scrollBox {
  width: 100%;
  min-height: 101%;
  position: relative;
}
.NavBar {
  color: #5a5a5a;
}
.lwh_tit {
  width: 100%;
  display: flex;
  > p {
    width: 50%;
    height: 0.44rem;
    text-align: center;
    background: #fff;
    line-height: 0.44rem;
    > img {
      width: 0.1rem;
      margin-bottom: 0.03rem;
    }
  }
}
.lwh_cont {
  width: 100%;
  padding: 0 0.15rem;
  box-sizing: border-box;
}
.wsy_item {
  width: 100%;
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
.lwh_cont_foot {
  width: 100%;
  height: 0.26rem;
  text-align: center;
  line-height: 0.26rem;
  color: #969799;
  font-size: 0.14rem;
}
.lwh_time {
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 1rem;
  left: 0;
  background: #f0f2f5;
  box-sizing: border-box;
  padding: 0 0.1rem;
  z-index: 2;
  > div:nth-of-type(1) {
    width: 100%;
    height: 1.95rem;
    background: #fff;
    > p {
      width: 100%;
      box-sizing: border-box;
      padding: 0.15rem 0 0.1rem 0.1rem;
      font-size: 0.12rem;
    }
    > ul {
      width: 100%;
      height: 0.24rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 0.12rem;
    }
    > div {
      width: 100%;
      height: 1.32rem;
      box-sizing: border-box;
      padding: 0.1rem 0 0 0;
      display: flex;
      flex-wrap: wrap;
      > p {
        width: 14.28%;
        height: 0.61rem;
        text-align: center;
        line-height: 0.61rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        > font {
          width: 0.33rem;
          height: 0.33rem;
          display: block;
          text-align: center;
          line-height: 0.33rem;
        }
        > span {
          font-size: 0.14rem;
          color: #b7b7b7;
          position: absolute;
          bottom: -0.08rem;
          left: 0.12rem;
          display: none;
        }
        > .lwh_span_default {
          height: 0.16rem;
          line-height: 0.16rem;
          display: block;
        }
      }
      > .lwh_p_default {
        > font {
          background: #eb6100;
          color: #fff;
          border-radius: 50%;
        }
      }
      > .lwh_disable {
        > font {
          color: #b7b7b7;
        }
      }
    }
  }
  > div:nth-of-type(2) {
    width: 100%;
    height: 0.96rem;
    background: #fff;
    margin-top: 0.1rem;
    > p {
      width: 100%;
      box-sizing: border-box;
      padding: 0.15rem 0 0.1rem 0.1rem;
      font-size: 0.12rem;
    }
    > div {
      width: 100%;
      padding: 0 0.1rem;
      box-sizing: border-box;
      align-items: center;
      height: 0.36rem;
      display: flex;
      justify-content: space-between;
      > div {
        width: 1.5rem;
        height: 0.25rem;
        border: 0.01rem solid #b7b7b7;
        border-radius: 0.03rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span {
          text-align: center;
          font-size: 0.14rem;
          display: block;
          width: 1.13rem;
          height: 0.22rem;
          line-height: 0.22rem;
          color: #666;
          background: rgb(235, 235, 228);
        }
        > img {
          width: 0.14rem;
          height: 0.14rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
}
.lwh_btn {
  width: 100%;
  height: 0.45rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 3;
  > button {
    width: 50%;
    height: 100%;
    border: none;
    background: #eb6100;
    color: #fff;
  }
  > button:nth-of-type(1) {
    background: #fff;
    color: #eb6100;
  }
}
.lwh_term {
  width: 100%;

  top: 0.53rem;
  left: 0;
  position: absolute;
  background: #fff;
}
.lwh_default {
  color: #eb6100;
}
.lwh_default > img {
  transform: rotate(180deg);
  margin: 0;
  transition: all 0.1s;
}
.lwh_date_default {
  background: #ebeefe;
  color: #eb6100;
  border-radius: 50%;
}
// .lwh_popup {
//   width: 100%;
//   > div {
//     width: 100%;
//     height: 0.45rem;
//     align-items: center;
//     display: flex;
//     box-sizing: border-box;
//     padding: 0 0.1rem;
//     justify-content: space-between;
//     border-bottom: 0.01rem solid #ebeefe;
//     > span {
//       color: #eb6100;
//     }
//   }
// }
</style>
