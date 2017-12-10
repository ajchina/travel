<template>
  <div class="rei">
    <lv hot1="上海迪士尼" hot2="云南" hot3="厦门" hot4="香港" hot5="法国" hot6="泰国" hot7="美国" hot8="欧洲">
      <img src="../assets/img/search0407_01.jpg" slot="one">
      <img src="../assets/img/search0407_02.jpg" slot="two">
      <img src="../assets/img/search0407_03.jpg" slot="three">
      <img src="../assets/img/search0407_04.jpg" slot="four">
      <img src="../assets/img/search0407_05.jpg" slot="five">
      <img src="../assets/img/search0407_06.jpg" slot="six">
      <img src="../assets/img/search0407_07.jpg" slot="seven">
      <img src="../assets/img/search0407_08.jpg" slot="aight">
    </lv>
  </div>
</template>

<script>
  import lv from './../components/lv.vue'
  export default {
    components: {
      lv
    },
  }
</script>

<style>
.rei{
  position: absolute;
  left: 3.4rem;
  padding: 0.5rem;
  box-sizing: border-box;
}
</style>
