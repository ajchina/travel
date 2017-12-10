<template>
  <div class="mine-box">
    <title2 tit="个人"></title2>
    <div class="top-bar">
      <img src="../assets/icon/ke.png" alt="">
    </div>
    <ding></ding>
  </div>
</template>

<script>
import title2 from '../components/placeTitle.vue'
import ding from '../components/ding.vue'
  export default {
    components:{
      title2,
      ding
    }
  }
</script>

<style>
.mine-box{
  width: 100%;
}
  .top-bar{
    width: 100%;
    height: 13rem;
  }
.top-bar img{
  width: 100%;
  height: 100%;
}
</style>
