<template>
    <div class="picture">
      <div class="item">
        <img src="../assets/icon/list.png" alt="">
        <span>全部订单</span>
      </div>
      <div class="item">
        <img src="../assets/icon/69.png" alt="">
        <span>待付款</span>
      </div>
      <div class="item">
        <img src="../assets/icon/bi.png" alt="">
        <span>未出行</span>
      </div>
      <div class="item">
        <img src="../assets/icon/talk1.png" alt="">
        <span>待点评</span>
      </div>
      <div style="clear: both"></div>
      <bar1 tit4="我的相册">
        <img src="../assets/icon/pict.png" slot="pict">
      </bar1>
      <bar1 tit4="我的行程">
        <img src="../assets/icon/ditu.png" slot="pict">
      </bar1>
      <bar1 tit4="我的游记">
        <img src="../assets/icon/ditu2.png" slot="pict">
      </bar1>
      <bar1 tit4="我的财富">
        <img src="../assets/icon/qianbao.png" slot="pict">
      </bar1>
    </div>
</template>

<script>
  import bar1 from '../components/bar.vue'
    export default {
      components:{
        bar1
      }
    }
</script>

<style scoped>
.picture{
  width: 94%;
  height: 14.5rem;
  margin: 1rem auto;
}
  .item{
    width: 25%;
    float: left;
    text-align: center;
  }
.item img{
  width: 1.75rem;
  height: 2.35rem;

}
.item span{
  font-size: 14px;
  width: 100%;
  display: inline-block;
  color: #676c73;
}
</style>
