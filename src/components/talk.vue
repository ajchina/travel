<template>
  <div class="talk">
    <p v-text="tao"></p>
    <div class="both"></div>
    <span v-text="pri"><i>起</i></span>
    <div class="imges">
      <slot name="history"></slot>
    </div>
  </div>
</template>

<script>
    export default {
      props:['tao','pri']
    }
</script>

<style scoped>
  .talk{
    width: 91%;
    height: 3.95em;
    float: right;
    background-size: cover;
    background: url("../assets/icon/bian1.png") no-repeat;
    margin-top: 0.8rem;
  }
  .talk img{
    width: 100%;

  }
  .talk p{
    display: inline-block;
    width: 66%;
    text-align: left;
    font-size: 14px;
    top: 0.6rem;
    left: 0;
    top: 36px;
    left: 46px;
    color: #797979;
    font-family: '微软雅黑';
    font-weight: 600;
    float: left;
    margin-left: 20px;
    margin-top: 10px;
  }
  .talk span{
    color: #f88412;
    display: -webkit-box;
    margin-left: 16px;
    margin-top: 4px;
  }
  .both{
    clear: both;
  }
  .talk span i{
    font-style: normal;
    font-size: 12px;
    color: #818181;
  }
  .talk .imges{
    width: 76px;
    height: 58px;
    float: right;
    margin-top: -67px;
    border-radius: 10px;
    margin-right: 8px;
  }
  .imges img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
</style>
