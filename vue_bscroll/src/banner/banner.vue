<template>
  <div class="swipes">
    <div class="swipe-all" ref="swipe" >
          <div v-for="pic in pics" class="swipe-item"><img :src="pic" alt=""></div>
    </div>
    <div class="swipe-small">
        <div v-for="(pic,index) in pics" class="swipe-num" :class="{'active':iNum===index}">{{index}}</div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
        pics:{
            type:Array
        }
    },
    data(){
      return {
        iX:0,
        iE:0,
        iN:0,
        iNum:0,
        iAuto:3000,
        iTime:null,
        iLength:0,
        iView:0
      }
    },
    created(){
        this.$nextTick(()=>{
            this.iView=this.$el.clientWidth;
            let swipeItem=this.$refs.swipe.querySelectorAll(".swipe-item");
            this.iLength=swipeItem.length;
            swipeItem.forEach((item,index)=>{
              item.style.width=this.iView+"px";
            })
            this.$refs.swipe.style.width=this.iLength*this.iView+"px";
        })
    },
    methods:{
        moveRun(){
          this.$refs.swipe.style.transform = this.$refs.swipe.style.webkitTransform="translate3d("+this.iN+"px,0,0)"
        },
        tapRun(){
            this.iN=-this.iNum*this.iView;
            this.$refs.swipe.style.transition= this.$refs.swipe.style.webkitTransition=".5s";
            this.$refs.swipe.style.transform= this.$refs.swipe.style.webkitTransform="translate3d("+this.iN+"px,0,0)";
        },
        autoPlay(){
          if(this.iAuto>0){
            this.$refs.swipe.style.transition=this.$el.style.webkitTransition="0";
            this.iTime=setInterval(()=>{
              this.iNum++;
              this.iNum=this.iNum%this.iLength;
              this.tapRun();
            },this.iAuto)
          }
        }
      },
    mounted (){
      let par=this.$el;
      this.autoPlay();
      par.addEventListener("touchstart",(ev)=>{
          clearInterval(this.iTime);
          ev=ev.changedTouches[0];
          this.iX=ev.pageX;
          this.iE=this.iN;
      });
      par.addEventListener("touchmove",(ev)=>{
          ev=ev.changedTouches[0];
          let iM=ev.pageX-this.iX;
          this.iN=iM+this.iE;
          this.moveRun();
      });
      par.addEventListener("touchend",(ev)=>{
        this.iNum=-Math.round(this.iN/this.iView);
        if(this.iNum<=0){
            this.iNum=0;
        }
        if(this.iNum>=this.iLength-1){
          this.iNum=this.iLength-1
        }
        this.tapRun();
        this.autoPlay();
      });
    }
  }
</script>
<style scoped>
  .swipes{width: 100%;height: 100%;position: relative;}
  .swipe-all{height: 100%;}
  .swipe-all .swipe-item{float: left;}
  .swipe-all .swipe-item img{width: 100%;}
  .swipes .swipe-small{height: 30px;width: 100%;position: absolute;bottom: 10px;left: 0;text-align: center;line-height: 30px;color: #ffffff}
  .swipes .swipe-num{display: inline-block;width: 30px;background: rebeccapurple;margin: 0px 5px;}
  .swipes .swipe-num.active{background: rosybrown;}
</style>

