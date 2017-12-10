<template>
    <div class="lv-box">
      <div class="lv-items">
        <slot name="one"></slot>
        <p v-text="hot1"></p>
      </div>
      <div class="lv-items">
        <slot name="two"></slot>
        <p v-text="hot2"></p>
      </div>
      <div class="lv-items">
        <slot name="three"></slot>
        <p v-text="hot3"></p>
      </div>
      <div class="lv-items">
        <slot name="four"></slot>
        <p v-text="hot4"></p>
      </div>
      <div class="lv-items">
        <slot name="five"></slot>
        <p v-text="hot5"></p>
      </div>
      <div class="lv-items">
        <slot name="six"></slot>
        <p v-text="hot6"></p>
      </div>
      <div class="lv-items">
        <slot name="seven"></slot>
        <p v-text="hot7"></p>
      </div>
      <div class="lv-items">
        <slot name="aight"></slot>
        <p v-text="hot8"></p>
      </div>
      <div class="clear">

      </div>
    </div>
</template>

<script>
    export default {
      props: [
        'hot1','hot2','hot3','hot4','hot5','hot6','hot7','hot8'
      ]
    }
</script>

<style scoped>
.lv-items{
  width: 7.1rem;
  height: 6.6rem;
  border: 1px solid #CCCCCC;
  box-sizing: border-box;
  float: left;
  margin-bottom: .4rem;
}
.lv-items img{
  width: 100%;
}
.lv-items p {
  width: 100%;
  height: 0.9rem;
  text-align: center;
  line-height: .9rem;
  font-size: 0.7rem;
}
  .clear{
    clear: both;
    height: 50px;
  }
</style>
