<template>
  <div class="container">
    <div id="app">
      <router-view></router-view>
      <tabbar></tabbar>
    </div>
  </div>
</template>
<script>
import tabbar from './components/tabbar.vue'
export default {
  components: {
    tabbar
  }
}
</script>

<style>
*{margin: 0;padding: 0}
  html{
    font-size: 20px;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
.container {
  width: 100%;
  max-width: 1024px;
  min-width: 300px;
  margin: 0 auto;
}
</style>
