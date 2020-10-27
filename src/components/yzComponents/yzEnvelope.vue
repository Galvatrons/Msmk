<template>
  <div>
      <div class="yz_envelope_container">
          <img src="../../assets/xinfeng.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .yz_envelope_container{
        width: 0.6rem;
        height: 0.6rem;
        position: fixed;
        right: 0.1rem;
        bottom: 0.8rem;
        z-index: 10000000;
        background-color: #007AFF;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 0.27rem;
        }
    }
</style>