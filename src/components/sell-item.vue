<template>
  <div class="con">
    <div class="item-box">
      <div class="left">
        <slot name="sellImg"></slot>
        <p v-text="sellTitle"></p>
        <div class="price">
          <span>席位充足</span>
          <span>￥1999 <i>起</i></span>
        </div>
      </div>
      <div class="right">
        <slot name="sellImg1"></slot>
        <p v-text="sellTitle1"></p>
        <div class="price1">
          <span>席位充足</span>
          <span>￥2999 <i>起</i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['sellTitle','sellTitle1']
}
</script>

<style>
  .con{
    width: 100%;

  }
.item-box{
  width: 94%;
  height: 9rem;
  margin: 8px auto;
}
  .left{
    width: 8.5rem;
    height: 9rem;
    float: left;
    border: 1px solid #ccc;
  }
  .left img{
    width: 100%;
  }
  .left p{
    display: inline-block;
    width: 8.2rem;
    height: 1.45rem;
    font-size: 14px;
    margin-top: 0.1rem;
    font-weight: 500;
    margin-left: 0.6rem;
  }
  .price{
    width: 100%;
    font-size: 13px;
  }
  .price span:nth-of-type(1){
    display: inline-block;
    float: left;
    margin-left: 0.5rem;
    margin-top: 0.3rem;
    color: #959595;
  }
  .price span:nth-of-type(2){
    float: right;
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 0.1rem;
    color: #ff9900;
    font-size: 16px;

  }
  .price span:nth-of-type(2) > i{
    font-style: normal;

  }
  .right{
    width: 8.5rem;
    height: 9rem;
    float: right;
    border: 1px solid #ccc;
  }
  .right img{
    width: 100%;
  }
  .right p{
    display: inline-block;
    width: 8.2rem;
    height: 1.45rem;
    font-size: 14px;
    margin-top: 0.1rem;
    font-weight: 500;
    margin-left: 0.6rem;
  }
  .price1{
    width: 100%;
    font-size: 13px;
  }
  .price1 span:nth-of-type(1){
    display: inline-block;
    float: left;
    margin-left: 0.5rem;
    margin-top: 0.3rem;
    color: #959595;
  }
  .price1 > span:nth-of-type(2){
    float: right;
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 0.1rem;
    color: #ff9900;
    font-size: 16px;

  }
  .price1 span:nth-of-type(2) i{
    font-style: normal;
    color: #959595;
    font-size: 14px;
  }
  .price span:nth-of-type(2) > i {
    font-style: normal;
    color: #959595;
    font-size: 14px;
  }
</style>
