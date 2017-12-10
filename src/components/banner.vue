<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./../assets/img/banner1.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./../assets/img/banner2.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./../assets/img/banner3.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./../assets/img/banner4.jpg" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from './../../node_modules/swiper/dist/js/swiper.min'
  export default {
      mounted: function () {
        new Swiper ('.swiper-container', {
          loop: true,
          autoplay:true,
          bulletClass : 'my-bullet',
          bulletActiveClass: 'my-bullet-active',
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }
  }
</script>

<style>
  @import "./../../node_modules/swiper/dist/css/swiper.min.css";
  .swiper-container img{
    width: 100%;
  }
  .banner-box{
    position: relative;
  }
.banner-box img{
  width: 100%;
}
.banner-box ul{
  position: absolute;
  bottom: 0.6rem;
  right: 0.6rem;
}
  .banner-box .active1{
    background-color: #0099cc;
  }
  .banner-box ul li{
    width:0.2rem;
    height: 0.2rem;
    background-color: transparent;
    border: 2px solid #0099cc;
    float: left;
    border-radius: 50%;
    margin-left: 0.2rem;
  }
  .swiper-pagination{
    text-align: right;
  }
  .swiper-pagination-bullet-active{
    border: 2px solid #0099cc;

  }
</style>
