<template>
  <div class="bar1-box">
    <div class="imgs-box">
      <slot name="pict"></slot>
      <span v-text="tit4"></span>
    </div>
    <div class="right-box">
      <img src="../assets/icon/arrow_03.png" alt="">
    </div>
  </div>

</template>

<script>
export default {
  props:['tit4']
}
</script>

<style>
  .bar1-box{
    height: 2.6rem;
    width: 100%;
  }
  .imgs-box{
    height: 2.6rem;
    float: left;
    line-height: 2.6rem;
    margin-left: 0.6rem;
    color: #676c73;
    font-size: 0.8rem;
  }
  .imgs-box img{
    width: 1.6rem;
    height: 1.4rem;
    padding:0 0.8rem;
    vertical-align: middle;
  }
  .right-box{
    float: right;
  }
  .right-box img{
    width: 0.8rem;
    height: 1.3rem;
    padding: 0.5rem 1.6rem;
    margin-left: 3rem;
  }
</style>
