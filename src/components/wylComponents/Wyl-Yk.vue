<template>
  <div>
    <van-nav-bar title="约课订单" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" @click="onTitle(active)">
      <van-tab v-for="(item, index) in title" :title="item.title" :key="index">
      </van-tab>
    </van-tabs>
    <div class="list_container">
      <div>
        
        <div class="wsy_empty">
                <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
                <span>暂无订单</span>
              </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Kc from "../wylComponents/components/Zj-type";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      title: [
        {
          title: "全部订单",
          id: 0,
        },
        {
          title: "待支付",
          id: 1,
        },
        {
          title: "已完成",
          id: 2,
        },
        {
          title: "已取消",
          id: 3,
        },
      ],
      active: 0,
      yz_bs: null,
    };
  },
  mounted() {
    // this.getData(this.active);

    this.$nextTick(() => {
      this.yz_bs = new BetterScroll(".list_container", {
        probeType: 2,
        click: true,
      });
      this.yz_bs.on("scroll", (pos) => {});
    });
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.back(1)
    },
    // 点击标题
    onTitle() {
      console.log(this.active);
      // this.getData(this.active);
    },
    // 获取列表数据
    // async getData(id) {
    //   let { data } = await this.$http.post("/api/app/myOrder", {
    //     limit: 10,
    //     order_status: this.active,
    //     order_type: "2",
    //     page: 1,
    //   });
    //   this.list = data.data.list;
    //   if (this.list.length == 0) {
    //     this.show = true;
    //   } else {
    //     this.show = false;
    //   }
    //   console.log(this.list);
    // },
    // 点击进入订单详情
    onOrderDetail(item) {
      console.log(item.id);
      this.$router.push({
        path: "/yzOrderDetail",
        query: { id: item.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.picture {
  width: 2rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
}
.sxlh6 {
  text-align: center;
  font-size: 0.18rem;
  margin-top: 0.1rem;
  color: gray;
  /* font-weight: 800; */
}
.registration {
  width: 0.8rem;
  height: 0.3rem;
  background: #eb6100;
  margin-left: 1.5rem;
  margin-top: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.14rem;
}
.list_container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  > div {
    width: 100%;
    height: 101%;
    .list_wrapper {
      width: 100%;
      .list_slide {
        width: 95%;
        // height: 1.3rem;
        // box-shadow: 0.2px 0.1px 0.1px 0.1px rgb(228, 228, 228);
        border: 0.01rem solid rgb(228, 228, 228);
        margin: 0.1rem auto;
        padding: 0.1rem;
        box-sizing: border-box;
        .list_number {
          width: 100%;
          height: 0.3rem;
          display: flex;
          padding: 0.02rem 0;
          align-items: center;
          justify-content: space-between;
          font-size: 0.13rem;
          border-bottom: 0.01rem solid rgb(238, 238, 238);
          .deal {
            color: orange;
          }
        }
        .list_title {
          font-size: 0.14rem;
          margin-top: 0.1rem;
        }
        .list_time {
          font-size: 0.13rem;
          margin-top: 0.05rem;
          color: gray;
        }
        .list_payment {
          font-size: 0.13rem;
          margin-top: 0.05rem;
          color: gray;
          display: flex;
          img {
            width: 0.2rem;
            vertical-align: middle;
          }
          div {
            display: flex;
            align-items: center;
            font-size: 0.15rem;
            color: black;
          }
          // span {
          //   font-size: 0.15rem;
          //   color: black;
          // }
        }
        .joinStudy {
          width: 100%;
          height: 0.26rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          button {
            width: 0.7rem;
            height: 0.3rem;
            font-size: 0.14rem;
            color: orange;
            border: 0.001rem solid orange;
            background-color: white;
            border-radius: 0.2rem;
          }
        }
      }
    }
  }
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
