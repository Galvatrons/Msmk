<template>
  <div>
    <wsyHeader>
      <template slot="title">视频</template>
      <template slot="right">
        <!-- <van-icon name="search" size="25" color="#757575" /> -->
      </template>
      <template slot="search">
        <div></div>
      </template>
    </wsyHeader>
    <div class="wsy_video">
      <video autoplay src="http://dal4jd-video.baijiayun.com/247cfd630145714d43b5bc012f759ab6/5fa3e56b/00-x-upload/video/30929276_928a9308d830ef5808d4be39138103a3_FeVGFViV.mp4?uuid=uuid-864a721c-a6c8-09fe-f3aa-e6b060bae8dc" controls="controls">您的浏览器不支持 video 标签。</video>
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
        // id:this.$route.query.id,
        videoUrl:""
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {},
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.wsy_video {
  width: 100%;
  height: 2rem;
  >video{
      width: 100%;
      height: 100%;
  }
}
</style>
