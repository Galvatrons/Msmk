<template>
  <div>
        <van-tabs swipeable>
        <van-tab  title="全部订单">
           
          <img class="picture" src="../../../assets/img/a.png" />
          <div class="sxlh6">暂无订单</div>
     
        </van-tab>
           <van-tab  title="待支付">
            <img class="picture" src="../../../assets/img/a.png" />  
          <div class="sxlh6">暂无订单</div>
         
        </van-tab>
           <van-tab  title="已完成">
          <img class="picture" src="../../../assets/img/a.png" />
          <div class="sxlh6">暂无订单</div>
        
        </van-tab>
           <van-tab title="已取消">
          <img class="picture" src="../../../assets/img/a.png" />
          <div class="sxlh6">暂无订单</div>
        
        </van-tab>

       
      </van-tabs>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.picture {
  width: 2rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
}
.sxlh6 {
  text-align: center;
  font-size: 0.18rem;
  margin-top: 0.1rem;
  color: gray;
  /* font-weight: 800; */
}
.registration {
  width: 0.8rem;
  height: 0.3rem;
  background: #eb6100;
  margin-left: 1.5rem;
  margin-top: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.14rem;
}
</style>