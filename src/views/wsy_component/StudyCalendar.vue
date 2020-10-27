<template>
  <div>
    <van-nav-bar title="学习日历" left-arrow @click-left="onClickLeft"/>

  </div>
</template>

<script>
export default {
  name:"",
  components: {

},
  props: {},
  data() {
    return {

    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  beforeRouteUpdate(to,from,next) {

next()
},
  methods: {
      onClickLeft(){
      this.$router.back(1);
      }
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style  scoped>

</style>
