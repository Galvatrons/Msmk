<template>
  <div id="shopping">
    <div class="content">
      <div class="top">约课记录</div>
      <van-tabs v-model="active" @click="onTitle">
        <van-tab
          v-for="(item, index) in title"
          :key="index"
          :title="item.title"
        ></van-tab>
      </van-tabs>
      <div v-show="token">
        <div class="btn_wrapper" v-show="isShow">
          <img src="@/assets/img/a.png" alt="" />
          <div class="hnit" v-show="hnitShow == 1">还没有待上课记录哦</div>
          <div class="hnit" v-show="hnitShow == 2">还没有上课记录哦</div>
          <div class="hnit" v-show="hnitShow == 3">还没有取消上课记录哦</div>
          <div>
            <button v-show="bthShow" @click="onClass">立即约课</button>
          </div>
        </div>
      </div>

      <div class="btn_wrapper" v-show="!token">
        <img src="@/assets/img/a.png" alt="" />
        <div class="hnit">请登陆后查看相关内容</div>
        <div>
          <button @click="onLogin">登陆/注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      title: [
        {
          title: "待上课",
          id: 1,
        },
        {
          title: "已上课",
          id: 2,
        },
        {
          title: "已取消",
          id: 3,
        },
      ],
      list: [],
      isShow: false,
      hnitShow: 1,
      bthShow: true,
      titleId: 1,
      token: sessionStorage.getItem("token"),
      
    };
  },
  mounted() {
    this.getData(this.titleId);

    // console.log(this.token);
  },
  methods: {
    // 点击标题切换
    onTitle(value) {
      console.log(value + 1);
      this.titleId = value + 1;
      this.hnitShow = value + 1;
      if (value + 1 == 3) {
        this.bthShow = false;
      } else {
        this.bthShow = true;
      }
      this.getData(this.titleId);
    },
    // 获取数据
    getData(titleId) {
      this.$http
        .post("/api/app/oto/myInviteCourse/index", {
          limit: 10,
          page: 1,
          type: titleId,
        })
        .then((res) => {
          console.log(res.data.data);
          this.list = res.data.data.list;
          if (this.list.length == 0) {
            this.isShow = true;
          } else {
            this.isShow = false;
          }
        });
    },
    // 点击立即约课
    onClass() {
      this.$router.push("/oto");
    },
    //立即登陆
    onLogin() {
      this.$router.push("/Wyl-Login")
    },
  },
};
</script>

<style lang="scss" scoped>
#id {
  background: rgb(240, 242, 245);
}
.top {
  width: 100%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  color: #898989;
  font-size: 0.2rem;
  border-bottom: 1px solid gray;
}
.dsktitle {
  width: 100%;
  height: 10rem;
  background: #f0f2f5;
}
.picture {
  width: 2rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
}

.registration {
  width: 1rem;
  height: 0.4rem;
  background: #eb6100;
  margin-left: 1.4rem;
  margin-top: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.14rem;
}
.sxlh6 {
  text-align: center;
  font-size: 0.18rem;
  margin-top: 0.1rem;
  color: gray;
  /* font-weight: 800; */
}
.btn_wrapper {
  width: 100%;
  height: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.1rem;
  div {
    width: 100%;
    text-align: center;
    color: gray;

    button {
      background-color: #eb6100;
      color: white;
      width: 0.8rem;
      height: 0.3rem;
      border: none;
      border-radius: 0.03rem;
      font-size: 0.13rem;
    }
  }
}
</style>
