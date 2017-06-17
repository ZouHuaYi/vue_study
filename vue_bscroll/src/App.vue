<template>
  <div id="app">
    <div class="header"><banner :pics="msg.pics"></banner></div>
    <div class="nav_bar" >
      <div class="nav">
           <router-link  to="/Hello">Hello</router-link>
      </div>
      <div class="nav">
        <router-link to="/Body">Body</router-link>
      </div>
      <div class="nav">
        <router-link to="/Girl">Girl</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import banner from "./banner/banner.vue"
  import data from  "./data.json"
export default {
    name: 'app',
    data(){
        return {
          msg:data.head,

        }
    },
    methods:{

    },
    created(){
        //在这里数据更新后才会存在的
      this.$nextTick( () => {

      })
    },
  components:{
        banner
  }
}
</script>

<style>
html,body,ul,li,p,h1,h2,h3,h4{margin: 0;padding: 0;font-family: "微软雅黑" Arial;}
html{width: 100%;height: 100%;}
body{width: 100%;height: 100%;overflow: hidden;}
a{text-decoration: none;}
li{list-style: none;}
.header{width: 100%;height: 240px;overflow: hidden;}
.nav_bar{width: 100%;height: 60px;font-size: 30px;}
.nav_bar .nav{height: 60px;width: 33.33%;float: left;text-align: center;line-height: 60px;}
.nav_bar .nav a{display: block;width: 100%;height:100%;color: #000;background: lightblue;}
.nav_bar .nav a.router-link-active{background:#333;color: #fff;}
.container{width: 100%;}
</style>
