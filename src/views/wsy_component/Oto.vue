<template>
  <div class="wsy_oto">
    <!-- 头部标题 -->
    <van-nav-bar
      title="一对一辅导"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <!-- 右侧搜索按钮 -->
      <template #right>
        <van-icon name="search" size="0.24rem" color="#666" />
      </template>
      <!-- 左侧返回图标 -->
      <template #left>
        <van-icon name="arrow-left" size="0.24rem" color="#666" />
      </template>
    </van-nav-bar>
    <!-- 老师预约时间选择 -->
    <div class="lwh_time lwh_cont" v-show="lwh_flag == 1">
      <!-- 日历 -->
      <div>
        <p>日期</p>
        <van-calendar
          title="日历"
          :poppable="false"
          :show-confirm="false"
          :show-title="false"
          :show-subtitle="false"
          @select="onSelect"
          :style="{ height: '200px' }"
        />
        <!-- <ul>
          <li v-for="(item, index) in lwh_date" :key="index">{{ item }}</li>
        </ul>
        <div>
          <p
            v-for="(item, index) in lwh_arr"
            :key="item.id"
            @click="lwh_index_btn(item, index)"
            :class="{
              lwh_p_default: index == lwh_index,
              lwh_disable: item.dis,
            }"
          >
            <font :class="{ lwh_date_default: item.flag }">{{
              item.date
            }}</font>
            <span :class="{ lwh_span_default: item.flag }">今天</span>
          </p>
        </div> -->
      </div>
      <!-- 时间选择 -->

      <div>
        <p>时段</p>
        <div>
          <div @click="show = true">
            <span v-show="currentTime != '00:00'">{{ currentTime }}</span>
            <span v-show="currentTime == '00:00'">开始时间</span>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <font>-</font>
          <div @click="shows = true">
            <span v-show="leavetime != '00:00'">{{ leavetime }}</span>
            <span v-show="leavetime == '00:00'">结束时间</span>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 底部重置按钮 -->
    <div class="lwh_btn" v-show="lwh_flag != 0">
      <button @click="onReset">重置</button>
      <button @click="onClickOk">确认</button>
    </div>
    <!-- 开始时间 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '45%' }">
      <van-datetime-picker
        v-model="currentTime"
        @cancel="show = false"
        type="time"
        @confirm="btn"
      />
    </van-popup>
    <!-- 结束时间 -->
    <van-popup v-model="shows" position="bottom" :style="{ height: '45%' }">
      <van-datetime-picker
        v-model="leavetime"
        type="time"
        @confirm="lwh_confirm"
        @cancel="shows = false"
    /></van-popup>
    <div class="wsy_scroll" ref="scrollBox">
      <div class="scrollBox">
        <!-- 头部条件选择 -->
        <div class="lwh_tit">
          <p :class="{ lwh_default: lwh_flag == 1 }" @click="lwh_btn(1)">
            选择上课时间
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMwNkZFMUNDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMwNkZFMURDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOThBNjEyRENCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOThBNjEyRUNCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvL0oBIAAACESURBVHjaYnTN/W/OwMDAw0Aa+MsCJNYCsTSJGhmYgDiGgXTwHKTxABAnkKjRlQnKWAjEHURq8gbiq0xIApVAvIWApnog3gbzIzLwBeK7ODStAuIm5MBBB1ZA/AtN7CwQh6OHKjp4BcQOSPxvQOyMLTqwgeNAXAAKdiB2AuKP6AoAAgwAZxMVhCzcUGAAAAAASUVORK5CYII="
              alt=""
            />
          </p>
          <p :class="{ lwh_default: lwh_flag == 2 }" @click="lwh_btn(2)">
            选择老师条件
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMwNkZFMUNDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMwNkZFMURDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOThBNjEyRENCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOThBNjEyRUNCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvL0oBIAAACESURBVHjaYnTN/W/OwMDAw0Aa+MsCJNYCsTSJGhmYgDiGgXTwHKTxABAnkKjRlQnKWAjEHURq8gbiq0xIApVAvIWApnog3gbzIzLwBeK7ODStAuIm5MBBB1ZA/AtN7CwQh6OHKjp4BcQOSPxvQOyMLTqwgeNAXAAKdiB2AuKP6AoAAgwAZxMVhCzcUGAAAAAASUVORK5CYII="
              alt=""
            />
          </p>
        </div>
        <!-- 预约老师条件 -->
        <div class="lwh_term lwh_cont" v-if="lwh_flag == 2">
          <!-- 老师类型 -->
          <div>
            <p class="lwh_tit">老师类型</p>
            <ul>
              <li
                v-for="(item, index) in typeList"
                :key="index"
                :class="{ lwh_term_default: index == lwh_term_listIndex }"
                @click="lwh_btn_type(index, item)"
              >
                {{ item.level_name }}
              </li>
            </ul>
          </div>
          <!-- 只看 -->
          <div>
            <p class="lwh_tit">只看</p>
            <div>
              <p
                v-for="(item, index) in lwh_term_check"
                :key="index"
                @click="lwh_btn_check(index, item)"
              >
                <img :src="item.flag ? item.imgs : item.img" alt="" /><span>{{
                  item.cont
                }}</span>
              </p>
            </div>
          </div>
          <!-- 性别 -->
          <div>
            <p class="lwh_tit">性别</p>
            <div>
              <p
                v-for="(item, index) in lwh_term_six"
                :key="index"
                :class="{ lwh_term_six: index == lwh_term_sixIndex }"
                @click="onSex(item, index)"
              >
                {{ item.title }}
              </p>
            </div>
          </div>
          <!-- 年级 -->
          <div>
            <p class="lwh_tit">{{ gradeList.attr_name }}</p>
            <div>
              <p
                v-for="(item, index) in gradeList.child"
                :key="index"
                :class="{ lwh_term_grade: index == lwh_term_gradeIndex }"
                @click="onGrade(item, index)"
              >
                {{ item.attr_val_name }}
              </p>
            </div>
          </div>
          <!-- 学科 -->

          <div>
            <p class="lwh_tit">{{ subjectList.attr_name }}</p>
            <div>
              <p
                v-for="(item, index) in subjectList.child"
                :key="index"
                :class="{ lwh_term_subject: index == lwh_term_subjectIndex }"
                @click="onSubject(item, index)"
              >
                {{ item.attr_val_name }}
              </p>
            </div>
          </div>
        </div>

        <!-- 老师列表 -->
        <div class="lwh_cont" v-if="lwh_flag == 0">
          <div
            class="wsy_item"
            v-for="(item, index) in techerList"
            :key="index"
            @click="toOtoPlan(item)"
          >
            <div>
              <img :src="item.avatar" />
              <div>
                <p>
                  {{ item.real_name }}
                  <!-- <span class="gzSpan">{{ item.is_collect }}</span> -->
                </p>
                <p>
                  <span class="xbSpan">{{ item.sex | sexFilter }}</span
                  >{{ item.teach_age }}年教龄
                </p>
              </div>
            </div>
            <div>预约</div>
          </div>
          <div class="lwh_cont_foot">没有更多了</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import axios from "axios";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      bs: null,
      lwh_list: [
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
        {
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019wX5ZNRNxBT1577773182.jpg",
          cont: "马学斌",
          age: "30",
          type: "M10",
        },
      ],
      lwh_flag: 0,
      lwh_date: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      // 年级列表
      gradeList: [],
      // 年级id
      GradeId: "",
      // 学科列表
      subjectList: [],
      // 学科id
      subjectID: "",
      // 老师类型列表
      typeList: [],
      // 老师类型ID
      typeID: "",
      // 性别id
      sexId: "",
      // 关注id
      guanzhuId: 0,
      // 上课id
      shangkeId: 0,
      fenleiBox: [],
      // 老师列表
      techerList: [],
      // 开始时间
      startTime:"",
      // 结束时间
      endTime:"",
      lwh_arr: [],
      lwh_index: null,
      show: false,
      shows: false,
      currentTime: "开始时间",
      leavetime: "结束时间",
      lwh_term_list: [],
      lwh_term_check: [
        {
          cont: "关注的",
          flag: false,
          imgs:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTBDMUJFQTBCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTBDMUJFQTFCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MEMxQkU5RUI3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MEMxQkU5RkI3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr/wXDYAAAKySURBVHja7JmxattQFIYluaM8eKzboRAChjxAp8Yl7hZw6NC0g5cQx2OgTxD8BIWubfCSpVmCAx5j6mRpHiAQMIYOjTMGKo113P+Q/7YHtapjR74SJQd+jKQrnU/33nOu7rH745XzL3sMrUGr0AJUhHwnGQuhITSAOlA7tz/+FtfYjQEVoCa0AeUcOzaCWtAOgIfRi95fbqhC51DdIqRDX+LzfLTuVieBbkMHUF6dO4IaUInn3YSU5zMb9GFMzh8Adjtu6KuENPB9aAvqzbUb98c3477ulvHzAVrkpWvoJa4f6h6VObmnjk+gp/OGjAD36PNEjfYeXqCoQZtquPuM9CvHsgH2ir77aho0zdBLCvqqAue55Z78M/xvpsFnlQ2eeHyDnAqcnpOycRocqWyw5jGZG/vkZMc0y6rHFcfYcYZANcuCx4g3dpEhUM1S9CJrdzjFg1zm2S9QAI1jFLDNFu+57TzVLP6DGd/2IfPuyi3a+syPojdQDbqc1qE3A6Q7BWTUVnivawO0PiOkhq3bAN1MIFA2bYAuJQC6ZAM0iS983wZoKnYPeg/6P4KGCfgNbYCeJQB6ZgN0NwHQXRugH6HuHSC7fMbcQcf8VOvOCFnjM6xEvXxPvmCV43RCcIRs0+A9l7M4lO1yoNbefEJRfaftMrfMwvLdvKz0qK6cPcpQ6tR7uaGADtSJ5QyBapaBgHbUidcZAtUsHQFts2wiVoHKaROypFMxh8IooFKObql2UvorpAhZIIOxlpTMTXra4f5bbJG9XEgJsu38rpEGZPuVR4dMxNc8fsbcV7Y83Kf07ZClZur50T8bpBz9LrIQSFVNClbHLLMklWd9psNlBk5FXRPIt4B8rxN+1KosEuRTmqYBe/Jw0hIqDUr8cBjZnKL0WYpCxvWotsz8IfZTgAEAf3S9TaQBanUAAAAASUVORK5CYII=",
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAqpJREFUWAntmT1Lw0AcxpNIKYV0cOlQpRUkxS/hCzgKFieXLg6ugp9A/ASCq4KLi5NUcBR8mfwG0iDYog7t4JBAKcXW5znvQpqqg16bCjm43iV3vf/vnrtc6FPT+CG5rjuL5nKv11tDOY+cR7aRdSQfg7wiP1qWdYmy6jjO83cDm181NBqNfLvd3jdNc6vf70991Uf3PcR6R6yTTCazVygUOIGBNAQKFdeh4Cl6ZQd6ju/Cg8IVqHsRDjkAWqvVdtB4gJlZoU5XqJ+lUqlb27Zfcrkcl+zPqdls2r7vz3S73SUMtom8qgaFuj3Ud0ul0mFwT1WoJADPFSQ6u8jbmNmN6jPKEvGXEfsI2WEcwiJvKGWFonJPPqBdLDc63KXT6XKxWHwbJVx07Hq9Pt3pdKqAXZRtHvbsAvesWGI+OCFINw5IglEYxoZQrgTNSjbD5BGEGTwhi6cbG3llXMstYYYKbgM80NdsAPQ78hwVLStI1K/ihiScZOBDbEi2siUPc95jOvssJuIzYCEjFeUbRyQeQaoedxlhmScoX4si8ZxU9bjLCEueoMG7W9dhrmOSERaboP8iJaC6lylRNFFUtwK6x0v2aKKobgV0j5fs0URR3QroHi/Zo6NQNLBoaLPoDvDb8VqtVtj78rn0gXNGL+i3A+v+nud5wW85MhL0UQWRhpW6jLWMsNBDFSaqgqKrNikpYCEjFa3SNpF0q7RT4iaVDMKGlGxVC/bJM2yTEwWH+hFdNXU97pKxyaDiko2M4hylHY0Gj41ocGj9xQEbsh2FR0omyWYIUOE/wo6GzHR6CbsI2PtxbgPGYkzGJgNZsDcrys8XRi4bmP6FNf6JahiY2UT+2SCWXkGyxMa9oB2N6nHoNAh3GUldxjpmbDJEgwwsfbQR6k7MH2IfQYM7P4m00d0AAAAASUVORK5CYII=",
        },
        {
          cont: "上过课的",
          flag: false,
          imgs:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTBDMUJFQTBCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTBDMUJFQTFCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MEMxQkU5RUI3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MEMxQkU5RkI3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr/wXDYAAAKySURBVHja7JmxattQFIYluaM8eKzboRAChjxAp8Yl7hZw6NC0g5cQx2OgTxD8BIWubfCSpVmCAx5j6mRpHiAQMIYOjTMGKo113P+Q/7YHtapjR74SJQd+jKQrnU/33nOu7rH745XzL3sMrUGr0AJUhHwnGQuhITSAOlA7tz/+FtfYjQEVoCa0AeUcOzaCWtAOgIfRi95fbqhC51DdIqRDX+LzfLTuVieBbkMHUF6dO4IaUInn3YSU5zMb9GFMzh8Adjtu6KuENPB9aAvqzbUb98c3477ulvHzAVrkpWvoJa4f6h6VObmnjk+gp/OGjAD36PNEjfYeXqCoQZtquPuM9CvHsgH2ir77aho0zdBLCvqqAue55Z78M/xvpsFnlQ2eeHyDnAqcnpOycRocqWyw5jGZG/vkZMc0y6rHFcfYcYZANcuCx4g3dpEhUM1S9CJrdzjFg1zm2S9QAI1jFLDNFu+57TzVLP6DGd/2IfPuyi3a+syPojdQDbqc1qE3A6Q7BWTUVnivawO0PiOkhq3bAN1MIFA2bYAuJQC6ZAM0iS983wZoKnYPeg/6P4KGCfgNbYCeJQB6ZgN0NwHQXRugH6HuHSC7fMbcQcf8VOvOCFnjM6xEvXxPvmCV43RCcIRs0+A9l7M4lO1yoNbefEJRfaftMrfMwvLdvKz0qK6cPcpQ6tR7uaGADtSJ5QyBapaBgHbUidcZAtUsHQFts2wiVoHKaROypFMxh8IooFKObql2UvorpAhZIIOxlpTMTXra4f5bbJG9XEgJsu38rpEGZPuVR4dMxNc8fsbcV7Y83Kf07ZClZur50T8bpBz9LrIQSFVNClbHLLMklWd9psNlBk5FXRPIt4B8rxN+1KosEuRTmqYBe/Jw0hIqDUr8cBjZnKL0WYpCxvWotsz8IfZTgAEAf3S9TaQBanUAAAAASUVORK5CYII=",
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAqpJREFUWAntmT1Lw0AcxpNIKYV0cOlQpRUkxS/hCzgKFieXLg6ugp9A/ASCq4KLi5NUcBR8mfwG0iDYog7t4JBAKcXW5znvQpqqg16bCjm43iV3vf/vnrtc6FPT+CG5rjuL5nKv11tDOY+cR7aRdSQfg7wiP1qWdYmy6jjO83cDm181NBqNfLvd3jdNc6vf70991Uf3PcR6R6yTTCazVygUOIGBNAQKFdeh4Cl6ZQd6ju/Cg8IVqHsRDjkAWqvVdtB4gJlZoU5XqJ+lUqlb27Zfcrkcl+zPqdls2r7vz3S73SUMtom8qgaFuj3Ud0ul0mFwT1WoJADPFSQ6u8jbmNmN6jPKEvGXEfsI2WEcwiJvKGWFonJPPqBdLDc63KXT6XKxWHwbJVx07Hq9Pt3pdKqAXZRtHvbsAvesWGI+OCFINw5IglEYxoZQrgTNSjbD5BGEGTwhi6cbG3llXMstYYYKbgM80NdsAPQ78hwVLStI1K/ihiScZOBDbEi2siUPc95jOvssJuIzYCEjFeUbRyQeQaoedxlhmScoX4si8ZxU9bjLCEueoMG7W9dhrmOSERaboP8iJaC6lylRNFFUtwK6x0v2aKKobgV0j5fs0URR3QroHi/Zo6NQNLBoaLPoDvDb8VqtVtj78rn0gXNGL+i3A+v+nud5wW85MhL0UQWRhpW6jLWMsNBDFSaqgqKrNikpYCEjFa3SNpF0q7RT4iaVDMKGlGxVC/bJM2yTEwWH+hFdNXU97pKxyaDiko2M4hylHY0Gj41ocGj9xQEbsh2FR0omyWYIUOE/wo6GzHR6CbsI2PtxbgPGYkzGJgNZsDcrys8XRi4bmP6FNf6JahiY2UT+2SCWXkGyxMa9oB2N6nHoNAh3GUldxjpmbDJEgwwsfbQR6k7MH2IfQYM7P4m00d0AAAAASUVORK5CYII=",
        },
      ],
      lwh_term_six: [
        {
          title: "男",
          id: 0,
        },
        {
          title: "女",
          id: 1,
        },
      ],
      lwh_term_gradeIndex: null,

      lwh_term_subjectIndex: null,
      lwh_term_sixIndex: null,
      lwh_term_listIndex: null,
      lwh_trem_obj: {
        trem_type: "",
      },
    };
  },
  created() {},
  mounted() {
    this.lwh_btn_list();
    this.lwh_btn_data();
    this.$nextTick(() => {
      this.lwh_bsBox();
    });
    // 老师条件获取事件调用===
    this.getCondition();
    // 老师列表获取事件调用
    this.getTeacherList();
  },
  activated() {},
  update() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/search");
    },
    // 老师条件获取=========
    getCondition() {
      axios
        .get("https://www.365msmk.com/api/app/otoCourseOptions?")
        .then((res) => {
          // console.log(res.data.data);
          this.gradeList = res.data.data.attrList[0];
          // console.log(this.gradeList);
          this.subjectList = res.data.data.attrList[1];
          // console.log(this.subjectList);
          this.typeList = res.data.data.otoTeacherLevel;
          // console.log(this.typeList);
        });
    },
    // 老师列表数据获取====
    getTeacherList(
      typeID,
      GradeId,
      subjectID,
      sexId,
      guanzhuId,
      shangkeId,
      fenleiBox,
      startTime,
      endTime
    ) {
      axios
        .get("https://www.365msmk.com/api/app/otoCourse", {
          params: {
            page: 1,
            limit: 10,
            start_time: startTime,
            end_time: endTime,
            level_id: typeID || "",
            is_collect: guanzhuId,
            is_attended: shangkeId,
            sex: sexId,
            attr_val_id: fenleiBox,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.techerList = res.data.data;
        });
    },
    // 点击进入预约课程
    toOtoPlan(item) {
      // console.log(item.teacher_id);
      this.$router.push({
        path: "/wsyOto-plan",
        query: { id: item.teacher_id },
      });
    },
    // 滑动事件
    lwh_bsBox() {
      setTimeout(() => {
        this.bs = new BetterScroll(this.$refs.scrollBox, {
          probeType: 3,
          click: true,
          bounce: {
            bottom: false,
          },
        });
        // 下滑禁用
        this.bs.on("scroll", (pos) => {
          if (pos.y >= 0) {
            this.bs.scrollTo(0, 0);
          }
        });
      }, 200);
    },
    // 点击年级分类
    onGrade(item, index) {
      this.lwh_term_gradeIndex = index;
      this.GradeId = item.attr_val_id;
      if (this.subjectID == "") {
        this.fenleiBox = [0, this.GradeId];
      } else {
        this.fenleiBox = [this.subjectID, this.GradeId];
      }
      this.$store.commit("fenleiBox1",this.fenleiBox)
      console.log(this.fenleiBox);
    },
    // 点击学科分类
    onSubject(item, index) {
      this.lwh_term_subjectIndex = index;
      this.subjectID = item.attr_val_id;
      if (this.GradeId == "") {
        this.fenleiBox = [this.subjectID, 0];
      } else {
        this.fenleiBox = [this.subjectID, this.GradeId];
      }
      this.$store.commit("fenleiBox2",this.fenleiBox)
      console.log(this.fenleiBox);
    },
    // 点击老师类型
    lwh_btn_type(index, item) {
      this.lwh_term_listIndex = index;
      this.lwh_trem_obj.trem_type = item;
      console.log(item.level_id);
      this.typeID = item.level_id;
    },
    // 点击性别
    onSex(item, index) {
      this.lwh_term_sixIndex = index;
      console.log(item.id);
      this.sexId = item.id;
    },
    // 点击只看
    lwh_btn_check(index, item) {
      this.lwh_term_check[index].flag = !this.lwh_term_check[index].flag;
      if (index == 0) {
        if (this.guanzhuId == 0) {
          this.guanzhuId = 1;
        } else {
          this.guanzhuId = 0;
        }
      }
      if (index == 1) {
        if (this.shangkeId == 0) {
          this.shangkeId = 1;
        } else {
          this.shangkeId = 0;
        }
      }
    },
    // 点击日历
    onSelect(value) {
      let date = new Date(value);
      console.log(date);
      let timeStr = date.getDate();
      console.log(timeStr);
    },
    // 结束时间
    lwh_confirm(val) {
      console.log(val);
      this.endTime = this.startTime = `%20${val}`
      console.log(this.endTime);
      this.leavetime = val;
      this.shows = false;
    },
    // 开始时间
    btn(value) {
      console.log(value);
      this.startTime = `%20${value}`
      console.log(this.startTime);
      this.currentTime = value;
      this.show = false;
    },
    // 点击底部确认
    onClickOk() {
      let box = []
      box = this.fenleiWrapper.join(",")
      this.$store.commit("fenleiBox3",this.fenleiBox)
      this.getTeacherList(
        this.typeID,
        this.GradeId,
        this.subjectID,
        this.sexId,
        this.guanzhuId,
        this.shangkeId,
        box,
        this.startTime,
        this.endTime
      );
      this.lwh_flag = 0;
    },
    // 点击底部重置
    onReset() {
      this.lwh_term_listIndex = null;
      this.lwh_term_sixIndex = null;
      this.lwh_term_gradeIndex = null;
      this.lwh_term_subjectIndex = null;
      this.typeID = "";
      this.GradeId = "";
      this.subjectID = "";
      this.guanzhuId = "";
      this.shangkeId = "";
      this.getTeacherList();
      this.lwh_flag = 0;
    },
    lwh_btn(index) {
      if (this.lwh_flag == 1 && index == 1) {
        this.lwh_flag = 0;
      } else if (this.lwh_flag == 2 && index == 2) {
        this.lwh_flag = 0;
      } else {
        this.lwh_flag = index;
      }
      setTimeout(() => {
        this.bs.refresh();
      }, 200);
    },
    // 时间获取
    lwh_btn_data() {
      let date = new Date();
      let num = 0;
      // 晚上12点时间获取
      const start = new Date(
        new Date(new Date().toLocaleDateString()).getTime() +
          24 * 60 * 60 * 1000 -
          1
      );
      console.log(start); //Mon Dec 04 2017 23:59:59 GMT+0800 (中国标准时间)
      // 现在时间获取
      let b = date.getTime();
      // 12点时间-现在时间
      let c = start.getTime() - b;
      // 保存下标到本地
      let indexadd = JSON.parse(window.localStorage.getItem("indexadd"));
      let indexdel = JSON.parse(window.localStorage.getItem("indexdel"));
      // 倒计时到达12点数值减1
      setTimeout(() => {
        indexadd--;
        window.localStorage.setItem("indexadd", indexadd);
        indexdel--;
        window.localStorage.setItem("indexdel", indexdel);

        if (indexdel == 0) {
          indexadd = 0;
          window.localStorage.setItem("indexadd", indexadd);
          indexdel = 13;
          window.localStorage.setItem("indexdel", indexdel);
        }
      }, c);
      let onum = 0;
      for (let index = indexadd; index <= indexdel; index++) {
        onum++;
        if (this.lwh_dates(index) == date.getDate()) {
          this.lwh_arr[onum] = {
            date: this.lwh_dates(index),
            flag: true,
            id: index,
          };
          num = index;
        } else {
          this.lwh_arr[onum] = {
            date: this.lwh_dates(index),
            flag: false,
            id: index,
          };
        }
      }
      onum = 0;
      this.lwh_arr.map((i) => {
        if (i.id < num) {
          i.dis = true;
        }
      });
      this.lwh_arr.splice(0, 1);
      console.log(indexadd, indexdel);
      console.log(this.lwh_arr);
    },
    lwh_dates(num) {
      let date = new Date();
      date.setDate(date.getDate() + num);
      return date.getDate();
    },
    lwh_index_btn(item, index) {
      if (item.dis) {
        return false;
      } else {
        this.lwh_index = index;
      }
    },
    
    lwh_btn_list() {
      for (let index = 0; index < 20; index++) {
        this.lwh_term_list.push(`M${index + 1}`);
      }
    },
  },
  filters: {
    sexFilter(val) {
      if (val == 0) {
        return "男";
      } else {
        return "女";
      }
    },
  },
  computed: {
    fenleiWrapper(){
      return this.$store.state.fenleiWrapper
    }
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.wsy_oto {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > .wsy_scroll {
    flex: 1;
    background: #f0f2f5;
    overflow: hidden;
  }
}
.scrollBox {
  width: 100%;
  min-height: 101%;
  position: relative;
}
.NavBar {
  color: #5a5a5a;
}
.lwh_tit {
  width: 100%;
  display: flex;
  > p {
    width: 50%;
    height: 0.44rem;
    text-align: center;
    background: #fff;
    line-height: 0.44rem;

    > img {
      width: 0.1rem;
      margin-bottom: 0.03rem;
    }
  }
}
.lwh_cont {
  width: 100%;
  padding: 0 0.15rem;
  box-sizing: border-box;
}
.wsy_item {
  width: 100%;
  margin-top: 0.1rem;
  height: 0.8rem;
  border-radius: 0.05rem;
  display: flex;
  background: #fff;
  padding: 0 0.15rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > :nth-child(2) {
    width: 0.6rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    border-radius: 0.2rem;
    background: #ebeefe;
    color: #eb6100;
  }
  > :nth-child(1) {
    display: flex;
    align-items: center;
    > img {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
    > div {
      width: 1rem;
      height: 0.4rem;
      margin-left: 0.15rem;
      // flex: 1;
      .gzSpan {
        color: red;
        font-size: 0.15rem;
        margin-left: 0.06rem;
      }
      > p {
        width: 1rem;
        margin: 0.01rem;
        .xbSpan {
          font-size: 0.12rem;
          margin-right: 0.1rem;
        }
      }
      > :nth-child(1) {
        color: #595959;
      }
      > :nth-child(2) {
        width: 3rem;
        font-size: 0.12rem;
        color: #b7b7b7;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
.lwh_cont_foot {
  width: 100%;
  height: 0.26rem;
  text-align: center;
  line-height: 0.26rem;
  color: #969799;
  font-size: 0.14rem;
}
.lwh_time {
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 1rem;
  left: 0;
  background: #f0f2f5;
  box-sizing: border-box;
  padding: 0 0.1rem;
  z-index: 2;
  > div:nth-of-type(1) {
    width: 100%;

    background: #fff;
    > p {
      width: 100%;
      box-sizing: border-box;
      padding: 0.15rem 0 0.1rem 0.1rem;
      font-size: 0.12rem;
    }
    > ul {
      width: 100%;
      height: 0.24rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 0.12rem;
    }
    > div {
      width: 100%;
      height: 1.5rem;
      box-sizing: border-box;
      padding: 0.1rem 0 0 0;
      display: flex;
      flex-wrap: wrap;
      > p {
        width: 14.28%;
        height: 0.61rem;
        text-align: center;
        line-height: 0.61rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        > font {
          width: 0.33rem;
          height: 0.33rem;
          display: block;
          text-align: center;
          line-height: 0.33rem;
        }
        > span {
          font-size: 0.14rem;
          color: #b7b7b7;
          position: absolute;
          bottom: -0.08rem;
          left: 0.12rem;
          display: none;
        }
        > .lwh_span_default {
          height: 0.16rem;
          line-height: 0.16rem;
          display: block;
        }
      }
      > .lwh_p_default {
        > font {
          background: #eb6100;
          color: #fff;
          border-radius: 50%;
        }
      }
      > .lwh_disable {
        > font {
          color: #b7b7b7;
        }
      }
    }
  }
  > div:nth-of-type(2) {
    width: 100%;
    height: 0.96rem;
    background: #fff;
    margin-top: 0.1rem;
    > p {
      width: 100%;
      box-sizing: border-box;
      padding: 0.15rem 0 0.1rem 0.1rem;
      font-size: 0.12rem;
    }
    > div {
      width: 100%;
      padding: 0 0.1rem;
      box-sizing: border-box;
      align-items: center;
      height: 0.36rem;
      display: flex;
      justify-content: space-between;
      > div {
        width: 1.5rem;
        height: 0.25rem;
        border: 0.01rem solid #b7b7b7;
        border-radius: 0.03rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span {
          text-align: center;
          font-size: 0.14rem;
          display: block;
          width: 1.13rem;
          height: 0.22rem;
          line-height: 0.22rem;
          color: #666;
          background: rgb(235, 235, 228);
        }
        > img {
          width: 0.14rem;
          height: 0.14rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
}
.lwh_btn {
  width: 100%;
  height: 0.45rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 3;
  > button {
    width: 50%;
    height: 100%;
    border: none;
    background: #eb6100;
    color: #fff;
  }
  > button:nth-of-type(1) {
    background: #fff;
    color: #eb6100;
  }
}
.lwh_term {
  width: 100%;
  margin-top: 0.01rem;
  background: #fff;
  margin-top: 0.01rem;
  box-sizing: border-box;
  padding: 0 0.1rem 0.45rem;
  .lwh_tit {
    width: 100%;
    padding: 0.16rem 0 0.1rem 0;
    box-sizing: border-box;
    height: 0.39rem;
    font-size: 0.12rem;
  }
  > div:nth-of-type(1) {
    width: 100%;
    height: 2.55rem;
    border-bottom: 0.01rem solid #f1f1f1;

    > ul {
      width: 100%;
      height: 2.05rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      > li {
        width: 0.65rem;
        height: 0.3rem;
        background: #f5f5f5;
        color: #646464;
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.3rem;
      }
      > .lwh_term_default {
        color: #eb6100;
      }
    }
  }
  > div:nth-of-type(2) {
    width: 100%;
    height: 0.72rem;
    box-sizing: border-box;
    padding-bottom: 0.1rem;
    border-bottom: 0.01rem solid #f1f1f1;
    > div {
      width: 100%;
      height: 0.22rem;
      display: flex;
      align-items: center;
      > p {
        display: flex;
        margin-right: 0.2rem;
        > img {
          width: 0.15rem;
          margin-right: 0.02rem;
        }
        span {
          font-size: 0.12rem;
          color: #8c8c8c;
        }
      }
    }
  }
  > div:nth-of-type(3) {
    width: 100%;
    height: 0.91rem;
    box-sizing: border-box;
    padding-bottom: 0.1rem;
    border-bottom: 0.01rem solid #f1f1f1;
    > div {
      width: 100%;
      height: 0.4rem;
      display: flex;
      > p {
        text-align: center;
        line-height: 0.33rem;
        width: 0.7rem;
        height: 0.33rem;
        background: #f5f5f5;
        color: #646464;
        margin-right: 0.23rem;
      }
      > .lwh_term_six {
        color: #eb6100;
      }
    }
  }
  > div:nth-of-type(4) {
    width: 100%;
    height: 1.73rem;
    box-sizing: border-box;
    padding-bottom: 0.1rem;
    border-bottom: 0.01rem solid #f1f1f1;
    > div {
      width: 100%;
      height: 1.22rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      > p {
        width: 0.7rem;
        height: 0.33rem;
        text-align: center;
        line-height: 0.33rem;
        background: #f5f5f5;
        color: #646464;
        margin-right: 0.23rem;
        font-size: 0.14rem;
      }
      > .lwh_term_grade {
        color: #eb6100;
        font-size: 0.14rem;
      }
    }
  }
  > div:nth-of-type(5) {
    width: 100%;

    box-sizing: border-box;
    padding-bottom: 0.1rem;
    border-bottom: 0.01rem solid #f1f1f1;
    > div {
      width: 100%;
      height: 0.82rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      > p {
        width: 0.7rem;
        height: 0.33rem;
        text-align: center;
        line-height: 0.33rem;
        background: #f5f5f5;
        color: #646464;
        margin-right: 0.23rem;
        font-size: 0.14rem;
      }
      > .lwh_term_subject {
        color: #eb6100;
        font-size: 0.14rem;
      }
    }
  }
}
.lwh_default {
  color: #eb6100;
}
.lwh_default > img {
  transform: rotate(180deg);
  margin: 0;
  transition: all 0.1s;
}
.lwh_date_default {
  background: #ebeefe;
  color: #eb6100;
  border-radius: 50%;
}
// .lwh_popup {
//   width: 100%;
//   > div {
//     width: 100%;
//     height: 0.45rem;
//     align-items: center;
//     display: flex;
//     box-sizing: border-box;
//     padding: 0 0.1rem;
//     justify-content: space-between;
//     border-bottom: 0.01rem solid #ebeefe;
//     > span {
//       color: #eb6100;
//     }
//   }
// }
</style>
