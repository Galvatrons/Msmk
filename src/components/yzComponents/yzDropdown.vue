<template>
  <div>
    <div class="yz_dropdown">
      <van-dropdown-menu>
        <!-- 下拉菜单分类部分 -->
        <van-dropdown-item title="分类" ref="item">
          <div class="yz_classify_wrapper">
            <div class="yz_grade">{{gradeList.name}}</div>
            <div class="yz_grade_slide">
              <span
                v-for="(item, index) in gradeList.child"
                :key="index"
                @click="onGrade(index,item)"
                :class="gradeActive == index ? 'grade_active' : ''"
              >{{ item.name }}</span>
            </div>
          </div>
          <div class="yz_classify_wrapper">
            <div class="yz_grade">{{subjectList.name}}</div>
            <div class="yz_grade_slide">
              <span
                v-for="(item, index) in subjectList.child"
                :key="index"
                :class="classifyActive == index ? 'grade_active' : ''"
                @click="onClassify(index,item)"
              >{{ item.name }}</span>
            </div>
          </div>
          <div class="yz_button_wrapper">
            <button @click="onClickReset">重置</button>
            <button class="button_active" @click="onClickOk">确定</button>
          </div>
        </van-dropdown-item>
        <!-- 下拉菜单排序部分 -->
        <van-dropdown-item title="排序" ref="sort">
          <div
            class="yz_sort_item"
            :class="{lwh_AjaxType:index==lwh_AjaxTypeIndex}"
            @click="lwh_AjaxType(item,index)"
            v-for="(item,index) in lwh_AjaxList "
            :key="index"
          >{{item.cont}}</div>
        </van-dropdown-item>
        <!-- 下拉菜单筛选部分 -->
        <van-dropdown-item title="筛选" ref="filter">
          <div class="yz_filter_wrapper">
            <div
              v-for="(item, index) in appCourseType"
              :key="index"
              :class="
                filterActive == index ? 'yz_filter_active' : 'yz_filter_item'
              "
              @click="onFilter(item,index)"
            >{{ item.name }}</div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      gradeList:[],
      subjectList:[],
      lwh_AjaxList: [
        { id: 0, cont: "综合排序" },
        { id: 1, cont: "最新" },
        { id: 2, cont: "最热" },
        { id: 3, cont: "价格由低到高" },
        { id: 4, cont: "价格由高到低" }
      ],
      lwh_AjaxTypeIndex: null,
      gradeActive: -1,
      classifyActive: -1,
      filterActive: -1,
      filterItem: [
        "全部",
        "大班课",
        "小班课",
        "公开课",
        "点播课",
        "面授课",
        "音频课",
        "系统课",
        "图文课",
        "会员课"
      ],
      lwh_arr_a: "",
      lwh_arr_b: "",
      courseList: [],
      appCourseType: [],
      filterList:[]
    };
  },
  mounted() {
    // 特色课分类下拉数据
    this.$http.get("/api/app/courseClassify").then(res => {
      console.log(res.data.data.attrclassify[0]);
      
      this.gradeList = res.data.data.attrclassify[0]
      console.log(this.gradeList);
      this.subjectList = res.data.data.attrclassify[1]
      console.log(this.subjectList);
    });
    // 下拉数据获取
    this.lwh_AjaxAdd();
    // 特色课筛选下拉数据
    axios.get("http://120.53.31.103:84/api/app/courseClassify").then((res)=>{
      console.log(res.data.data);
      this.appCourseType = res.data.data.appCourseType;
      console.log(this.appCourseType);
    })
  },
  methods: {
    onGrade(index, item) {
      this.gradeActive = index;
      this.arr_a = item.id;
      // this.$store.commit("yzGradeId",item.id)
      console.log(item.id);
    },
    onClassify(index, item) {
      this.classifyActive = index;
      this.arr_b = item.id;
      // this.$store.commit("yzClassify",item.id)
    },
    onClickReset() {
      this.$refs.item.toggle();
      this.gradeActive = -1;
      this.classifyActive = -1;
    },
    onClickOk() {
      this.$refs.item.toggle();
      this.$store.commit("lwh_add", this.arr_a + "," + this.arr_b);
    },
    onFilter(item, index) {
      this.$store.commit("lwh_adx", item.id);
      this.filterActive = index;
      this.$refs.filter.toggle();
    },
    // 获取接口数据
    async lwh_AjaxAdd() {
      let { data } = await this.$http.get("/api/app/courseClassify");
    },
    // type类型选择
    lwh_AjaxType(item, index) {
      this.$refs.sort.toggle();
      this.lwh_AjaxTypeIndex = index;
      this.$store.commit("lwh_ads", item.id);
    }
  }
};
</script>

<style lang="scss">
.van-dropdown-menu__title--active {
  color: orange !important;
}
.yz_dropdown {
  width: 100%;
  background-color: white;
}
.van-dropdown-menu__bar {
  box-shadow: 0 0 0 !important;
}
.yz_classify_wrapper {
  width: 100%;
  padding: 0.15rem;
  box-sizing: border-box;
  border-bottom: 0.001rem solid rgb(231, 231, 231);
  .yz_grade {
    color: gray;
    font-size: 0.15rem;
  }
  .yz_grade_slide {
    width: 100%;
    outline: none;
    overflow: hidden;
    // display: flex;
    span {
      display: inline-block;
      width: 0.75rem;
      height: 0.36rem;
      background-color: #f5f5f5;
      border-radius: 0.02rem;
      line-height: 0.36rem;
      text-align: center;
      margin: 0.1rem 0.175rem 0 0;
      color: gray;
      font-size: 0.15rem;
    }
    .grade_active {
      background-color: #ebeefe;
      color: orange;
    }
  }
}
.yz_button_wrapper {
  width: 100%;
  height: 0.65rem;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    width: 1.7rem;
    height: 0.33rem;
    background-color: white;
    border: none;
    border: 0.001rem solid rgb(212, 212, 212);
    border-radius: 0.05rem;
    font-size: 0.14rem;
  }
  .button_active {
    width: 1.7rem;
    height: 0.33rem;
    background-color: orange;
    border: none;
    color: white;
    border: 0.001rem solid rgb(212, 212, 212);
    border-radius: 0.05rem;
  }
}
.lwh_AjaxType {
  color: orange;
}
.yz_sort_item {
  width: 100%;
  height: 0.53rem;
  border-bottom: 0.001rem solid rgb(236, 236, 236);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.15rem;
}
.yz_filter_wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.23rem;
  padding-top: 0.1rem;
  padding-bottom: 0.15rem;
  box-sizing: border-box;
  .yz_filter_item {
    display: inline-block;
    width: 0.75rem;
    height: 0.36rem;
    background-color: #f5f5f5;
    border-radius: 0.02rem;
    line-height: 0.36rem;
    text-align: center;
    margin: 0.1rem 0.175rem 0 0;
    color: gray;
    font-size: 0.15rem;
  }
  .yz_filter_active {
    background-color: #ebeefe;
    color: orange;
    display: inline-block;
    width: 0.75rem;
    height: 0.36rem;
    border-radius: 0.02rem;
    line-height: 0.36rem;
    text-align: center;
    margin: 0.1rem 0.175rem 0 0;
    font-size: 0.15rem;
  }
}
</style>
