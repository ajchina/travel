<template>
  <div class="history-box">
    <title1 tit="浏览历史">
      <span slot="qing">清空</span>
    </title1>
    <dui></dui>
  </div>
</template>

<script>
  import title1 from '../components/placeTitle.vue'
  import dui from '../components/duihua.vue'
  export default {
    components:{
      title1,
      dui
    }
  }
</script>

<style>
.history-box{
  width: 100%;
}
</style>
