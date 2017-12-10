<template>
  <div class="topbar-box">
    <search pltext="国内游，国际游，周边游"></search>
  </div>
</template>

<script>
import search from '../components/search.vue'
  export default {
    components: {
      search
    }
  }
</script>

<style>
  .b{
    position: static;
    background-color: #1448ae;
  }
.topbar-box{
  width: 100%;
  height:2.2rem;
  background-color: #4d4d4d;
  opacity: 0.4;
  text-align: center;
  position: fixed;
  z-index: 99;
}

</style>
