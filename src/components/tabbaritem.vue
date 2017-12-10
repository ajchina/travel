<template>
    <div class="tabbar-item" @click="clickItem(index)">
      <span v-show="!iconshow">
        <slot name="normalicon"></slot>
      </span>
      <span v-show="iconshow">
         <slot name="activeicon"></slot>
      </span>
      <p v-text="iconText" :class="{active: !iconshow}"></p>
    </div>
</template>

<script>
export default {
  props:['iconText','index','selected'],
  methods:{
    clickItem(index){
      this.$emit('clickIndex',index);
    }
  },
  computed: {
    iconshow(){
      if(this.index == this.selected){
        return false;
      }
      return true;
    }
  }
}
</script>

<style>
.tabbar-item{
  width: 25%;
  height: 2.5rem;
  float: left;
  text-align: center;
}
  .tabbar-item img{
    width: 1.35rem;
    height: 1.15rem;
    margin-top: 0.28rem;
    text-align: center;
  }
  .tabbar-item p{
    font-size: 0.3rem;
    color: #999999;
    font-weight: 600;
  }
  .tabbar-item .active{
    color: #1448ae;
  }
</style>
