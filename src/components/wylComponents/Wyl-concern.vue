<template>
  <div class="wsy_box">
    <van-nav-bar title="我的关注" left-arrow @click-left="onClickLeft" />
    <div class="wsy_concern">
      <div class="Concern-item" v-for="(item, index) in list" :key="index">
        <div class="item-body">
          <img :src="item.avatar" />
          <div class="item-text">
            <p>
              {{ item.teacher_name }}
              <span>M2</span>
            </p>
            <p class="p1">{{ item.introduction }}</p>
          </div>
        </div>
        <div class="item-button" @click="cancelcollect(item.collect_id,item.teacher_id)">取消关注</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getcollectTeacher();
  },
  methods: {
    onClickLeft() {
      this.$router.back(1);
    },
    // 获取关注的老师列表
    async getcollectTeacher() {
      let { data } = await this.$http.get(
        `/api/app/collect?page=${1}&limit=10&type=2`
      );
      this.list = data.data.list;
      console.log(this.list);
    },
    // 取消关注
   async cancelcollect(collect_id,teacher_id){
      let { data } = await this.$http.get(
        `/api/app/teacher/collect/${teacher_id}`
      );
      if(data.code == 200){
        this.getcollectTeacher()
      }
      
    }
  }
};
// avatar: "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
// collect_id: 101
// introduction: ""
// level_name: null
// teacher_id: 198
// teacher_name: "15910914680"
</script>

<style lang='scss' scoped>
.wsy_box {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  > .wsy_concern {
    width: 100%;
    height: 100%;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
}
.Concern-item {
  width: 100%;
  margin-top: 0.1rem;
  height: 0.8rem;
  border-radius: 0.05rem;
  background: rgb(255, 255, 255);
  padding: 0 0.1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Concern-item img {
  width: 0.4rem;
  height: 0.4rem;
}
.item-button {
  width: 0.8rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  border-radius: 0.2rem;
  background: #fdefe5;
  color: #eb6100;
  font-size: 0.14rem;
}
.item-body {
  display: flex;
  align-items: center;
  width: 1rem;
  height: 0.4rem;
}
.item-text {
  margin-left: 0.1rem;
  color: #595959;
}
.item-text p {
  width: 1rem;
  margin: 0.01rem;
}
.item-text span {
  color: #ec7a2f;
  font-size: 0.13rem;
  margin-left: 0.05rem;
}
.item-text .p1 {
  width: 3rem;
  font-size: 0.12rem;
  color: #afa3a3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>