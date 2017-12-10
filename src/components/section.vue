<template>
  <div class="sec-box">
    <div class="secImg">
      <slot name="hot1"></slot>
      <slot name="air"></slot>
      <slot name="hotal"></slot>
      <span v-text="title"></span>
    </div>
    <div class="secImg1">
      <span class="spans" :class="[classes2]">
        <slot name="usa"></slot>
        <p v-text="text"></p>
        <!--<img src="../assets/icon/ltbtn0323_03.png" alt="">-->
      </span>
      <span class="spans" :class="[classes3]">
        <slot name="china"></slot>
        <p v-text="text1"></p>
      </span>
      <span class="spans" :class="[classes1]">
        <slot name="zou"></slot>
        <slot name="train"></slot>
        <p v-text="text2"></p>
      </span>
      <span class="spans" :class="[classes]">
        <slot name="dang"></slot>
        <p v-text="text3"></p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title','text','text1','text2','text3','type','type1','type2','type3','type4'],
  computed:{
    classes(){
      return `spans-${this.type}`;
    },
    classes1(){
      return `spans-${this.type1}`
    },
    classes2(){
      return `spans-${this.type2}`
    },
    classes3(){
      return `spans-${this.type3}`
    },
    classes4(){
      return `spans-${this.type4}`
    }
  }
}
</script>

<style>
.sec-box{
  width: 96%;
  height: 4.6rem;
  margin: 0.5rem auto;
}
  .secImg{
    width: 5.45rem;
    height: 4.6rem;
    background-color: #52d742;
    float: left;
    position: relative;
  }
  .secImg > img{
    width: 100%;
  }
.secImg > span{
  display: inline-block;
  position: absolute;
  top: 0.5rem;
  left: 1.8rem;
  color: #fff;
  font-weight: 500;
}
.secImg1 > span > p{
  display: inline-block;
}
  .secImg1{
    width: 12.2rem;
    height: 4.65rem;
    float: right;
  }
.secImg1 .spans{
  display: inline-block;
  width: 6rem;
  height: 2.2rem;
  background-color: #ff9f26;
  float: left;
  line-height: 2.2rem;
  font-size: 1rem;
  text-align: center;
  color: #fff;
}
.secImg1 .spans-success{
  display: inline-block;
  width: 6rem;
  height: 2.2rem;
  float: left;
  line-height: 2.2rem;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  background-size:cover;
  background:url("../assets/icon/btnlist0323_03.jpg") no-repeat 1px 0;
}
.spans-success1{
  display: inline-block;
  width: 6rem;
  height: 2.2rem;
  float: left;
  line-height: 2.2rem;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  background-size: cover;
  background:url("../assets/icon/btnlist0323_14.jpg") no-repeat;
}
.secImg1 .spans-success2 {
  display: inline-block;
  width: 6rem;
  height: 2.2rem;
  float: left;
  line-height: 2.2rem;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  background-color: #7e83e3;
}
.secImg1 .spans-color{
  background-color: #de4a89;
}
.secImg1 .spans-color1{
  background-color: #3aace0;
}
.secImg1 .spans-color2{
  background-color: #33b6d2;
}
.secImg1 .spans-color3{
  background-color: #31c6cc;
}
.secImg1 .spans-color4{
  background-color: #bac731;
}
.secImg1 .spans-color5{
  background-color: #82c731;
}
.secImg1 span > img{
  width: 1.4rem;
  height: 1.3rem;
  vertical-align: sub;
}
.secImg1 span:nth-of-type(2n){
  margin-left: 0.2rem;
}
.secImg1 span:nth-of-type(n+3){
  margin-top: 0.2rem;
}

</style>
