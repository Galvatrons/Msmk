<template>
  <div class="wsy_box">
    <div class="wsy_main" ref="scrollBox">
      <div class="wsy_scrollBox">
        <div class="yz_search_head">
          <div class="back_icon">
            <van-icon name="arrow-left" @click="onBack" />
          </div>
          <div class="search_input">
            <input type="text" v-model="searchText" @input="onInput()" placeholder="请输入内容" />
          </div>
          <div class="yz_cancel" v-show="!show" @click="onCancel">取消</div>
          <div class="yz_cancel" v-show="show" @click="onSearch">搜索</div>
        </div>
        <div
          class="yz_history_container"
          style="background:#F8F8F8;padding:0 .15rem;"
          v-show="!show"
        >
          <div class="history_title">
            <span>历史搜索</span>
            <div class="yz_remove" @click="onRemove">
              <van-icon name="delete" />
            </div>
          </div>
          <div class="history_item_wrapper">
            <span
              class="history_item"
              v-for="(item, index) in history"
              :key="index"
              @click="search(item)"
            >{{ item }}</span>
          </div>
        </div>
        <div class="yz_history_container" style="background:#F8F8F8;" v-show="show">
          <div
            class="wsy_ii_item"
            @click="ToCourseDetail(item.id,item.course_type)"
            v-for="(item,index) in search_list"
            :key="index"
          >
            <p>{{ item.title }}</p>
            <div class="wsy_ii_time">
              <p>共{{ item.total_periods }}课时</p>
            </div>
            <div class="wsy_ii_teacher" v-for="(it,i) in item.teachers_list" :key="i">
              <img :src="it.teacher_avatar" />
              <p>{{ it.teacher_name }}</p>
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
              v-show="item.has_buy != 0"
              class="wsy_flag_img"
              src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png"
              alt
            />
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
      searchText: "",
      show: false,
      history: JSON.parse(localStorage.getItem("history")) || [],
      search_list: [],
      bs: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.bs = new BetterScroll(this.$refs.scrollBox, {
        probeType: 3,
        click: true
      });
      this.bs.on("scroll",(pos)=>{
        if(pos.y >= 0){
          this.bs.scrollTo(0,0)
        }
      })
    });
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    onCancel() {
      this.$router.go(-1);
    },
    onInput() {
      if (this.searchText.length == 0) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    async onSearch() {
      let { data } = await this.$http.get(
        `/api/app/courseBasis?limit=10&page=1&course_type=0&keywords=${this.searchText}`
      );
      this.search_list = data.data.list;
      console.log(this.search_list);

      var index = this.history.findIndex(item => {
        return item == this.searchText;
      });
      if (index != -1) {
        this.history.splice(index, 1);
      }
      this.history.unshift(this.searchText);
      if (this.history.length > 5) {
        this.history.pop();
      }
      localStorage.setItem("history", JSON.stringify(this.history));
    },
    onRemove() {
      localStorage.removeItem("history");
      this.history = [];
    },
    search(str) {
      this.searchText = str;
      this.show = true;
      this.onSearch();
    },
    //   点击进入课程详情页面
    ToCourseDetail(id, course_type) {
      // window.localStorage.setItem("CourseInfo", JSON.stringify(info));
      this.$router.push({
        path: "/CourseDetail",
        query: {
          id,
          course_type
        }
      });
    }
  },
  filters: {},
  watch: {
    search_list: {
      handler() {
        this.$nextTick(() => {
          this.bs.refresh();
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.wsy_flag_img {
  width: 0.5rem;
  height: 0.4rem;
  position: absolute;
  right: 0.2rem;
  top: 0.4rem;
}
.wsy_box {
  width: 100%;
  height: 100%;
}
.wsy_main {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.wsy_scrollBox {
  width: 100%;
  // height:auto!important; 
  padding-bottom: 80%;margin-bottom: 80%;
  min-height: 101%;
}
.yz_search_head {
  flex-shrink: 1;
  width: 100%;
  height: 0.53rem;
  border-bottom: 0.001rem solid rgb(223, 221, 221);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.1rem;
  box-sizing: border-box;
  background: #ffffff;
  .back_icon {
    .van-icon {
      font-size: 0.2rem;
    }
  }
  .search_input {
    input {
      width: 3rem;
      height: 0.35rem;
      background-color: #e4e7ed;
      border: none;
      outline: none;
      border-radius: 0.2rem;
      padding-left: 0.2rem;
      box-sizing: border-box;
    }
  }
}

.yz_history_container {
  width: 100%;
  background: #fff;
  padding: 0 0.2rem;
  box-sizing: border-box;
  .history_title {
    width: 100%;
    height: 0.43rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    box-sizing: border-box;
    span {
      font-size: 0.16rem;
      font-weight: bold;
    }
    .yz_remove {
      height: 100%;
      line-height: 0.5rem;
      .van-icon {
        font-size: 0.2rem;
      }
    }
  }
  .history_item_wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 0.2rem;
    box-sizing: border-box;
    .history_item {
      background-color: rgb(228, 226, 226);
      padding: 0.03rem 0.1rem;
      font-size: 0.15rem;
      border-radius: 0.16rem;
      margin-right: 0.1rem;
      margin-top: 0.1rem;
    }
  }
}
.wsy_history {
  background: #fff;
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
  font-size: 0.14rem;
}
.wsy_price {
  color: red;
  font-size: 0.14rem;
}
</style>
