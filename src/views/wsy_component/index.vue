<template>
  <div class="wsy_box">
    <div class="wsy_scroll" ref="scrollBox">
      <div class="scrollBox">
        <!-- 王淑岩轮播图区域 -->
        <div class="wsy_banner">
          <van-swipe
            class="wsy-swipe"
            touchable
            :show-indicators="false"
            :autoplay="2000"
            indicator-color="white"
          >
            <van-swipe-item v-for="index in 4" :key="index">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg"
              />
            </van-swipe-item>
          </van-swipe>
        </div>

        <!-- 王淑岩轮播图区域 -->
        <!-- 王淑岩上部导航区域 -->
        <div class="wsy_kinds">
          <ul>
            <router-link
              tag="li"
              :to="item.path"
              v-for="(item, index) in wsy_nav"
              :key="index"
            >
              <img :src="item.img" alt />
              <p>{{ item.title }}</p>
            </router-link>
          </ul>
        </div>
        <!-- 王淑岩上部导航区域 -->
        <!-- 名师阵容区 -->
        <Section>
          <template slot="a">
            <p class="title">名师阵容</p>
            <div class="wsy_content">
              <div
                class="wsy_item"
                @click="toTeacherInfo(item.teacher_id)"
                v-for="(item, index) in famousTeacher.list"
                :key="index"
              >
                <img :src="item.teacher_avatar" />
                <div>
                  <p>{{ item.teacher_name }}</p>
                  <p>{{ item.introduction }}</p>
                </div>
              </div>
            </div>
          </template>
        </Section>
        <!-- 名师阵容区 -->

        <!-- 精品课程区 -->
        <Section>
          <template slot="a">
            <p class="title">精品课程</p>
            <div class="wsy_content">
              <div
                class="wsy_ii_item"
                @click="ToCourseDetail(item)"
                v-for="(item, index) in excellentCourse.list"
                :key="index"
              >
                <p>{{ item.title }}</p>
                <div class="wsy_ii_time">
                  <p>共{{ item.total_periods | periods }}课时</p>
                </div>
                <div
                  class="wsy_ii_teacher"
                  v-for="(it, i) in item.teachers_list"
                  :key="i"
                >
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
                    <span>{{ item.price }}</span>
                  </span>
                </div>
                <img
                  v-show="!item.has_buy"
                  class="wsy_flag_img"
                  src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png"
                  alt
                />
              </div>
            </div>
          </template>
        </Section>
        <!-- 精品课程区 -->

        <!-- 推荐课程区 -->
        <Section>
          <template slot="a">
            <p class="title">推荐课程</p>
            <div class="wsy_content">
              <div
                class="wsy_ii_item"
                @click="ToCourseDetail(item)"
                v-for="(item, index) in recommendedCourse.list"
                :key="index"
              >
                <p>{{ item.title }}</p>
                <div class="wsy_ii_time">
                  <p>共{{ item.total_periods | periods }}课时</p>
                </div>
                <div
                  class="wsy_ii_teacher"
                  v-for="(it, i) in item.teachers_list"
                  :key="i"
                >
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
                    <span>{{ item.price }}</span>
                  </span>
                </div>
                <img
                  v-show="!item.has_buy"
                  class="wsy_flag_img"
                  src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png"
                />
              </div>
            </div>
          </template>
        </Section>
        <!-- 推荐课程区 -->

        <!-- 名师讲师区 -->
        <Section>
          <template slot="a">
            <p class="title">名师讲师</p>
            <div class="wsy_content">
              <div
                class="wsy_item"
                @click="toTeacherInfo(item.teacher_id)"
                v-for="(item, index) in starLecturer.list"
                :key="index"
              >
                <img :src="item.teacher_avatar" />
                <div>
                  <p>
                    {{ item.teacher_name }}
                    <span>M10</span>
                  </p>
                  <p>{{ item.introduction }}</p>
                </div>
              </div>
            </div>
          </template>
        </Section>
        <!-- 名师讲师区 -->
      </div>
    </div>
    <!-- <WsyLogin></WsyLogin> -->
    <WsyLogin v-if="this.$store.state.wsy_isClose"></WsyLogin>
  </div>
</template>

<script>
import Section from "@/components/Wsy_section.vue";
import WsyLogin from "@/components/wsy_login";
import BetterScroll from "better-scroll";
export default {
  name: "wsy_index",
  components: {
    Section,
    WsyLogin,
  },
  props: {},
  data() {
    return {
      // better-scroll实例
      bs: null,
      index: 1,
      //   导航区域数据
      wsy_nav: [
        {
          title: "特色课",
          path: "/lwh_course",
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAFZUlEQVRoQ+1bW2xUVRRd68xMeZPaFESeBkuLhkekk6IfxDEEMQqUmWGMwcQPE5FEo9GYGONP/TIh8UH88BsNwTDObR0CGsUImGDAGVEQIn1JIBYqBSwtr5m5Z5tbaDLYoXPb28d8nPs1ybl7n7PXXWedk8leRN6zfv3pSr/f9wypN4uwlhAheJKQvVnNfblc2fkLFy72ptPBbH5cqf0OhcQ/ZcqJaWVl02dRsmtJrtPQywmQwG+AfJG1M98mk0s7+9dO50dDg6jjx5vrofE2qFYC4htYnPQC6gREpwl1BD5/KpF48DRAKQ0ghNFoexVsvVKAWlCCAJYDmDZwfbQBSYPqo2XLHoo3NFD3AbEp3FKvIZ8CmFesKBE4hfcQuASgTSi7/f7pTfH4AxeLxY7G+MaNV8qV6opSEBVIjQgqSU4FRBWbTwSdCmproqmqibG1Jyv05EBCgFCxwHuNk8hCuF+RO5Dhz7dU9koyWXMNoB5uzsJxomKxi5Ntu7tcCR63oV8g1NOATPAwz8GcrTczGm2Lira/BOD3kOxOaN82+UegjwE4qrRKZcVOJ5OLO7zk3rCh/X6lsisUVJ1QgnSoD84CpI/RHp8ciJcZibRaEB32mGxAuAhyJLodYEB1REQn/P7Md/H4koybuUKhH/0VFfNDgH4eIo8BmCki95EcgQ/2/xWovYyEW/4GZLabxXl/hx0UvHnmXHfjvU6eWEx8OtuyUYhtABZ6n9NNBl5gJNx8tbCyukkwrHe6QLXFsqoaC0WHw+1riNxOADOGlX14Qb0OI256FJuhT00esqxFTxQGonk/gdVDT+op4ta4AEHiWsKqnlpo6ZFwcw+AgmOeSh00mOMFBHXCWlTg0gZEIy22SPE7wMiCYoDoP/YNI24jYRhhGHG3xhhGGEYYRhQ8d83WMFvDbA2zNQa7lBuNMBphNMJohNEIF39dGLE0YmnE0oilEUsjli4QMGJpxNKIpRFLF1JhbpZGLI1YGrE0YmnE0gUC+WI55j1UIEuuUaTHaSY7BeBh9+h5f7MEgWhmJNKyGyIx7+W5zzAYEJFws9OtOxKNpO4XBCQZibRththOO9+YPSXHCGIrY+va5tsB+zCAOWOFRCkBIYIOZfMphkJ/Tawoz34G4kUARTvaRwKsUgHCcRoQ2JHT+vXbNoX69lVa5XaNFStKBQgAl0GELav6UB8QfQ3g5XNfA+XjkfjixXKUChCK8l7X5Y5tBw48mbtLnaPh5u0CbAEwsVgxXsZL4NS4CeJzy6p+pb+Ou4CIxQ5PyuUq3yL4BiCj1hQ+zoz4F4IPc1pvTyYXO+3Ofc+A89oBQzIzH9VKPgBk1Wic6eMEhGOqOQLiHZ9v0i/x+Lwb+ay+58XF8U3YduuzFHlVgKUQTAc5yY1Xqti2GQsg7pwI10H2CORPQH9y9mzNvnSaBR2Krm5wkcipBSKBOooESdQKuAKQ8uGyZRSBcL56twC/UyRFqKOiJGVZ1e1FP06xF/LHa2tTgTlzJlQEAhNna40QgSggdQACQ8kDoNdqrC5gQwSGaVPIkvhVNCz6yr6/caP3fGfnzUtD8ae6YsRgRcZirVW2Lc9BY5NAHLvkNBKDue4cw+QPVlP1mkJ5I+HT3wBcOzjbJCPCq1ToANhIqp2JxMJWLx5Uz0D0F+O4b2eUn1liq1wQIkEI60A8MsAdRLQqW1766uuanwoBEY22BSF6l4hU5Y87ZjkQfxBMQUuKwqNqwq2Tbs1yxRg7YkDkT+ScPJnMzMoyxQU29DpA6gHMFeCYz+d7v6vr7EHnElN4caLC4ZbVhLwL0HH1ngO4F0BSa7ZrPfnSnj2zrxcrbKjj/wFPducAYoibwgAAAABJRU5ErkJggg==",
        },
        {
          title: "一对一辅导",
          path: "/oto",
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg==",
        },
        {
          title: "学习日历",
          path: "/StudyCalendar",
          img:
            "data:image/png;base64,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",
        },
      ],
      // 名师阵容区域数据
      famousTeacher: {},
      // 精品课程数据
      excellentCourse: {},
      // 推荐课程数据
      recommendedCourse: {},
      // 明星讲师
      starLecturer: {},
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.bs = new BetterScroll(this.$refs.scrollBox, {
          probeType: 3,
          click: true,
        });
      }, 800);

      this.getBanner();
      this.getIndex();
    });
    let token = sessionStorage.getItem("token");
    if (token) {
      this.$store.commit("wsy_Close", false);
    }
  },
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);

    // if(from.path == "/lwh_main" && to.path == "/StudyCalendar"){
    //     this.$store.commit("wsy_Close",true)
    //     next(false)
    // }
    next();
  },
  methods: {
    //   点击进入课程详情页面
    ToCourseDetail(info) {
      window.localStorage.setItem("CourseInfo", JSON.stringify(info));
      this.$router.push({ name: "CourseDetail", params: info });
    },
    // 获取轮播图数据
    async getBanner() {
      let data = await this.$http.get("/api/app/banner");
      // console.log(data);
    },
    // 获取首页列表数据
    async getIndex() {
      let { data } = await this.$http.get("/api/app/recommend/appIndex");
      this.famousTeacher = data.data[4];
      this.excellentCourse = data.data[1];
      this.recommendedCourse = data.data[3];
      this.starLecturer = data.data[0];
    },
    // 点击名师阵容跳转到讲师详情
    toTeacherInfo(id) {
      let token = sessionStorage.getItem("token");
      if (token) {
        this.$router.push(`/teacher?id=${id}`);
      } else {
        this.$store.commit("wsy_Close", true);
      }
    },
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
    },
  },
  computed: {},
  watch: {},
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
  display: flex;
  flex-direction: column;
  //   overflow: hidden;
  > .wsy_scroll {
    flex: 1;
    background: #f0f2f5;
    overflow: hidden;
  }
}
.scrollBox {
  width: 100%;
  min-height: 101%;
}
// vant轮播图组件样式
.wsy_banner {
  width: 100%;
  height: 2rem;
}
.wsy-swipe .van-swipe-item {
  width: 7.5rem;
  height: 2rem;
  font-size: 20px;
  line-height: 2rem;
  text-align: center;
  background-color: #39a9ed;
  > img {
    width: 100%;
    height: 100%;
  }
}
.wsy_kinds {
  width: 100%;
  height: 1.2rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  padding-bottom: 0.2rem;
  position: relative;
  > ul {
    position: absolute;
    top: -0.3rem;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 0.1rem;
    > li {
      border-radius: 0.1rem;
      width: 30%;
      height: 100%;
      background: #fff;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > img {
        width: 20%;
        height: 20%;
      }
      > p {
        font-size: 0.12rem;
        margin-bottom: 0;
        color: #8c8c8c;
      }
    }
  }
}
</style>
|
