<template>
  <div>
    <topbar></topbar>
    <banner></banner>
    <sec title="旅游" text="出境游" text1="国内游" text2="周边游" text3="当地游" type="color" type1="success2">
      <img src="../assets/icon/ltbtn0323_03.png" slot="usa">
      <img src="../assets/icon/ltbtn0323_13.png" slot="china">
      <img src="../assets/icon/ltbtn0323_06.png" slot="zou">
      <img src="../assets/icon/ltbtn0323_10.png" slot="dang">
      <img src="../assets/icon/btnlist0323_03.jpg" slot="hot1">

    </sec>
    <sec title="机票" text="低价机票" text1="汽车票/船票" text2="火车票" text3="专车/自驾" class="a" type2="success"
         type="color1" type1="color2" type3="color3">
      <img src="../assets/icon/btnlist0323_06.jpg" slot="air">
      <img src="../assets/icon/ltbtn0323_10.png" slot="train">
    </sec>
    <sec title="酒店" text="海外酒店" text1="国内酒店" text2="热门酒店" text3="特色酒店" type="success1"
         type2="color4" type4="color5">
      <img src="../assets/icon/btnlist0323_12.jpg" slot="hotal">
    </sec>
    <second-banner></second-banner>
    <sell></sell>
    <sell-item sellTitle="台湾环岛8日7晚跟团游。甩尾狂甩3人行1人免单"
               sellTitle1="巴厘岛7日5晚自由行。五星豪庭，三星价格特...">
      <img src="../assets/img/item-img0329_01.jpg" slot="sellImg">
      <img src="../assets/img/item-img0329_02.jpg" slot="sellImg1">
    </sell-item>
    <sell-item sellTitle="韩国首尔5日4晚跟团游。暑假预售商圈五花，好..."
               sellTitle1="马尔代夫6日自由行·6日4晚。全球顶级海岛蜜月...">
      <img src="../assets/img/item-img0329_03.jpg" slot="sellImg">
      <img src="../assets/img/item-img0329_04.jpg" slot="sellImg1">
    </sell-item>
    <sell-item sellTitle="香港5日自由行·仅含王法机票。星光大道+天王星"
               sellTitle1="新加坡5日4晚自由行。错峰周末游，特赠送价值">
      <img src="../assets/img/item-img0329_05.jpg" slot="sellImg">
      <img src="../assets/img/item-img0329_06.jpg" slot="sellImg1">
    </sell-item>
    <bot></bot>
  </div>
</template>
<script>
import topbar from '../components/topbar.vue'
import banner from '../components/banner.vue'
import sec from '../components/section.vue'
import secondBanner from '../components/banner2.vue'
import sell from '../components/sell.vue'
import sellItem from '../components/sell-item.vue'
import bot from '../components/bottom.vue'
  export default {
    components: {
      topbar,
      banner,
      sec,
      secondBanner,
      sell,
      sellItem,
      bot
    }
  }
</script>

<style>

</style>
