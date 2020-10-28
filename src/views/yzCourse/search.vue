<template>
  <div>
    <div class="yz_search_head">
      <div class="back_icon">
        <van-icon name="arrow-left" @click="onBack" />
      </div>
      <div class="search_input">
        <input
          type="text"
          v-model="searchText"
          @input="onInput($event)"
          placeholder="请输入内容"
        />
      </div>
      <div class="yz_cancel" v-show="!show" @click="onCancel">取消</div>
      <div class="yz_cancel" v-show="show" @click="onSearch">搜索</div>
    </div>
    <div class="yz_history_container" v-show="!show">
      <div class="history_title">
        <span>历史搜索</span>
        <div class="yz_remove" @click="onRemove">
          <van-icon name="delete" />
        </div>
      </div>
      <div class="history_item_wrapper">
        <span
          class="history_item"
          v-for="(item, index) in history"
          :key="index"
          >{{ item }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      show: false,
      history: JSON.parse(localStorage.getItem("history")) || [],
    };
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    onCancel() {
      this.$router.go(-1);
    },
  },
  onInput(event) {
    var inputValue = event.target.value;
    if (inputValue.length == 0) {
      this.show = false;
    } else {
      this.show = true;
    }
  },
  onSearch() {
    var index = this.history.findIndex((item) => {
      return item == this.searchText;
    });
    if (index != -1) {
      this.history.splice(index, 1);
    }
    this.history.unshift(this.searchText);
    if (this.history.length > 5) {
      this.history.pop();
    }
    localStorage.setItem("history", JSON.stringify(this.history));
  },
  onRemove() {
    localStorage.removeItem("history");
    this.history = [];
  },
};
</script>

<style lang="scss" scoped>
.yz_search_head {
  width: 100%;
  height: 0.53rem;
  border-bottom: 0.001rem solid rgb(223, 221, 221);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.1rem;
  box-sizing: border-box;
  .back_icon {
    .van-icon {
      font-size: 0.2rem;
    }
  }
  .search_input {
    input {
      width: 3rem;
      height: 0.35rem;
      background-color: #e4e7ed;
      border: none;
      outline: none;
      border-radius: 0.2rem;
      padding-left: 0.2rem;
      box-sizing: border-box;
    }
  }
}
.yz_history_container {
  width: 100%;
  .history_title {
    width: 100%;
    height: 0.43rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    box-sizing: border-box;
    span {
      font-size: 0.16rem;
      font-weight: bold;
    }
    .yz_remove {
      height: 100%;
      line-height: 0.5rem;
      .van-icon {
        font-size: 0.2rem;
      }
    }
  }
  .history_item_wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 0.2rem;
    box-sizing: border-box;
    .history_item {
      background-color: rgb(228, 226, 226);
      padding: 0.03rem 0.1rem;
      font-size: 0.15rem;
      border-radius: 0.16rem;
      margin-right: 0.1rem;
      margin-top: 0.1rem;
    }
  }
}
</style>
