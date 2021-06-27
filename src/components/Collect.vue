<template>
  <div>
    <div class="main">
      <table border="1" class="table table-striped table-bordered table-condensed table-hover">
      <tbody>
        <tr>
          <td align="center">序号</td>
          <td align="center" id="songwidth">歌曲</td>
          <td align="center" >歌手</td>
          <td align="center">取消收藏</td>
        </tr>
        <tr v-for="(item,index) in favorites" :key="index">
          <td align="center">{{index+1}}</td>
          <td align="left">
              <a href="javascript:;" @click="playMusic0(item)">
                {{item.name}}
              </a>
          </td>
          <td align="center" >
            {{item.artists[0].name}}<span 
            v-if="item.artists[1]!=null">/{{item.artists[1].name}}</span>
          </td>
          <td align="center">
            <a href="javascript:;" @click="delFavorites(item)" 
            :class='!collectionCheck(item)?"collected":""' title="取消收藏">❤</a>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import "base/slider/slider.css";
// import api from 'api/api'
import { playMusic } from "api/api";
import { searchMusic } from "api/api";
import { getpicUrl } from "api/api";
import { getFavorites } from "api/api";

export default {
  data() {
    return {
      name:'',
      list: [],
      favorites:[],
    };
  },
  methods: {
    /* 播放 */
    playMusic0(item){
      console.log(item);
      let id=item.id;
      /* 获取图片 */
      getpicUrl((data)=>{
        let picUrl=data;
        this.$parent.setplay_img(picUrl);
      },id)
      
      /* 播放音乐 */
      playMusic((data)=>{
          this.$parent.setplay_url(data.url);
          console.log(data);
        },id)
      
      /* 获取名称 */
      let txt='';
      for (let index = 0; index < item.artists.length&&index<2; index++) {
        txt += item.artists[index].name;
        if(index+1<item.artists.length&&index<1){
          txt+='/';
        }
      }
      txt+='-'+item.name;
      this.$parent.setplay_name(txt);
    },
    /* 查询 */
    search(){
      searchMusic((data)=>{
        console.log(data);
        this.list=data;
      },this.name)
    },
    collectionCheck(item){
      let flag=true;
      for (let index = 0; index < this.favorites.length; index++) {
        const element = this.favorites[index];
        if(element.id===item.id){
            flag=false;
        }
      }
      return flag;
    },
    delFavorites(item){
      let flag=this.collectionCheck(item);
      if(!flag){
        for (let index = 0; index < this.favorites.length; index++) {
          const element = this.favorites[index];
          if(element.id===item.id){
            this.favorites.splice(index,1); 
            console.log("已取消收藏该歌曲");
          }
        }
      }else{
        console.log("收藏夹内没有这首歌");
      }
    },
  },
  created() {
    getFavorites((data)=>{
        this.favorites=data;
    });
  },
};
</script>