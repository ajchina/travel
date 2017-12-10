<template>
    <div class="place-box">
      <img src="../assets/icon/fan.png" alt="">
      <span v-text="tit"></span>
      <slot name="qing"></slot>
    </div>
</template>

<script>
    export default {
      props:['tit']
    }
</script>

<style>
  .place-box{
    width: 100%;
    height: 2.2rem;
    background-color: #1448ae;
    line-height: 2.2rem;
    color: #fff;
    position: relative;
    font-size: 22px;
    text-align: center;
  }
  .place-box img{
    position: absolute;
    left: 1rem;
    top: 0.6rem;
    width: 0.5rem;
    height: 0.9rem;
  }
  .place-box span:nth-of-type(1){
    font-size: 18px;
  }
  .place-box span:nth-of-type(2){
    position:absolute;
    font-size: 14px;
    right: 30px;
  }
</style>
