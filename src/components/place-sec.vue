<template>
    <div class="conta">
      <div class="left-bar">
        <router-link v-for="(item,index) in msg" :to="item.hash" key="item.key">
          <div class="place-hot" @click="clicked(index)" :class="{active1: item.select}">
            <img :src="item.pic1" alt="" v-show="!item.select">
            <img :src="item.pic" alt="" v-show="item.select">
            <p v-text="item.title"></p>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          msg:[
            {
              key: 1 ,
              title:'热门',
              pic:require('../../src/assets/icon/bei.png'),
              pic1:require('../../src/assets/icon/bei1.png'),
              select: false,
              hash:'/place/hot'
            },
            {
              key: 2,
              title:'国内',
              pic:require('../../src/assets/icon/bao.png'),
              pic1:require('../../src/assets/icon/bao1.png'),
              select:false,
              hash:'/place/nei'
            },
            {
              key: 3,
              title:'国外',
              pic:require('../../src/assets/icon/nan.png'),
              pic1:require('../../src/assets/icon/bao1.png'),
              select:false,
              hash:'/place/wai'
            }
          ]
        }
      },
      methods: {
        clicked(index){
          for(var i=0;i<this.msg.length;i++){
            this.msg[i].select = false;
          }
          this.msg[index].select = true;
        }
      },
      mounted(){
        for(var i=0;i<this.msg.length;i++){
          this.msg[i].select = false;
          if(this.msg[i].hash === window.location.hash.substr(1)){
            this.msg[i].select = true;
          }
        }
        this.msg[0].select = true;

      }
    }
</script>

<style>
.conta{
  padding-left: 3.25rem;
  position: relative;
}
  .left-bar{
    width: 3.25rem;
    height: 30rem;
    background-color: #F4F4F4;
    position: absolute;
    top: 0;
    left: 0;
  }
  .place-hot{
    width: 100%;
    border-left: 0.2rem solid transparent;
    box-sizing: border-box;
    height: 4.5rem;
    text-align:center;
    color: #ccc;
  }
.place-hot img{
  width: 1.5rem;
  height: 1.4rem;
  margin-top: 1rem;
}
.active1 {
  border-left: 0.2rem solid yellow;
  background-color: #fff;
  color: #1448ae;
}
</style>
