<template>
  <div class="container">
    <div class="left_li" ref="leftLi">
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default{
    data(){
        return{

        }
    },
    created () {
      this.$nextTick(()=>{
        this.initScroll()
      })
    },
    methods:{
        initScroll(){
            let leftScrod = new BScroll(this.$refs.leftLi,{
              click:true
            })
      }
    }
  }
</script>
<style>
  .left_li{height: 500px;overflow: hidden;}
.left_li li{height: 30px;line-height: 30px;background: chartreuse;border: 1px solid #fff;}
</style>

