<template>
  <div class="bar">
    <slot name="day"></slot>
    <img src="../assets/icon/qi.png" alt="">
    <slot name="line"></slot>
    <slot name="line2"></slot>
  </div>
</template>

<script>

</script>

<style>
  .bar > span{
    font-size: 14px;
    display: inline-block;
    margin-bottom: 0.2rem;
  }
  .bar > img{
    width: 1.25rem;
    height: 1.25rem;
  }
  .bar > .line{
    width: 0.05rem;
    height: 3.4rem;
    background-color: #ccc;
    margin-left: 0.7rem;
    margin-top: -0.125rem;
  }
  .bar > .line2{
    width: 0.05rem;
    height: 1.9rem;
    background-color: transparent;
    margin-left: 0.7rem;
    margin-top: -0.125rem;
  }
</style>
