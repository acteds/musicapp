<template>
  <div id="app">
    <div class="logo"><img src="./assets/logo.png" alt="QQ音乐"></div>
    <Nav></Nav>
    <router-view/>
    <div class="audio_con">
        <!-- autoplay自动播放 -->
        <div id="other" v-if="play_img!=''">
            <img alt="140x140" :src="play_img"  class="img-thumbnail" />
            <div id="musicname">{{play_name}}</div>
        </div>
        <audio ref='audio' :src="play_url" controls autoplay loop class="myaudio"></audio>
      </div>
      <div style="height:130px"></div>
  </div>
</template>

<style>
@import "./assets/scrollBar.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 492px;
  margin:0 auto;
}

#nav {
  padding: 20px 0;
}

#nav a {
  margin: 11px;
  font-size: 22px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.logo img {
    width: 160px;
    float: left;
    margin-top: 14px;
    margin-left: 12px;
}
.main {
    margin-top: 10px;
    padding: 5px;
    font-size: 15px;
}
.audio_con {
    width: 492px;
    position: fixed;
    bottom: 0px;
    /* height: 50px; */
    background-color: #f1f3f4;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 999;
}
.myaudio {
  width: 100%;
  height: 40px;
  margin-top: 5px;
  outline: none;
  background-color: #f1f3f4;
}
.img-thumbnail{
  width: 80px;
  display: inline; 
  float: left; 
}
#musicname{
    height: 80px;
    line-height: 80px;
    font-size: 25px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
td#songwidth {
    width: 42%;
}
a.collected{
    color: red;
}
</style>
<script>
import "./base/bootstrap/css/bootstrap.css";
import 'assets/reset.css';
import Nav from 'views/Nav'
export default {
  data() {
    return {
      play_url:"123",
      play_img:"",
      play_name:"",
    };
  },
  methods: {
    setplay_url(url){
      console.log(url);
      this.play_url=url;
    },
    setplay_img(url){
      this.play_img=url;
    },
    setplay_name(txt){
      this.play_name=txt;
      console.log(txt);
    },
  },
  components:{
    Nav
  },
}

</script>
