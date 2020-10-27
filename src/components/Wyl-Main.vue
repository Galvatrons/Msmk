<template>
  <div>
    <div class="Main-box">
      <div class="Main-top">
          <div class="top1">头像</div>
          <div class="top2">
              <div>
                  <span>1</span>
                  <p>我的特色课</p>
                  <p style=" color: gray;">已购特色课程的学习</p>
              </div>
              <div>
                  <span>0</span>
                  <p>一对一辅导</p>
                  <p style=" color: gray;">我的一对一老师辅导</p>
              </div>
              <div>
                  <span>0.00</span>
                  <p>剩余学习币</p>
                  <p style=" color: gray;">查看剩余学习币</p>
              </div>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Main-box {
  width: 100vw;
  height: 1.2rem;
  background: rgb(255, 81, 0);
  border-radius: 0px 0px 26px 26px;
}
.Main-top {
  width: 85vw;
  height: 2rem;
  position: relative;
  top: 0.4rem;
  left: 29px;
 
}
.Main-top .top1{
    width: 100%;
    height: 50%;
    background: rgb(255, 255, 255);
}
.Main-top .top2{
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: space-between;
}
.Main-top .top2 span{
    color: crimson;
    font-size: 18px;
    font-weight: 800;
}
.Main-top .top2 div{
  margin: 0px 3px;
  background: rgb(219, 214, 214);
  width: 33%;
  text-align: center;
}
.Main-top .top2 p{
    font-size: 12px;
}
</style>