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
    <sell-item></sell-item>
    <sell-item></sell-item>
    <sell-item></sell-item>
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
