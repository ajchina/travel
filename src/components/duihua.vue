<template>
    <div class="list-box">
      <div class="left-box">
        <left-bar>
          <span slot="day">今天</span>
          <div class="line" slot="line"></div>
        </left-bar>
        <left-bar>
          <div class="line" slot="line"></div>
        </left-bar>
        <left-bar></left-bar>
      </div>
      <div class="left-box1">
        <left-bar>
          <span slot="day">昨天</span>
          <div class="line2" slot="line2"></div>
        </left-bar>
        <left-bar>
          <span slot="day">前天</span>
          <div class="line" slot="line"></div>
        </left-bar>
        <left-bar></left-bar>
      </div>
      <talk tao="云南昆明+大理+丽江+西双版纳8月7晚跟团游·享4飞经典套餐..." pri="￥2990">
        <img src="../assets/img/history-lis0421_03.jpg" slot="history">
      </talk>
      <talk tao="海南三亚6月5日晚跟团游(5钻)纯游限时促，享4飞经典套餐..." pri="￥3459">
        <img src="../assets/img/history-lis0421_06.jpg" slot="history">
      </talk>
      <talk tao="摄影之旅·广西桂林+漓江+阳朔+南宁+德天瀑布+巴马+北海..." pri="￥3200">
        <img src="../assets/img/history-lis0421_08.jpg" slot="history">
      </talk>
      <talk tao="乐园游·泰国普吉岛7日跟团游(5钻)·【A线直飞】0自费全程" pri="￥3468">
        <img src="../assets/img/history-lis0421_10.jpg" slot="history">
      </talk>
      <talk tao="巴厘岛7日5晚自由行(5钻)2晚私密别墅+3晚海边酒店·蜜月..." pri="￥4999">
        <img src="../assets/img/history-lis0421_12.jpg" slot="history">
      </talk>
      <talk tao="九江+景德镇+婺源4日跟团游(4钻)·花开正浓梯田花海深..." pri="￥5399">
        <img src="../assets/img/history-lis0421_14.jpg" slot="history">
      </talk>
    </div>
</template>

<script>
  import leftBar from '../components/left-bar.vue'
  import talk from '../components/talk.vue'
    export default {
      components:{
        leftBar,
        talk
      }
    }
</script>

<style>
.list-box{
  width: 94%;
  height: 300px;
  margin: 0 auto;
  position: relative;
  text-align: center;
}
  .left-box{
    width: 1.5rem;
    height: 15rem;
    position: absolute;
    top: 0.5rem;
  }
.left-box1{
  width: 1.5rem;
  top: 14.7rem;
  height: 13.6rem;
  position: absolute;
}
  .left-box span{
    font-size: 14px;
    display: inline-block;
    margin-bottom: 0.2rem;
  }
  .left-box img{
    width: 1.25rem;
    height: 1.25rem;
  }
.left-box .line{
  width: 0.05rem;
  height: 3.45rem;
  background-color: #ccc;
  margin-left: 0.7rem;
  margin-top: -0.125rem;
}
.list-box .talk{
  width: 91%;
  height: 3.95em;
  float: right;
}
.list-box .talk img{
  width: 100%;

}
.list-box p{
  display: inline-block;
  width: 66%;
  text-align: left;
  font-size: 14px;
  top: 0.6rem;
  left: 0;
  top: 36px;
  left: 46px;
  color: #818181;
  font-family: '方正兰亭超细黑简体';
  font-weight: 600;
  float: left;
  margin-left: 20px;
  margin-top: 10px;
}
.list-box .talk{
  background-size: cover;
  background: url("../assets/icon/bian1.png") no-repeat;
  margin-top: 0.8rem
}
  .talk span{
    color: #f88412;
    display: -webkit-box;
    margin-left: 16px;
    margin-top: 4px;
  }
</style>
