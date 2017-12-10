<template>
  <div class="top-box">
    <div class="search-box">
      <input type="text" :placeholder="pltext">
      <img src="../assets/icon/galss_03.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['pltext']
}
</script>

<style>
  input{
    border: none;
    outline: none;
    width: 90%;
    height: 1.35rem;
    border-radius: 20px;
    border: 1px solid #d7d7d7;
    background-color: transparent;
    margin-top: 0.35rem;
    text-indent: 1.8rem;
    font-size: 16px;
  }
  input::-webkit-input-placeholder{
    color: #b2b2b2;
    opacity:1;
  }
  .top-box img{
    width: 0.95rem;
    height: 0.95rem;
    position: absolute;
    top: 0.6rem;
    left: 1.3rem;
  }
  .top-box{
    position: relative;
  }
</style>
