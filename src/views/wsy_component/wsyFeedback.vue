<template>
  <div>
    <wsyHeader>
      <template slot="title">意见反馈</template>
      <template slot="right">
        <van-icon name="search" size="25" color="#757575" />
      </template>
      <template slot="search">
        <div></div>
      </template>
    </wsyHeader>
    <div class="wsy_main">
      <div class="wsy_input">
        <textarea
          v-model="wsy_input_value"
          cols="30"
          rows="10"
          maxlength="500"
          placeholder="请输入您的意见"
        ></textarea>
      </div>
      <p>{{ wsy_input_value.length }}/500</p>
      <div class="wsy_button">
        <van-button type="primary" color="#EB6100" block @click="wsy_submit()">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import wsyHeader from "@/components/wsy_header.vue";
export default {
  name: "",
  components: {
    wsyHeader
  },
  props: {},
  data() {
    return {
      wsy_input_value: ""
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
    async wsy_submit() {
      let { data } = await this.$http.post("/api/app/feedback", {
        content: this.wsy_input_value
      });
      if(data.code == 200){
        this.$router.push("/lwh_my")
      }
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_main {
  width: 100%;
  height: 100%;
  position: relative;
  .wsy_input {
    width: 100%;
    // height: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    > textarea {
      width: 100%;
      height: 1.6rem;
      padding: 0.1rem;
      box-sizing: border-box;
      border-radius: 0.04rem;
      border: 0.01rem solid #ccc;
    }
    > textarea::placeholder {
      font-size: 0.1rem;
      color: #beb7c7;
    }
  }
  > p {
    position: absolute;
    right: 0.2rem;
    font-size: 0.12rem;
    color: #b7b7be;
  }
  .wsy_button {
    width: 100%;
    margin-top: 0.4rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    > .van-button {
      width: 100%;
    }
  }
}
.wsy_topNav {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > p {
    color: #8c8c8c;
  }
  > :nth-child(1) {
    color: #000;
  }
}
.comment_none {
  width: 100%;
  height: 2rem;
  text-align: center;
  img {
    width: 1.6rem;
    height: 1.6rem;
  }
  div {
    color: #9b8c8c;
    font-size: 0.16rem;
    margin-top: 0.1rem;
  }
}
</style>
