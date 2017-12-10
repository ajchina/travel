<template>
  <div class="tabbar-box">
    <router-link to="/home">
      <item iconText="首页" index="#/home" @clickIndex="getIndex" :selected="selected">
        <img src="../assets/icon/footer_0322_01.png" slot="normalicon">
        <img src="../assets/icon/footer_0322_05.png" slot="activeicon">
      </item>
    </router-link>
    <router-link to="/place">
      <item iconText="目的地" index="#/place" @clickIndex="getIndex" :selected="selected">
        <img src="../assets/icon/footer_0322_02.png" slot="normalicon">
        <img src="../assets/icon/footer_0322_06.png" slot="activeicon">
      </item>
    </router-link>
    <router-link to="/history">
      <item iconText="浏览历史" index="#/history" @clickIndex="getIndex" :selected="selected">
        <img src="../assets/icon/footer_0322_03.png" slot="normalicon">
        <img src="../assets/icon/footer_0322_07.png" slot="activeicon">
      </item>
    </router-link>
    <router-link to="/mine">
      <item iconText="个人" index="#/mine" @clickIndex="getIndex" :selected="selected">
        <img src="../assets/icon/footer_0322_04.png" slot="normalicon">
        <img src="../assets/icon/footer_0322_08.png" slot="activeicon">
      </item>
    </router-link>
  </div>
</template>

<script>
import item from './tabbaritem.vue'
export default {
  components: {
    item
  },
  data(){
    return{
      selected:''
    }
  },
  methods:{
    getIndex(val){
      this.selected = val;
    },
    created:function () {
      this.selected = window.location.hash
    }
  }
}
</script>

<style>
  .b{
    background-color: #1448ae;
    opacity: 1;
    border: none;
  }
.tabbar-box{
  width: 100%;
  height: 2.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ededed;
}
</style>
