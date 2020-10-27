<template>
  <div class="lwh_exercise">
    <!-- 头部 -->
    <header>练习</header>
    <!-- 滑动部分 -->
    <div class="lwh_bet_scro">
      <div>
        <!-- 下拉刷新 -->
        <div class="lwh_top">
          {{ lwh_cont }}
        </div>
        <!-- 考点练习 -->
        <div class="lwh_list">
          <ul>
            <li v-for="(item, index) in lwh_list" :key="index">
              <div>
                <van-icon
                  :name="item.icon"
                  :color="item.color"
                  size="0.26rem"
                />
              </div>
              <p>{{ item.cont }}</p>
            </li>
          </ul>
        </div>
        <!-- 默认排序 -->
        <div class="lwh_cont">
          <p>近期模考</p>
          <div>
            <p :class="{ lwh_default: lwh_flag }" @click="lwh_flag = true">
              默认排序
            </p>
            <p :class="{ lwh_default: !lwh_flag }" @click="lwh_btn()">
              时间
              <span :class="{ lwh_span_defaule: lwh_span_flag }"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMwNkZFMUNDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMwNkZFMURDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOThBNjEyRENCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOThBNjEyRUNCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvL0oBIAAACESURBVHjaYnTN/W/OwMDAw0Aa+MsCJNYCsTSJGhmYgDiGgXTwHKTxABAnkKjRlQnKWAjEHURq8gbiq0xIApVAvIWApnog3gbzIzLwBeK7ODStAuIm5MBBB1ZA/AtN7CwQh6OHKjp4BcQOSPxvQOyMLTqwgeNAXAAKdiB2AuKP6AoAAgwAZxMVhCzcUGAAAAAASUVORK5CYII="
                  alt=""
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjA3MTZGMjRDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk4QTYxMjRDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMDcxNkYyMkNCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMDcxNkYyM0NCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pii4p18AAACESURBVHjaYnTN/c+AA8QCcQMQuwPxHXRJFhyaVIF4EZR9EIhlgfgfsgImLJq4gfgoEl8KiHejK8KmEWSDKJqYExBPwadxDhAb43B+NhCnYdNYDMTJDPjBTCC2QtboBcQ9DMQBkH8lQRp1gXgrA/GAC4j3MGELMSKAFgvUwyIkavwNEGAAVhcSsg/IFtkAAAAASUVORK5CYII="
                  alt=""
                />
              </span>
            </p>
          </div>
          <!-- 数据显示 -->
          <div class="lwh_main">
            <img
              src="https://wap.365msmk.com/img/empty@2x.a2fa524d.png"
              alt=""
            />
            <p>暂无模考安排，敬请期待</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "",
  // 组件注册
  components: {},
  // 父组件传参
  props: {},
  // 变量声明
  data() {
    return {
      lwh_bs: null,
      lwh_cont: "下来即可刷新",
      lwh_list: [
        { cont: "专点专练", icon: "column", color: "#26bbd0" },
        { cont: "专点专练", icon: "column", color: "#26bbd0" },
        { cont: "专点专练", icon: "column", color: "#26bbd0" },
        { cont: "专点专练", icon: "column", color: "#26bbd0" },
        { cont: "专点专练", icon: "column", color: "#26bbd0" },
        { cont: "专点专练", icon: "column", color: "#26bbd0" },
      ],
      lwh_flag: true,
      lwh_span_flag: false,
    };
  },
  // Vue实例创建完成以后执行 数据可用
  created() {},
  // Vue模板挂载完毕以后执行  DOM节点加载完毕了（可以获取节点了）
  mounted() {
    // 滑动插件
    this.$nextTick(() => {
      this.lwh_bs = new BetterScroll(".lwh_bet_scro", {
        probeType: 2,
        click: true,
      });
      // 上滑禁止
      this.lwh_bs.on("scroll", (pos) => {
        if (pos.y < 0) {
          this.lwh_bs.scrollTo(0, 0);
        }
        if (pos.y > 50) {
          this.lwh_cont = "松手即可刷新";
        }
      });
    });
  },
  // vue组件更新完毕以后执行
  update() {},
  // 定义事件
  methods: {
    lwh_btn() {
      this.lwh_flag = false;
      this.lwh_span_flag = !this.lwh_span_flag;
    },
  },
  // 过滤器
  filter: {},
  // 计算属性
  computed: {},
  // 监听属性
  watch: {},
};
</script>

<style lang="scss" scoped>
.lwh_exercise {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  > header {
    width: 100%;
    height: 0.46rem;
    text-align: center;
    line-height: 0.46rem;
    background: #fff;
  }
}
.lwh_bet_scro {
  width: 100%;
  height: 4.57rem;
  overflow: hidden;
  > div {
    width: 100%;
    min-height: 101%;
    position: relative;
    > .lwh_top {
      width: 100%;
      height: 0.26rem;
      color: #969799;
      font-size: 0.1rem;
      position: absolute;
      top: -0.26rem;
      left: 0;
      text-align: center;
    }
  }
}
.lwh_list {
  width: 100%;
  height: 2rem;
  box-sizing: border-box;
  padding: 0.1rem;
  > ul {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 0.04rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    > li {
      width: 25%;
      text-align: center;
      > p {
        height: 0.36rem;
        line-height: 0.36rem;
        font-size: 0.14rem;
        color: #607075;
      }
      > div {
        margin: 0 auto;
        height: 0.42rem;
        width: 0.42rem;
        background: #fff;

        box-shadow: 0 0 3.2vw 0 rgba(10, 0, 24, 0.07);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.lwh_cont {
  width: 100%;
  height: 2.5rem;
  background: #fff;
  box-sizing: border-box;
  padding: 0.15rem;
  > p {
    width: 100%;
    font-size: 0.16rem;
    margin-bottom: 0.15rem;
    color: #9f9f9f;
  }
  > div:nth-of-type(1) {
    width: 100%;
    height: 0.15rem;
    font-size: 0.14rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;

    > p:nth-of-type(2) {
      > span {
        display: none;
      }
    }
    > .lwh_default {
      color: orangered;
      > span {
        display: inline-block !important;
        > img {
          display: none;
        }
      }
      > .lwh_span_defaule {
        > img:nth-of-type(1) {
          display: block !important;
        }
        > img:nth-of-type(2) {
          display: none !important;
        }
      }
      > span {
        > img:nth-of-type(1) {
          display: none !important;
        }
        > img:nth-of-type(2) {
          display: block !important;
        }
      }
    }
  }
  > .lwh_main {
    text-align: center;
    > img {
      width: 0.92rem;
      height: 1.24rem;
      margin-bottom: 0.1rem;
    }
    >p{
      color:#9f9f9f;
      font-size: 0.12rem;
    }
  }
}
</style>
