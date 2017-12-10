<template>
  <div>
    <title1 tit="选择目的地"></title1>
    <topbar class="b" style="position: relative">
      <search pltext="春季旅游节"></search>
    </topbar>
    <hot></hot>
    <router-view></router-view>
  </div>
</template>

<script>
import title1 from '../components/placeTitle.vue'
import topbar from '../components/topbar.vue'
import search from '../components/search.vue'
import hot from './../components/place-sec.vue'
  export default {
    components: {
      title1,
      topbar,
      search,
      hot
    }
  }
</script>

<style>

</style>
